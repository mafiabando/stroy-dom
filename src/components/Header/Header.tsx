import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Cart } from '../../assets/Cart.svg';
import styles from './Header.module.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>

      <div className={styles.cart}>
        <Link to='/cart' className={styles.burger}>
        <Cart /> 
        </Link>
        <span className={styles.counter}>{cartCount}</span>
        </div> 
      </div>
    </header>
  );
};

export default Header;