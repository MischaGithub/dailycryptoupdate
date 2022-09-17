import React from 'react';
import CryptoItem from '../../components/crypto-item';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1 className={styles.headingTitle}>Cryptocurrency Prices</h1>
      </div>

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
              <span className={styles.headerTitle}>Last 7 days</span>
            </li>
          </ul>
        </div>
        <ul className={styles.cryptoList}>
          <CryptoItem />
        </ul>
      </section>

      {/* <a href='/books'>Dashboard</a> */}
    </div>
  );
};

export default Dashboard;
