import { useState, useEffect } from 'react';
import MenuItem, { MenuItemProps } from '../../components/MenuItem/MenuItem';
import styles from './Home.module.css';
import { menuItems } from './MenuData';

const mainCategories = ["Профнастил", "Плитка", "Двери"] as const;

export type MainCategory = typeof mainCategories[number];

const subCategories = {
  "Профнастил": ["МП-20", "С-8"],
  "Плитка": ["Керамика", "Клинкер"],
  "Двери": ["Межкомнатные", "Входные"]
} as const;

export type SubCategory<T extends MainCategory> = typeof subCategories[T][number];

const Home = () => {
  const [activeMainCategory, setActiveMainCategory] = useState<MainCategory>("Профнастил");
  const [activeSubCategory, setActiveSubCategory] = useState<string>(subCategories["Профнастил"][0]);

  useEffect(() => {
    setActiveSubCategory(subCategories[activeMainCategory][0]);
  }, [activeMainCategory]);

  const filteredItems = menuItems.filter(
    item => item.mainCategory === activeMainCategory && item.subCategory === activeSubCategory
  );

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        {mainCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveMainCategory(cat)}
            className={`${styles.ctaButton} ${
              activeMainCategory === cat ? styles.active : ""
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
                className={`${styles.categoryButton} ${
                  activeSubCategory === subCat ? styles.active : ""
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