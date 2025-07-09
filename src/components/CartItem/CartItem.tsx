import { useState } from "react";
import styles from "./CartItem.module.css";
import { ICartItem } from "../../types";

interface CartItemProps {
  item: ICartItem;
  onQuantityChange: (key: string, newQuantity: number) => void;
  onRemove: (key: string) => void;
}

const CartItem = ({ item, onQuantityChange, onRemove }: CartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      onQuantityChange(item.key!, quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    onQuantityChange(item.key!, quantity + 1);
  };

  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.title} className={styles.image} />

      <div className={styles.details}>
        {item.size !== undefined ?
          <h3 className={styles.title}>{item.title} - {item.size}</h3>
          : <h3 className={styles.title}>{item.title}</h3>

        }
        <div className={styles.price}>{item.price} ₽</div>
      </div>

      <div className={styles.controls}>
        <button onClick={handleDecrement} className={styles.controlButton}>
          -
        </button>

        <input
          type="number"
          min={1}
          step={1}
          value={quantity}
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            if (!isNaN(val) && val >= 1) {
              setQuantity(val);
              onQuantityChange(item.key!, val);
            } else if (e.target.value === "") {
              setQuantity(1);
              onQuantityChange(item.key!, 1);
            }
          }}
          className={styles.quantityInput}
        />
        <span>шт</span>

        <button onClick={handleIncrement} className={styles.controlButton}>
          +
        </button>
      </div>


      <button className={styles.removeButton} onClick={() => onRemove(item.key!)}>
        ×
      </button>
    </div>
  );
};

export default CartItem;
