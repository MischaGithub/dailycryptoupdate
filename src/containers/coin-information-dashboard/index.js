import React, { useState } from 'react';
import CoinChart from '../../components/coin-chart';
import fetchData from '../../utils/fetchData';
import { useParams } from 'react-router-dom';
import { currencyFormatter } from '../../utils/currencyFormatter';
import styles from './coin-dashboard.module.scss';

const CoinInformationDashboard = () => {
  const [selectedItem, setSelectedItem] = useState('price');
  const [days, setDays] = useState('24h');
  const [chartData, setChartData] = useState([]);
  const { id } = useParams();

  const handleChartUpdate = async (value) => {
    setDays(value);
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=zar&days=${days}`
      );

      const json = await res.json();

      setChartData(json);
      console.log(json, 'res');
      return json;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelection = (value) => {
    console.log(value, 'va');
    setSelectedItem(value);
  };

  const { prices, market_caps, total_volume } = chartData;
  console.log(prices, 'hello');

  const { response } = fetchData(
    `coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );

  const { name, market_cap_rank, image, market_data } = response;

  return (
    <div className={styles.coinInfoContainer}>
      <section className={styles.coinDesContainer}>
        <span className={styles.coinRank}>Rank #{market_cap_rank}</span>
        <img src={image?.small} loading='lazy' alt='coin' />
        <h2 className={styles.coinName}>{name}</h2>
        <span className={styles.coinInfoLabel}>
          {currencyFormatter.format(market_data?.current_price?.zar)}
        </span>
      </section>
      <section className={styles.coinDetailsContainer}>
        <div className={styles.coinDetails}>
          <span className={styles.coinInfoLabelOne}>Market Cap</span>
          <span className={styles.coinInfoLabelTwo}>
            {`${currencyFormatter.format(market_data?.market_cap?.zar)}`}
          </span>
        </div>
        <div className={styles.coinDetails}>
          <span className={styles.coinInfoLabelOne}>Total Volume</span>
          <span className={styles.coinInfoLabelTwo}>
            {`${currencyFormatter.format(market_data?.total_volume?.zar)}`}
          </span>
        </div>
        <div className={styles.coinDetails}>
          <span className={styles.coinInfoLabelOne}>
            Fully Diluted Valuation
          </span>
          <span className={styles.coinInfoLabelTwo}>
            {`${currencyFormatter.format(
              market_data?.fully_diluted_valuation?.zar
            )}`}
          </span>
        </div>
        <div className={styles.coinDetails}>
          <span className={styles.coinInfoLabelOne}>Total Supply</span>
          <span className={styles.coinInfoLabelTwo}>
            {market_data?.total_supply}
          </span>
        </div>
        <div className={styles.coinDetails}>
          <span className={styles.coinInfoLabelOne}>Max Supply</span>
          <span className={styles.coinInfoLabelTwo}>
            {market_data?.max_supply}
          </span>
        </div>
      </section>

      <section className={styles.buttonsListContainer}>
        <button
          className={styles.buttonItem}
          onClick={() => handleSelection('price')}
        >
          <span className={styles.buttonTitle}>Price</span>
        </button>

        <button
          className={styles.buttonItem}
          onClick={() => handleSelection('market')}
        >
          <span className={styles.buttonTitle}>Market Cap</span>
        </button>
      </section>
      <section className={styles.buttonsListContainer}>
        <button
          className={styles.buttonItemHour}
          onClick={() => handleChartUpdate('24h')}
        >
          <span className={styles.buttonTitle}>24h</span>
        </button>

        <button
          className={styles.buttonItemHour}
          onClick={() => handleChartUpdate('7d')}
        >
          <span className={styles.buttonTitle}>7d</span>
        </button>
      </section>

      <CoinChart data={response} />
    </div>
  );
};

export default CoinInformationDashboard;
