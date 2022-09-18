import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/trade.png';
import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navItems}>
        <Link to='/' className={styles.navLogo}>
          <img src={logo} className='Nav-logo' alt='logo' />
        </Link>
        <span className={styles.heading}>Daily Crypto Update</span>
      </div>
    </div>
  );
};

export default Navbar;
