import React, { useState, useContext, useEffect } from "react";
import styles from "./MenuItem.module.css";
import modalStyles from "../Modal/Modal.module.css";
import { CartContext } from "../../context/CartContext";
import Modal from "../Modal/Modal";
import { MainCategory } from "../../pages/Home/Home";
import { SubCategory } from "../../pages/Home/Home";
import { useModal } from "../../context/ModalContext";
import { generateSEO } from "../../utils/seoUtils";

export interface MenuItemProps {
  id: string;
  title: string;
  description: string;
  image: string;
  mainCategory?: MainCategory;
  subCategory?: SubCategory<MainCategory>;
  sizeText?: string;
  pricesBySize?: Record<string, number>;
  price?: number;
  isWeight?: boolean;
  quantityStep?: number;
  minQuantity?: number;
}

const MenuItem = ({
  id,
  title,
  description,
  image,
  sizeText,
  pricesBySize,
  price,
  isWeight = false,
  quantityStep = 1,
  minQuantity = 1,
}: MenuItemProps) => {
  const step = quantityStep ?? (isWeight ? 0.1 : 1);
  const minQty = minQuantity ?? (isWeight ? 0.1 : 1);

  const { selectedProductId, closeProductModal } = useModal();
  const isModalOpen = selectedProductId === id;

  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(minQty);
  const [quantityInput, setQuantityInput] = useState(minQty.toString());
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useContext(CartContext);

  const { openProductModal } = useModal();
  const handleOpenModal = () => {
    console.log('isModalOpen:', isModalOpen, 'selectedProductId:', selectedProductId, 'id:', id);
    openProductModal(id)
  };

  const handleCloseModal = () => {
    closeProductModal()
    setQuantity(minQuantity);
    setSelectedSize(selectedSize);
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
      isWeight,
      ...(selectedSize ? { size: selectedSize } : {}),
    });
    handleCloseModal();
  };

  const handleDecrement = () => {
    setQuantity((prev) => {
      const newVal = Math.max(minQty, +(prev - step).toFixed(2));
      setQuantityInput(newVal.toString());
      return newVal;
    });
  }

  const handleIncrement = () => {
    setQuantity((prev) => {
      const newVal = +(prev + step).toFixed(2);
      setQuantityInput(newVal.toString());
      return newVal;
    });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuantityInput(val)

    const num = isWeight ? parseFloat(val) : parseInt(val, 10);
    if (!isNaN(num) && num >= minQty) {
      setQuantity(num);
    }
  }

  const handleInputBlur = () => {
    if (quantityInput === "" || isNaN(Number(quantityInput)) || Number(quantityInput) < minQty) {
      setQuantityInput(isWeight ? quantity.toFixed(2) : quantity.toString());
    }
  }

  const handleQuantityKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "ArrowLeft",
      "ArrowRight",
      "Delete",
      "Tab",
      "Enter",
      "Home",
      "End",
    ];

    // Разрешаем все сочетания с Ctrl или Cmd (Command на Mac)
    if (e.ctrlKey || e.metaKey) {
      return;
    }

    if (allowedKeys.includes(e.key)) {
      return; // разрешаем управляющие клавиши
    }

    if (isWeight) {
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
                image,
                quantity,
                price: priceForSelectedSize!,
                isWeight,
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
            {sizeText && <span className={modalStyles.modalSizeText}>{sizeText}</span>}

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
                  onClick={handleDecrement}
                >
                  -
                </button>
                <div className={modalStyles.quantityDisplayWrapper}>

                  <input
                    type="number"
                    min={minQty}
                    step={step}
                    value={quantityInput}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    onKeyDown={handleQuantityKeyDown}
                    className={modalStyles.quantityInput}
                  />{isWeight ? 'кг' : 'шт'}
                  <div className={modalStyles.priceInfo}>
                    {(selectedSize && pricesBySize && pricesBySize[selectedSize] !== undefined
                      ? pricesBySize[selectedSize]
                      : price ?? 0) * quantity} ₽
                  </div>
                </div>

                <button
                  className={modalStyles.controlButton}
                  onClick={handleIncrement}
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
