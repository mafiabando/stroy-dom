import { useState, useEffect } from 'react';
import MenuItem, { MenuItemProps } from '../../components/MenuItem/MenuItem';
import styles from './Home.module.css';
import { menuItems } from './MenuData';

const categoriesList = [
  "МП-20",
  "С-8"
] as const;

export type Category = typeof categoriesList[number];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("МП-20");


  const groupedMenu = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<Category, typeof menuItems>);

  const currentCategoryItems = groupedMenu[activeCategory] || [];


  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <button className={styles.ctaButton}>
          Посмотреть ассортимент
        </button>
      </section>

      <section className={styles.categories}>
        <div className="container">
          <div className={styles.categoryButtons}>
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`${styles.categoryButton} ${
                  activeCategory === cat ? styles.active : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      <section className={styles.menuSection}>
        <div className="container">
          <div className={styles.menuGrid}>
            {currentCategoryItems.map(item => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;