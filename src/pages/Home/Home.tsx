import { useState, useEffect, useRef } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';
import styles from './Home.module.css';
import menuItems from './MenuData';
import { useModal } from '../../context/ModalContext';
import { Helmet } from 'react-helmet-async';

const mainCategories = ["Профнастил", "Сухие смеси", "Древесные плиты", "Вагонка и бруски", "Гипсокартон", "Профиля и направляющие", "Маяки и перфорированные углы", "Профтрубы и металлические углы", "Арматура и кладочная сетка", "Утеплители", "Изоляция", "Гидроизоляция", "Крепёж", "Лакокрасочные материалы", "Отделка", "Инструменты и расходные материалы"] as const;

export type MainCategory = typeof mainCategories[number]; 

const subCategories = {
  "Профнастил": ["МП-20", "С-8"],
  "Сухие смеси": ["Штукатурка", "Шпатлёвка", "Декоративная штукатурка", "Смеси для пола", "Плиточный клей", "Штукатурно-клеевая смесь", "Монтажный клей", "Клей для блоков", "Цемент", "Затирка для плитки"],
  "Древесные плиты": ["ОСП", "ДСП", "ДВП", "Фанера", "Вагонка"],
  "Вагонка и бруски": ["Вагонка", "Бруски"],
  "Гипсокартон": ["Для сухих помещений", "Влагостойкий"],
  "Профиля и направляющие": ["Стеновые", "Перегородочные"],
  "Маяки и перфорированные углы": ["Маяки", "Перфорированные углы"],
  "Профтрубы и металлические углы": ["Профтрубы", "Металлические углы"],
  "Арматура и кладочная сетка": ["Стеклопластиковая арматура", "Кладочная сетка"],
  "Утеплители": ["Пенополистирол", "Пенопласт", "Каменная и минеральная вата"],
  "Изоляция": ["Отражающая теплоизоляция", "Пароизоляция", "Гидро-пароизоляция", "Ветро-влагозащита"],
  "Гидроизоляция": ["Сухая смесь", "Жидкая гидроизоляция", "Лента гидроизоляционная", "Битумные рулоны"],
  "Крепёж": ["Саморезы для гипсокартона", "Кровельные саморезы", "Гвозди", "Крепёжные уголки и подвесы", "Болты, гайки", "Дюбеля", "Удлинитель профилей и крабы"],
  "Лакокрасочные материалы": ["Водоэмульсионные краски", "Эмали", "Лаки и пропитки"],
  "Отделка": ["Грунтовка", "Бетоноконтакт", "Готовые шпатлёвки", "Монтажная пена и пена клей", "Герметик", "Клей", "Стеклосетка и стеклохолст"],
  "Инструменты и расходные материалы": ["Валики", "Шпатели", "Кисти", "Ленты и скотчи", "Монтажные пистолеты", "СВП", "Свёрла, биты и буры", "Абразивные диски", "Тара и ёмкости", "Другое"]
} as const;

export type SubCategory<T extends MainCategory> = typeof subCategories[T][number];

const Home = () => {
  const { selectedProductId } = useModal();
  const [activeMainCategory, setActiveMainCategory] = useState<MainCategory>("Профнастил");
  const [activeSubCategory, setActiveSubCategory] = useState<string>(subCategories["Профнастил"][0]);

  const heroClassName = `${styles.hero} ${styles[`hero_${activeMainCategory.replace(/\s/g, '_')}`] || ''}`;

  useEffect(() => {
    setActiveSubCategory(subCategories[activeMainCategory][0]);
  }, [activeMainCategory]);


  const filteredItems = menuItems.filter(
    item => item.mainCategory === activeMainCategory && item.subCategory === activeSubCategory
  );

  const findCategoryByProductId = (id: string) => {
    const product = menuItems.find(p => p.id === id);
    if (product) {
      return {
        mainCategory: product.mainCategory,
        subCategory: product.subCategory,
      };
    }
    return null;
  }

  const { openProductModal, closeProductModal } = useModal();

useEffect(() => {
  const handleHashChange = () => {
    const match = window.location.hash.match(/#\/product\/([^\/]+)/);
    const slug = match ? match[1] : null;

    if (slug) {
      const product = menuItems.find(p => p.urlId === slug);
      if (product) {
        openProductModal(product.id);
        setActiveMainCategory(product.mainCategory!);
        setActiveSubCategory(product.subCategory!);
      } else {
        window.location.hash = '#/';
      }
    }
    else if (selectedProductId) {
      closeProductModal();
    }
  };

  handleHashChange();

  window.addEventListener('hashchange', handleHashChange);

  return () => {
    window.removeEventListener('hashchange', handleHashChange);
  };
}, [openProductModal, closeProductModal, selectedProductId]);


  useEffect(() => {
    if (selectedProductId) {
      const product = findCategoryByProductId(selectedProductId);
      if (product) {
        setActiveMainCategory(product.mainCategory!);
        setActiveSubCategory(product.subCategory!);
      }
    }
  }, [selectedProductId, activeMainCategory]);

  return (
    <>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Строй Дом",
          "image": "https://stroydom30.ru/logo192.png",
          "url": "https://stroydom30.ru",
          "telephone": "8-937-133-33-66",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Рыбинская, 25Н",
            "addressLocality": "Астрахань",
            "addressRegion": "Астраханская область",
            "addressCountry": "Россия"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 46.364743,
            "longitude": 48.100391
          },
          "openingHours": ["Mo-Sa 08:00-16:00"],
          "priceRange": "₽",
          "description": "Магазин строительных материалов в Астрахани"
        })}
      </script>
    </Helmet>
    <div className={styles.home}>
      <section className={heroClassName}>
        {mainCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveMainCategory(cat)}
            className={`${styles.ctaButton} ${activeMainCategory === cat ? styles.active : ""
              }`}
          >
            {cat}
          </button>
        ))}
      </section>

      <section className={styles.categories}>
        <div className="container">
          <div className={styles.categoryButtons}>
            {subCategories[activeMainCategory].map(subCat => (
              <button
                key={subCat}
                onClick={() => setActiveSubCategory(subCat)}
                className={`${styles.categoryButton} ${activeSubCategory === subCat ? styles.active : ""
                  }`}
              >
                {subCat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.menuSection}>
        <div className="container">
          <div className={styles.menuGrid}>
            {filteredItems.map(item => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
<div className="container">
    <div className={styles.footerGrid}>

      <div className={styles.infoSection}>
        <h3>Информация</h3>
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="#/contacts">Контакты</a></li>
          <li><a href="#/cart">Корзина</a></li>
        </ul>
      </div>

      <img src='/logo192.png'/>

      <div className={styles.contactsSection}>
        <h3>Контакты</h3>
        <ul className={styles.contactList}>
          <li>📍 г. Астрахань, ул. Рыбинская, 25Н </li>
          <li>📞 <a href="tel:+79371333366">8 (937) 133-33-66</a></li>
          <li>📞 <a href="tel:+79171950968">8 (917) 195-09-68</a></li>
          <li>✉️ <a href="https://wa.me/79371333366">WhatsApp</a></li>
        </ul>
      </div>
    </div>
<span className={styles.workTime}>🕒 Пн–Сб: 8:00–16:00 & Вск: 8:00-15:00</span>
    <div className={styles.footerBottom}>
      <p>&copy; 2025 Строй Дом — витрина строительных материалов в Астрахани. Все права защищены.</p>
      <p>
        <a href="#/privacy">Политика конфиденциальности</a>
      </p>
    </div>
  </div>
      </footer>
    </div>
    </>
  );
};

export default Home;