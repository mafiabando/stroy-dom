import { useContext, useState } from "react";
import { ICartItem } from "../../types";
import styles from "./OrderForm.module.css";
import { CartContext } from "../../context/CartContext";

interface OrderFormProps {
  cartItems: ICartItem[];
  total: number;
  onClose: () => void;
}

const OrderForm = ({ cartItems, total, onClose }: OrderFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "cash",
    comment: "",
  });

  const { clearCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const phoneRegex = /^\+?\d{10,15}$/;

    if (!phoneRegex.test(formData.phone)) {
      setError("Введите корректный номер телефона (например, 79001234567)");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://server-stroydom-telegram.onrender.com/api/send-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ formData, cartItems, total }),
        }
      );

      if (response.ok) {
        onClose();
        localStorage.removeItem("cart");
        clearCart();
        alert("Заказ успешно отправлен!");
      } else {
        setError("Ошибка отправки заказа");
      }
    } catch (err) {
      setError("Ошибка соединения");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.orderForm}>
      <h2>Оформление заказа</h2>

      <label className={styles.formGroup}>
        Имя:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </label>

      <label className={styles.formGroup}>
        Номер телефона:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+79001234567"
          className={styles.input}
        />
      </label>

      <label className={styles.formGroup}>
        Адрес доставки:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={styles.input}
          placeholder="Оставьте поле пустым, если заберёте заказ самостоятельно."
        />
      </label>

      <label className={styles.formGroup}>
        Способ оплаты:
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="cash">Наличными</option>
          <option value="transfer">Переводом</option>
        </select>
      </label>

      <label className={styles.formGroup}>
        Комментарий к заказу:
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Самовывоз, дополнительные товары или инструкция по доставке - всё сюда."
        />
      </label>

      {error && <p className={styles.error}>{error}</p>}
      <button
        type="submit"
        className={styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? "Отправка..." : "Отправить заказ"}
      </button>
    </form>
  );
};

export default OrderForm;
