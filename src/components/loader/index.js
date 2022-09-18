import React from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.coinInfoContainer}>
      <Oval
        height={200}
        width={'100%'}
        color='	rgb(96, 130, 182)'
        wrapperStyle={{}}
        wrapperClass={styles.loaderContainer}
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor='#4fa94d'
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
