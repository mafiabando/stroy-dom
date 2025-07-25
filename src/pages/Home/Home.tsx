import { useState, useEffect } from 'react';
import MenuItem, { MenuItemProps } from '../../components/MenuItem/MenuItem';
import styles from './Home.module.css';
import menuItems from './MenuData';
import { useModal } from '../../context/ModalContext';

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
    </div>
  );
};

export default Home;