import { useState, useContext, useEffect } from "react";
import styles from "./MenuItem.module.css";
import modalStyles from "../Modal/Modal.module.css";
import { CartContext } from "../../context/CartContext";
import Modal from "../Modal/Modal";
import { Category } from "../../pages/Home/Home";

export interface MenuItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Category;
  pricesByLength: Partial<{
    "1.5м": number;
    "1.7м": number;
    "2м": number;
  }>;
}

const MenuItem = ({
  id,
  title,
  description,
  image,
  pricesByLength,
}: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedLength, setSelectedLength] = useState<"1.5м" | "1.7м" | "2м">(
    "1.5м"
  );
  const { addToCart } = useContext(CartContext);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setQuantity(1);
    setSelectedLength("1.5м");
  };
  const handleAddToCart = () => {
    const priceForSelectedLength = pricesByLength[selectedLength];
    addToCart({
      id,
      title,
      image,
      quantity,
      price: priceForSelectedLength!,
      length: selectedLength,
    });
    handleCloseModal();
  };

  useEffect(() => {
    const availableLengths = Object.keys(pricesByLength) as Array<
      "1.5м" | "1.7м" | "2м"
    >;

    if (
      availableLengths.length === 1 &&
      selectedLength !== availableLengths[0]
    ) {
      setSelectedLength(availableLengths[0]);
    }
  }, [pricesByLength, selectedLength]);

  return (
    <>
      <div
        className={styles.card}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleOpenModal}
      >
        <img
          src={image}
          alt={title}
          className={styles.image}
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>

          <div
            className={styles.lengthSelector}
            onClick={(e) => e.stopPropagation()}
          >
            {(["1.5м", "1.7м", "2м"] as const).map((lengthOption) =>
              pricesByLength[lengthOption] !== undefined ? (
                <label key={lengthOption} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name={`length-${id}`}
                    value={lengthOption}
                    checked={selectedLength === lengthOption}
                    onChange={() => setSelectedLength(lengthOption)}
                    className={styles.radioInput}
                    disabled={Object.keys(pricesByLength).length === 1}
                  />
                  <span className={styles.radioCustom}></span>
                  {lengthOption}
                </label>
              ) : null
            )}
          </div>

          <div className={styles.price}>{pricesByLength[selectedLength]} ₽</div>
          <button
            className={styles.button}
            onClick={(e) => {
              e.stopPropagation();
              addToCart({
                id,
                title,
                price: pricesByLength[selectedLength]!,
                image,
                quantity: 1,
                length: selectedLength,
              });
            }}
          >
            В корзину
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className={modalStyles.modalContainer}>
          <img src={image} alt={title} className={modalStyles.modalImage} />

          <div className={modalStyles.modalDetails}>
            <h2 className={modalStyles.modalTitle}>{title}</h2>
            <p className={modalStyles.modalText}>{description}</p>

            <div className={modalStyles.lengthOptions}>
              {(["1.5м", "1.7м", "2м"] as const).map((lengthOption) =>
                pricesByLength[lengthOption] !== undefined ? (
                  <label
                    key={lengthOption}
                    className={modalStyles.modalRadioLabel}
                  >
                    <input
                      type="radio"
                      name={`modal-length-${id}`}
                      value={lengthOption}
                      checked={selectedLength === lengthOption}
                      onChange={() => setSelectedLength(lengthOption)}
                      className={modalStyles.modalRadioInput}
                      disabled={Object.keys(pricesByLength).length === 1}
                    />
                    <span className={modalStyles.modalRadioCustom}></span>
                    {lengthOption}
                  </label>
                ) : null
              )}
            </div>

            <div className={modalStyles.priceControls}>
              <div className={modalStyles.quantityControls}>
                <button
                  className={modalStyles.controlButton}
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <div className={modalStyles.quantityDisplayWrapper}>
                  <span className={modalStyles.quantityDisplay}>
                    {quantity} шт
                  </span>
                  <div className={modalStyles.priceInfo}>
                    {pricesByLength[selectedLength]! * quantity} ₽
                  </div>
                </div>
                <button
                  className={modalStyles.controlButton}
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>

              <button
                className={modalStyles.addToCartButton}
                onClick={handleAddToCart}
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MenuItem;
