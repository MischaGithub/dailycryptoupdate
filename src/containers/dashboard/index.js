import React from 'react';
import CryptoItem from '../../components/crypto-item';
import fetchInititalData from '../../utils/fetchData';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  const { response, loading } = fetchInititalData(
    'coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1&sparkline=true'
  );

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1 className={styles.headingTitle}>Cryptocurrency Prices</h1>
      </div>

      {!loading && (
        <section className={styles.cryptoSectionContainer}>
          <div className={styles.headerContainer}>
            <ul className={styles.headerList}>
              <li className={styles.headerNumber}>
                <span className={styles.headerTitle}>#</span>
              </li>
              <li className={styles.headerCoin}>
                <span className={styles.headerTitle}>Coin</span>
              </li>
              <li className={styles.headerPrice}>
                <span className={styles.headerTitle}>Price</span>
              </li>

              <li className={styles.headerMktCap}>
                <span className={styles.headerTitle}>Mkt Cap</span>
              </li>

              <li className={styles.headerChart}>
                <span className={styles.headerTitle}>24h</span>
              </li>
            </ul>
          </div>
          <ul className={styles.cryptoList}>
            {response?.map((coinItem) => (
              <li key={coinItem.id} className={styles.coinBlock}>
                <CryptoItem coinItem={coinItem} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
