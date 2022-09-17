import React from 'react';
import logo from '../../assets/trade.png';
import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navItems}>
        <div className={styles.navLogo}>
          <img src={logo} className='Nav-logo' alt='logo' />
        </div>
        <span className={styles.heading}>Daily Crypto Update</span>
      </div>
    </div>
  );
};

export default Navbar;
