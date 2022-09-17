import React from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../../utils/fetchData';
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
  const { response } = fetchData(
    `coins/${id}/market_chart?vs_currency=zar&days=7`
  );

  if (!response) {
    return <div>Please wait...</div>;
  }

  const chartData = response?.prices?.map((val) => ({
    x: val[0],
    y: val[1].toFixed(2),
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
      <Line options={options} data={data} />
    </div>
  );
};

export default CoinChart;
