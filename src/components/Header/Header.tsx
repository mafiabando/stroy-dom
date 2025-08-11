import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import styles from './Header.module.css';
import menuItems from '../../pages/Home/MenuData';
import { useModal } from '../../context/ModalContext';

const Header = () => {
  const { openProductModal } = useModal();
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredItems = searchQuery
    ? menuItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  const handleSearchFocus = () => setIsSearchOpen(true);
  const handleSearchBlur = () => setTimeout(() => setIsSearchOpen(false), 200); // задержка для клика
  const handleItemClick = (id: string) => {
    const product = menuItems.find(item => item.id === id);
    if (!product || !product.urlId) return;
    setSearchQuery('');
    window.location.hash = `#/product/${product.urlId}`;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>

        {/* Search Bar */}
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Поиск товара..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            className={styles.searchInput}
          />

          {/* Dropdown с результатами */}
          {isSearchOpen && filteredItems.length > 0 && (
            <ul className={styles.searchResults}>
              {filteredItems.map((item) => (
                <li
                  key={item.id}
                  className={styles.searchResultItem}
                  onClick={() => {
                    handleItemClick(item.id)
                  }}
                >
                  <img src={item.image} alt={item.title} loading="lazy" className={styles.resultImage} />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.cart_container}>
          <Link to='/cart' className={styles.cart}>
            <Cart />
          </Link>
          {totalPrice !== 0 ? <span className={styles.counter}>{totalPrice}₽</span> : null}
        </div>
      </div>
    </header>
  );
};

export default Header;