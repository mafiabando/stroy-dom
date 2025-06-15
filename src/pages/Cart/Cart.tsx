import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import styles from './Cart.module.css';
import Modal from '../../components/Modal/Modal';
import { CartContext } from '../../context/CartContext';
import { ICartItem } from '../../types';
import OrderForm from '../../components/OrderForm/OrderForm';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  useEffect(() => {
    calculateTotal(cartItems);
  }, [cartItems]);

  const calculateTotal = (items: ICartItem[]) => {
    const sum = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(sum);
  };

  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Ваша корзина</h1>
      
      {cartItems.length === 0 ? (
        <div className={styles.empty}>
          <p>Корзина пуста</p>
          <Link to="/" className={styles.ctaButton}>
            Перейти в меню
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.items}>
            {cartItems.map(item => (
              <CartItem
                key={item.key}
                item={item}
                onQuantityChange={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>
          
          <div className={styles.summary}>
            <div className={styles.total}>
              <span>Итого:</span>
              <span>{total} ₽</span>
            </div>
            <button 
            className={styles.orderButton}
            onClick={() => setIsOrderOpen(true)}
            >
              Оформить заказ
            </button>
          </div>

          <Modal isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)}>
        <OrderForm 
          cartItems={cartItems}
          total={total}
          onClose={() => setIsOrderOpen(false)} 
        />
      </Modal>
        </>
      )}
    </div>
  );
};

export default Cart;