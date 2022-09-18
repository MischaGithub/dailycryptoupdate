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
import {
  pricesDataOptions,
  categoryDataOptions,
} from '../../utils/priceDataOptions';
import getChartData from '../../utils/getChartData';
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
  const [selection, setSelection] = useState('prices');
  const [days, setDays] = useState('24h');
  const [newData, setNewData] = useState(null);

  const handleDayUpdate = async (e, value) => {
    setDays(value);
  };

  const handleSelectionUpdate = async (e, value) => {
    setSelection(value);
  };

  useEffect(() => {
    getChartData(id, days, setNewData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  const chartData =
    newData &&
    newData[selection ?? selection]?.map((val) => ({
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
          {categoryDataOptions?.map((category) => (
            <li key={category.name}>
              <button
                className={
                  selection === category.value
                    ? styles.buttonItemDefault
                    : styles.buttonItem
                }
                onClick={(e) => handleSelectionUpdate(e, `${category?.value}`)}
              >
                <span className={styles.buttonTitle}>{category?.name}</span>
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.buttonsListContainer}>
          {pricesDataOptions?.map((price) => (
            <li key={price.name}>
              <button
                className={
                  days === price.value
                    ? styles.buttonItemHourDefault
                    : styles.buttonItemHour
                }
                onClick={(e) => handleDayUpdate(e, `${price?.value}`)}
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
