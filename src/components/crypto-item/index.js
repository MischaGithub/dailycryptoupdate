import React from 'react';
import styles from './crypto-item.module.scss';

const CryptoItem = ({ coinItem }) => {
  console.log(coinItem, 'props');
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'ZAR',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  console.log(formatter.format(2500), 'hello');
  formatter.format(2500);

  return (
    <div className={styles.coinContainer}>
      <ul className={styles.coinInfoList}>
        <li className={styles.coinRank}>
          <span className={styles.coinInfoLabel}>
            {coinItem?.market_cap_rank}
          </span>
        </li>
        <li className={styles.coinName}>
          <img src={coinItem?.image} loading='lazy' alt='coin' />
          <span className={styles.coinInfoLabel}>{coinItem?.name}</span>
        </li>
        <li className={styles.coinPrice}>
          <span className={styles.coinInfoLabelPrice}>
            {formatter.format(coinItem?.current_price)}
          </span>
        </li>
        <li className={styles.coinMktCap}>
          <span className={styles.coinInfoLabelPrice}>
            {formatter.format(coinItem?.market_cap)}
          </span>
        </li>
        <li className={styles.coinChart}>
          <span className={styles.coinInfoLabelPrice}>
            {formatter.format(coinItem?.price_change_24h)}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CryptoItem;
