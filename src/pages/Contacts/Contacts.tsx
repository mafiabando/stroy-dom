import { ReactComponent as Location } from '../../assets/location.svg';
import { ReactComponent as Clock } from '../../assets/clock.svg';
import { ReactComponent as Phone } from '../../assets/phone.svg';
import { ReactComponent as Mail } from '../../assets/mail.svg';
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <section className={styles.hero}>
        <h1>Свяжитесь с нами</h1>
        <p>Мы всегда рады вашему звонку или сообщению</p>
      </section>

      <div className={styles.content}>
        <div className={styles.infoBlock}>
          <div className={styles.icon}>
            <Location />
          </div>
          <div className={styles.text}>
            <h3>Адрес</h3>
            <p>г. Астрахань, рынок "Славянка"</p>
            <p>​Рыбинская, 25/1 лит Н, напротив магазина "Агро-Маркет"</p>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.icon}>
            <Clock />
          </div>
          <div className={styles.text}>
            <h3>Часы работы</h3>
            <p>Пн-Сб: 08:00 - 16:00</p>
            <p>Вс: 08:00 - 15:00</p>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.icon}>
            <Phone />
          </div>
          <div className={styles.text}>
            <h3>Телефон</h3>
            <a href="tel:+79371333366">+7 (937) 133-33-66</a>
            <br />
            <a href="tel:+79171950968">+7 (917) 195-09-68</a>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.icon}>
            <Mail />
          </div>
          <div className={styles.text}>
            <h3>WhatsApp</h3>
            <a href="https://wa.me/79371333366">Написать в WhatsApp</a>
            <p>Отвечаем в течение часа</p>
          </div>
        </div>
      </div>

      <section className={styles.mapContainer}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=48.100428%2C46.364570&mode=search&oid=231175893901&ol=biz&z=15.69"
          className={styles.map}
          allowFullScreen
          loading="lazy"
          title="Местоположение кафе"
        ></iframe>
      </section>
    </div>
  );
};

export default Contacts;