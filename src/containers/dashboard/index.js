import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CryptoItem from '../../components/crypto-item';
import fetchInititalData from '../../utils/fetchData';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  const { response } = fetchInititalData(
    'coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1&sparkline=true'
  );
  const [coinsList, setCoinsList] = useState(response);
  const [hasMore, setHasMore] = useState(response);

  const fetchMoreData = () => {
    if (coinsList >= 100) {
      // this.setState({ hasMore: false });
      setHasMore(false);
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      console.log('fetching more data');
    }, 100);
  };

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
    </div>
  );
};

export default Dashboard;
