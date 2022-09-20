import React from 'react';
import { Link } from 'react-router-dom';
import { currencyFormatter } from '../../utils/currencyFormatter';
import styles from './crypto-item.module.scss';

const CryptoItem = ({ coinItem }) => {
  const {
    id,
    market_cap_rank,
    image,
    name,
    current_price,
    market_cap,
    price_change_percentage_24h,
    price_change_24h,
  } = coinItem;
  return (
    <Link to={`/coins/${id}`} original-title=''>
      <div className={styles.coinContainer}>
        <ul className={styles.coinInfoList}>
          <li className={styles.coinRank}>
            <span className={styles.coinInfoLabel}>{market_cap_rank}</span>
          </li>
          <li className={styles.coinName}>
            <img src={image} loading='lazy' alt='coin' />
            <span className={styles.coinInfoLabel} original-title=''>
              {name}
            </span>
          </li>
          <li className={styles.coinPrice}>
            <span className={styles.coinInfoLabelPrice}>
              {currencyFormatter.format(current_price)}
            </span>
          </li>
          <li className={styles.coinMktCap}>
            <span className={styles.coinInfoLabelPrice}>
              {currencyFormatter.format(market_cap)}
            </span>
          </li>

          <li className={styles.coinChart}>
            <span
              className={
                price_change_24h < 0
                  ? styles.coinInfoLabelPriceR
                  : styles.coinInfoLabelPriceG
              }
            >
              {parseFloat(price_change_percentage_24h).toFixed(2) + '%'}
            </span>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default CryptoItem;
