import styles from './Footer.module.css'

const Footer = () => {
    return (
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

                    <img src='/logo192.png' alt='Логотип магазина' />

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
    )
}

export default Footer;