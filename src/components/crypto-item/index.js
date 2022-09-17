import React from 'react';
import { Link } from 'react-router-dom';
import { currencyFormatter } from '../../utils/currencyFormatter';
import styles from './crypto-item.module.scss';

const CryptoItem = ({ coinItem }) => {
  return (
    <Link to={`/coins/${coinItem.id}`} original-title=''>
      <div className={styles.coinContainer}>
        <ul className={styles.coinInfoList}>
          <li className={styles.coinRank}>
            <span className={styles.coinInfoLabel}>
              {coinItem?.market_cap_rank}
            </span>
          </li>
          <li className={styles.coinName}>
            <img src={coinItem?.image} loading='lazy' alt='coin' />
            <span className={styles.coinInfoLabel} original-title=''>
              {coinItem?.name}
            </span>
          </li>
          <li className={styles.coinPrice}>
            <span className={styles.coinInfoLabelPrice}>
              {currencyFormatter.format(coinItem?.current_price)}
            </span>
          </li>
          <li className={styles.coinMktCap}>
            <span className={styles.coinInfoLabelPrice}>
              {currencyFormatter.format(coinItem?.market_cap)}
            </span>
          </li>
          <li className={styles.coinChart}>
            <span className={styles.coinInfoLabelPrice}>
              {currencyFormatter.format(coinItem?.price_change_24h)}
            </span>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default CryptoItem;
