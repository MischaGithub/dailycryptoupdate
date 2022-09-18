import React, { useState } from 'react';
import CoinChart from '../../components/coin-chart';
import Loader from '../../components/loader';
import fetchData from '../../utils/fetchData';
import { useParams } from 'react-router-dom';
import { currencyFormatter } from '../../utils/currencyFormatter';
import styles from './coin-dashboard.module.scss';

const CoinInformationDashboard = () => {
  const { id } = useParams();
  const [selection, setSelection] = useState('prices');

  const { response, loading } = fetchData(
    `coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );

  const { name, market_cap_rank, image, market_data } = response;
  console.log(loading);

  return loading ? (
    <Loader />
  ) : (
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
        {market_data?.market_cap?.zar && (
          <div className={styles.coinDetails}>
            <span className={styles.coinInfoLabelOne}>Market Cap</span>
            <span className={styles.coinInfoLabelTwo}>
              {`${currencyFormatter.format(market_data?.market_cap?.zar)}`}
            </span>
          </div>
        )}

        {market_data?.total_volume?.zar && (
          <div className={styles.coinDetails}>
            <span className={styles.coinInfoLabelOne}>Total Volume</span>
            <span className={styles.coinInfoLabelTwo}>
              {`${currencyFormatter.format(market_data?.total_volume?.zar)}`}
            </span>
          </div>
        )}

        {market_data?.fully_diluted_valuation?.zar && (
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
        )}

        {market_data?.total_supply && (
          <div className={styles.coinDetails}>
            <span className={styles.coinInfoLabelOne}>Total Supply</span>
            <span className={styles.coinInfoLabelTwo}>
              {market_data?.total_supply}
            </span>
          </div>
        )}

        {market_data?.max_supply && (
          <div className={styles.coinDetails}>
            <span className={styles.coinInfoLabelOne}>Max Supply</span>
            <span className={styles.coinInfoLabelTwo}>
              {market_data?.max_supply}
            </span>
          </div>
        )}
      </section>

      <CoinChart selection={selection} setSelection={setSelection} />
    </div>
  );
};

export default CoinInformationDashboard;
