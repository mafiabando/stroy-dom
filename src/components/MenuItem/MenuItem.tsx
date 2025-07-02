import { useState, useContext, useEffect } from "react";
import styles from "./MenuItem.module.css";
import modalStyles from "../Modal/Modal.module.css";
import { CartContext } from "../../context/CartContext";
import Modal from "../Modal/Modal";
import { MainCategory } from "../../pages/Home/Home";
import { SubCategory } from "../../pages/Home/Home";

export interface MenuItemProps {
  id: string;
  title: string;
  description: string;
  image: string;
  mainCategory: MainCategory;
  subCategory: SubCategory<MainCategory>;
  sizeText?: string;
  pricesBySize?: Record<string, number>;
  price?: number;
}

const MenuItem = ({
  id,
  title,
  description,
  image,
  sizeText,
  pricesBySize,
  price
}: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useContext(CartContext);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setQuantity(1);
    setSelectedSize("1.5м");
  };
  const handleAddToCart = () => {
    const priceForSelectedSize =
      selectedSize && pricesBySize && pricesBySize[selectedSize] !== undefined
        ? pricesBySize[selectedSize]
        : price;

    addToCart({
      id,
      title,
      image,
      quantity,
      price: priceForSelectedSize!,
      ...(selectedSize ? { size: selectedSize } : {}),
    });
    handleCloseModal();
  };

  useEffect(() => {
    if (pricesBySize && Object.keys(pricesBySize).length > 0) {
      const availableSizes = Object.keys(pricesBySize);
      if (availableSizes.length === 1) {
        setSelectedSize(availableSizes[0]);
      } else if (!selectedSize || !availableSizes.includes(selectedSize)) {
        setSelectedSize(availableSizes[0]);
      }
    } else {
      setSelectedSize(null);
    }
  }, [pricesBySize, selectedSize]);


  return (
    <>
      <div
        className={styles.card}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt={title}
          className={styles.image}
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          onClick={handleOpenModal}
        />

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          {sizeText && <span>{sizeText}</span>}
          {pricesBySize && Object.keys(pricesBySize).length > 0 && (
            <div className={styles.sizeSelector} onClick={(e) => e.stopPropagation()}>
              {Object.entries(pricesBySize).map(([sizeOption, price]) => (
                  <label key={sizeOption} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name={`size-${id}`}
                      value={sizeOption}
                      checked={selectedSize === sizeOption}
                      onChange={() => setSelectedSize(sizeOption)}
                      className={styles.radioInput}
                    />
                    <span className={styles.radioCustom}></span>
                    {sizeOption}
                  </label>
              ))}
            </div>
          )}

          <div className={styles.price}>
            {selectedSize && pricesBySize && pricesBySize[selectedSize] !== undefined
              ? pricesBySize[selectedSize] + " ₽"
              : price !== undefined
                ? price + " ₽"
                : "Цена не указана"}
          </div>
          <button
            className={styles.button}
            onClick={(e) => {
              e.stopPropagation();

              const priceForSelectedSize =
                selectedSize && pricesBySize && pricesBySize[selectedSize] !== undefined
                  ? pricesBySize[selectedSize]
                  : price;

              addToCart({
                id,
                title,
                price: priceForSelectedSize!,
                image,
                quantity: 1,
                ...(selectedSize ? { size: selectedSize } : {}),
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
            {sizeText && <span>{sizeText}</span>}

            {pricesBySize && Object.keys(pricesBySize).length > 0 && (
              <div className={modalStyles.sizeOptions}>
                {Object.entries(pricesBySize).map(([sizeOption]) => (
                  <label
                    key={sizeOption}
                    className={modalStyles.modalRadioLabel}
                  >
                    <input
                      type="radio"
                      name={`modal-size-${id}`}
                      value={sizeOption}
                      checked={selectedSize === sizeOption}
                      onChange={() => setSelectedSize(sizeOption)}
                      className={modalStyles.modalRadioInput}
                      disabled={Object.keys(pricesBySize).length === 1}
                    />
                    <span className={modalStyles.modalRadioCustom}></span>
                    {sizeOption}
                  </label>
                ))}
              </div>
            )}

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

                    {(selectedSize && pricesBySize && pricesBySize[selectedSize] !== undefined
                      ? pricesBySize[selectedSize]
                      : price ?? 0) * quantity} ₽
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
