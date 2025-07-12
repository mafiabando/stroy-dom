import { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import { ICartItem } from "../../types";

interface CartItemProps {
  item: ICartItem
  onQuantityChange: (key: string, newQuantity: number) => void;
  onRemove: (key: string) => void;
}

const CartItem = ({ item, onQuantityChange, onRemove }: CartItemProps) => {
  const step = item.quantityStep ?? (item.isWeight ? 0.1 : 1);
  const minQty = item.minQuantity ?? (item.isWeight ? 0.1 : 1);

  const [quantity, setQuantity] = useState(item.quantity);
  const [quantityInput, setQuantityInput] = useState<string>(item.quantity.toString());

  useEffect(() => {
    setQuantity(item.quantity);
    setQuantityInput(item.quantity.toString());
  }, [item.quantity]);

  const clampQuantity = (val: number) => {
    return Math.max(minQty, val);
  };

  const formatQuantity = (val: number) => {
    // Для весовых округляем до 2 знаков после запятой, для целых — просто целое число
    return item.isWeight ? val.toFixed(2) : val.toString();
  };

  const updateQuantity = (newVal: number) => {
    const rounded = item.isWeight ? Number(newVal.toFixed(2)) : Math.round(newVal);
    const clamped = clampQuantity(rounded);
    setQuantity(clamped);
    onQuantityChange(item.key, clamped);
  };


  const handleDecrement = () => {
    updateQuantity(quantity - step);
  };

  const handleIncrement = () => {
    updateQuantity(quantity + step);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    setQuantityInput(val);

    if (val === "") {
      // Пустое значение — не меняем quantity, просто позволяем вводить
      return;
    }

    // Заменяем запятую на точку
    if (item.isWeight) {
      val = val.replace(",", ".");
    }

    // Разрешаем временно иметь точку в конце, например "0."
    if (item.isWeight && val.endsWith(".")) {
      // Не обновляем quantity, просто обновляем input
      return;
    }

    const parsed = item.isWeight ? parseFloat(val) : parseInt(val, 10);

    if (!isNaN(parsed) && parsed >= minQty) {
      updateQuantity(parsed);
    }
  };

  const handleInputBlur = () => {
    let val = quantityInput.trim();

    if (val === "" || isNaN(Number(val.replace(",", "."))) || Number(val.replace(",", ".")) < minQty) {
      // Восстанавливаем корректное значение
      setQuantityInput(formatQuantity(quantity));
    } else {
      val = val.replace(",", ".");
      const num = item.isWeight ? parseFloat(val) : parseInt(val, 10);
      if (!isNaN(num)) {
        const clamped = clampQuantity(item.isWeight ? Number(num.toFixed(2)) : num);
        setQuantity(clamped);
        setQuantityInput(formatQuantity(clamped));
        onQuantityChange(item.key, clamped);
      } else {
        setQuantityInput(formatQuantity(quantity));
      }
    }
  };


  const handleQuantityKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "ArrowLeft",
      "ArrowRight",
      "Delete",
      "Tab",
      "Enter",
      "Home",
      "End"
    ];

    // Разрешаем все сочетания с Ctrl или Cmd (Command на Mac)
    if (e.ctrlKey || e.metaKey) {
      return;
    }


    if (allowedKeys.includes(e.key)) {
      return; // разрешаем управляющие клавиши
    }

    if (item.isWeight) {
      const isNumber = /[0-9]/.test(e.key);
      const isDot = e.key === ".";
      const isComma = e.key === ",";

      if (!isNumber && !isDot && !isComma) {
        e.preventDefault();
        return;
      }

      // Запретить ввод второй точки или запятой
      const value = e.currentTarget.value;
      if ((isDot && value.includes(".")) || (isComma && value.includes(","))) {
        e.preventDefault();
        return;
      }
    } else {
      // Разрешаем только цифры
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    }
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
        <button onClick={handleDecrement} className={styles.controlButton} disabled={quantity <= minQty}>
          -
        </button>

        <input
          type="number"
          min={minQty}
          step={step}
          value={quantityInput}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleQuantityKeyDown}
          className={styles.quantityInput}
          inputMode={item.isWeight ? "decimal" : "numeric"}
        />
        <span>{item.isWeight ? "кг" : "шт"}</span>

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
