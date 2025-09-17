import React, { useState, useContext, useMemo } from "react";
import styles from "./MenuItem.module.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { MainCategory } from "../../pages/Home/Home";
import { SubCategory } from "../../pages/Home/Home";
import { generateSEO } from "../../utils/seoUtils";
import { Helmet } from "react-helmet-async";

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
  urlId?: string;
}

const MenuItem = ({
  id,
  title,
  description,
  image,
  mainCategory,
  subCategory,
  sizeText,
  pricesBySize,
  price,
  isWeight = false,
  quantityStep = 1,
  minQuantity = 1,
  urlId,
}: MenuItemProps) => {
  const seo = useMemo(
    () =>
      generateSEO({
        id,
        title,
        description,
        image,
        mainCategory,
        subCategory,
        sizeText,
        pricesBySize,
        price,
        isWeight,
        quantityStep,
        minQuantity,
        urlId,
      }),
    [
      id,
      title,
      description,
      image,
      mainCategory,
      subCategory,
      sizeText,
      pricesBySize,
      price,
      isWeight,
      quantityStep,
      minQuantity,
      urlId,
    ]
  );

  // Состояние для отслеживания наведения (если нужно)
  const [isHovered, setIsHovered] = useState(false);

  // 🔥 Ключевое изменение: состояние для выбранного размера
  const [selectedSize, setSelectedSize] = useState<string | null>(
    pricesBySize ? Object.keys(pricesBySize)[0] : null
  );

  const { addToCart } = useContext(CartContext);

  // Определяем текущую цену на основе выбранного размера
  const currentPrice =
    selectedSize && pricesBySize && pricesBySize[selectedSize] !== undefined
      ? pricesBySize[selectedSize]
      : price ?? 0;

  const handleAddToCartQuick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id,
      title,
      image,
      quantity: minQuantity,
      price: currentPrice,
      isWeight,
      ...(selectedSize ? { size: selectedSize } : {}),
    });
  };

  return (
    <>
      <Helmet>
        <title>Строй Дом - Магазин строительных товаров в Астрахани</title>
        <meta
          name="description"
          content="Магазин строительных товаров в городе Астрахань 'Строй Дом'. Широкий ассортимент товаров для строительства и ремонта."
        />
      </Helmet>

      <div
        className={styles.card}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/product/${urlId}`} className={styles.cardLink}>
          <img
            src={image}
            alt={title}
            className={styles.image}
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
            loading="lazy"
          />
        </Link>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          {sizeText && <span>{sizeText}</span>}

          {pricesBySize && Object.keys(pricesBySize).length > 0 && (
            <div className={styles.sizeSelector}>
              {Object.entries(pricesBySize).map(([sizeOption]) => (
                <label key={sizeOption} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name={`size-${id}`}
                    value={sizeOption}
                    checked={selectedSize === sizeOption}
                    onChange={() => setSelectedSize(sizeOption)} // ← Вот что вы упустили!
                    className={styles.radioInput}
                  />
                  <span className={styles.radioCustom}></span>
                  {sizeOption}
                </label>
              ))}
            </div>
          )}

          <div className={styles.price}>
            {currentPrice} ₽ {/* ← Отображаем цену выбранного размера */}
          </div>

          <button className={styles.button} onClick={handleAddToCartQuick}>
            В корзину
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuItem;