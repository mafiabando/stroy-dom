import { useState, useEffect } from 'react';
import MenuItem, { MenuItemProps } from '../../components/MenuItem/MenuItem';
import styles from './Home.module.css';
import menuItems from './MenuData';

const mainCategories = ["Профнастил", "Сухие смеси", "Древесные плиты", "Гипсокартон", "Профиля и направляющие", "Маяки и перфорированные углы", "Профтрубы и металлические углы", "Утеплители", "Изоляция", "Крепёж", "Отделка и расходные материалы"] as const;

export type MainCategory = typeof mainCategories[number];

const subCategories = {
  "Профнастил": ["МП-20", "С-8"],
  "Сухие смеси": ["Штукатурка", "Шпатлёвка", "Декоративная штукатурка", "Смеси для пола", "Плиточный клей", "Штукатурно-клеевая смесь", "Монтажный клей", "Клей для блоков", "Цемент", "Затирка для плитки"],
  "Древесные плиты": ["ОСП", "ДСП", "ДВП", "Фанера"],
  "Гипсокартон": ["Для сухих помещений", "Влагостойкий"],
  "Профиля и направляющие": ["Стеновые", "Перегородочные"],
  "Маяки и перфорированные углы": ["Маяки", "Перфорированные углы"],
  "Профтрубы и металлические углы": ["Профтрубы", "Металлические углы"],
  "Утеплители": ["Пенополистирол", "Пенопласт", "Каменная и минеральная вата"],
  "Изоляция": ["Отражающая теплоизоляция", "Пароизоляция", "Гидро-пароизоляция", "Ветро-влагозащита"],
  "Крепёж": ["Саморезы для гипсокартона", "Кровельные саморезы", "Гвозди", "Крепёжные уголки и подвесы", "Болты, гайки", "Дюбеля", "Удлинитель профилей и крабы"],
  "Отделка и расходные материалы": ["Грунтовка и бетоноконтакт", "Лакокрасочные материалы", "Готовые шпатлёвки", "Монтажная пена и пена клей", "Клей и герметик", "Инструменты и расходные материалы"]
} as const;

export type SubCategory<T extends MainCategory> = typeof subCategories[T][number];

const Home = () => {
  const [activeMainCategory, setActiveMainCategory] = useState<MainCategory>("Профнастил");
  const [activeSubCategory, setActiveSubCategory] = useState<string>(subCategories["Профнастил"][0]);

  const heroClassName = `${styles.hero} ${styles[`hero_${activeMainCategory.replace(/\s/g, '_')}`] || ''}`;

  useEffect(() => {
    setActiveSubCategory(subCategories[activeMainCategory][0]);
  }, [activeMainCategory]);


  const filteredItems = menuItems.filter(
    item => item.mainCategory === activeMainCategory && item.subCategory === activeSubCategory
  );

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