import React, { useState, useContext, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import menuItems from "../Home/MenuData"; // ← Убедитесь, что путь правильный
import { generateSEO } from "../../utils/seoUtils";
import { Helmet } from "react-helmet-async";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
    const { urlId } = useParams<{ urlId: string }>();
    const navigate = useNavigate();

    // Сначала получаем продукт, но НЕ возвращаемся раньше времени
    const product = menuItems.find((item) => item.urlId === urlId);

    // Все хуки вызываются ДО любого return — порядок соблюден!
    const seo = useMemo(() => {
        if (!product) return null; // безопасно внутри useMemo
        const {
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
            urlId: productId,
        } = product;
        return generateSEO({
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
            urlId: productId,
        });
    }, [urlId]); // Зависимость от urlId, чтобы при смене URL пересчитывался SEO

    // Состояния и контекст — тоже до return
    const [quantity, setQuantity] = useState(1); // временные значения, пока product не загружен
    const [quantityInput, setQuantityInput] = useState("1");
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const { addToCart } = useContext(CartContext);

    // Если продукт найден — инициализируем состояния реальными значениями
    useEffect(() => {
        if (product) {
            const step = product.isWeight ? 0.1 : 1;
            const minQty = product.isWeight ? 0.1 : 1;
            setQuantity(minQty);
            setQuantityInput(minQty.toString());

            if (product.pricesBySize && Object.keys(product.pricesBySize).length > 0) {
                setSelectedSize(Object.keys(product.pricesBySize)[0]);
            } else {
                setSelectedSize(null);
            }
        }
    }, [product]); // Обновляем состояния при изменении product

    // Если товар не найден — показываем сообщение об ошибке
    if (!product) {
        return (
            <div className={styles.notFound}>
                <h2>Товар не найден</h2>
                <button onClick={() => navigate(-1)}>Назад</button>
            </div>
        );
    }

    // Теперь, когда мы уверены, что product существует — деструктурируем его
    const {
        id,
        title,
        description,
        image,
        pricesBySize,
        price,
        isWeight = false,
    } = product;

    const step = isWeight ? 0.1 : 1;
    const minQty = isWeight ? 0.1 : 1;

    const handleDecrement = () => {
        setQuantity((prev) => {
            const newVal = Math.max(minQty, +(prev - step).toFixed(2));
            setQuantityInput(newVal.toString());
            return newVal;
        });
    };

    const handleIncrement = () => {
        setQuantity((prev) => {
            const newVal = +(prev + step).toFixed(2);
            setQuantityInput(newVal.toString());
            return newVal;
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setQuantityInput(val);

        const num = isWeight ? parseFloat(val) : parseInt(val, 10);
        if (!isNaN(num) && num >= minQty) {
            setQuantity(num);
        }
    };

    const handleInputBlur = () => {
        if (
            quantityInput === "" ||
            isNaN(Number(quantityInput)) ||
            Number(quantityInput) < minQty
        ) {
            setQuantityInput(isWeight ? quantity.toFixed(2) : quantity.toString());
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
            "End",
        ];

        if (e.ctrlKey || e.metaKey) return;

        if (allowedKeys.includes(e.key)) return;

        if (isWeight) {
            const isNumber = /[0-9]/.test(e.key);
            const isDot = e.key === ".";
            const isComma = e.key === ",";

            if (!isNumber && !isDot && !isComma) {
                e.preventDefault();
                return;
            }

            const value = e.currentTarget.value;
            if ((isDot && value.includes(".")) || (isComma && value.includes(","))) {
                e.preventDefault();
            }
        } else {
            if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
            }
        }
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
    };

    const currentPrice =
        selectedSize && pricesBySize && pricesBySize[selectedSize] !== undefined
            ? pricesBySize[selectedSize]
            : price ?? 0;

    return (
        <>
            {seo && (
                <Helmet>
                    <title>{seo.title}</title>
                    <meta name="description" content={seo.description} />
                    <link rel="canonical" href={seo.canonicalUrl} />
                    <script type="application/ld+json">{seo.schema}</script>

                    {/* Open Graph */}
                    <meta property="og:title" content={seo.title} />
                    <meta property="og:description" content={seo.description} />
                    <meta property="og:image" content={`https://stroydom30.ru${image}`} />
                    <meta property="og:url" content={seo.canonicalUrl} />
                    <meta property="og:type" content="product" />
                    <meta property="og:price:amount" content={currentPrice.toString()} />
                    <meta property="og:price:currency" content="RUB" />
                    <meta property="og:availability" content="instock" />
                </Helmet>
            )}

            <div className={styles.pageContainer}>
                <div className={styles.imageContainer}>
                    <img src={image} alt={title} className={styles.mainImage} loading="lazy" />
                </div>

                <div className={styles.detailsContainer}>
                    <h1 className={styles.productTitle}>{title}</h1>
                    <p className={styles.productDescription}>{description}</p>

                    {pricesBySize && Object.keys(pricesBySize).length > 0 && (
                        <>
                            {product.sizeText && (
                                <h3 className={styles.sizeLabel}>{product.sizeText}</h3>
                            )}
                            <div className={styles.sizeOptions}>
                                {Object.entries(pricesBySize).map(([sizeOption, sizePrice]) => (
                                    <label key={sizeOption} className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="product-size"
                                            value={sizeOption}
                                            checked={selectedSize === sizeOption}
                                            onChange={() => setSelectedSize(sizeOption)}
                                            className={styles.radioInput}
                                        />
                                        <span className={styles.radioCustom}></span>
                                        {sizeOption} — {sizePrice} ₽
                                    </label>
                                ))}
                            </div>
                        </>
                    )}

                    <div className={styles.priceControls}>
                        <div className={styles.quantityControls}>
                            <button className={styles.controlButton} onClick={handleDecrement}>
                                -
                            </button>
                            <div className={styles.quantityDisplayWrapper}>
                                <input
                                    type="number"
                                    min={minQty}
                                    step={step}
                                    value={quantityInput}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    onKeyDown={handleQuantityKeyDown}
                                    className={styles.quantityInput}
                                />
                                <span className={styles.unitLabel}>{isWeight ? "кг" : "шт"}</span>
                            </div>
                            <button className={styles.controlButton} onClick={handleIncrement}>
                                +
                            </button>
                        </div>

                        <div className={styles.priceInfo}>
                            {(currentPrice * quantity).toFixed(2)} ₽
                    </div>
                </div>

                <button className={styles.addToCartButton} onClick={handleAddToCart}>
                    Добавить в корзину
                </button>
            </div>
        </div >
        </>
    );
};

export default ProductPage;