import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { pricesDataOptions } from '../../utils/priceDataOptions';
import styles from './coin-chart.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const CoinChart = () => {
  const { id } = useParams();
  const [days, setDays] = useState('24h');
  const [newData, setNewData] = useState(null);

  const handleChartUpdate = async (e, value) => {
    setDays(value);
  };

  const getChartData = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=zar&days=${days}`
      );

      const json = await res.json();
      console.log(json, 'prices');
      setNewData(json);

      return json;
    } catch (error) {
      console.log(error);
    } finally {
      console.log('done');
    }
  };

  useEffect(() => {
    getChartData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  const chartData = newData?.prices?.map((val) => ({
    x: val[0],
    y: val[1]?.toFixed(2),
  }));

  const options = {
    responsive: true,
  };

  const data = {
    labels: chartData?.map((value) => moment(value.x).format('DD MMM')),
    datasets: [
      {
        fill: true,
        label: id,
        data: chartData?.map((value) => value.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <div className={styles.pricesButtonsContainer}>
        <h3 className={styles.heading}>Prices</h3>
        <ul className={styles.buttonsListContainer}>
          {pricesDataOptions?.map((price) => (
            <li key={price.name}>
              <button
                className={styles.buttonItemHour}
                onClick={(e) => handleChartUpdate(e, `${price?.value}`)}
              >
                <span className={styles.buttonTitle}>{price?.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Line options={options} data={data} />
    </div>
  );
};

export default CoinChart;
