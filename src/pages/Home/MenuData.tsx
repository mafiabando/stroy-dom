import { MenuItemProps } from "../../components/MenuItem/MenuItem";
import { v4 as uuidv4 } from 'uuid';

export const menuItems: MenuItemProps[] = [
  {
    id: uuidv4(),
    title: "Коричневый",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/mp1.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "МП-20",
    sizeText: 'Выберите длину:',
    pricesBySize: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: uuidv4(),
    title: "Красный",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/mp2.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "МП-20",
    sizeText: 'Выберите длину:',
    pricesBySize: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: uuidv4(),
    title: "Синий",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/mp3.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "МП-20",
    sizeText: 'Выберите длину:',
    pricesBySize: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: uuidv4(),
    title: "Зелёный",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/mp4.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "МП-20",
    sizeText: 'Выберите длину:',
    pricesBySize: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: uuidv4(),
    title: "Графит",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/mp5.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "МП-20",
    sizeText: 'Выберите длину:',
    pricesBySize: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: uuidv4(),
    title: "Оцинкованный",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/mp6.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "МП-20",
    sizeText: 'Выберите длину:',
    pricesBySize: {
    '1.5м': 650,
    '1.7м': 750,
    '2м': 850,
    },
  },
  {
    id: uuidv4(),
    title: "Белый",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/c1.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "С-8",
    sizeText: 'Выберите длину:',
    pricesBySize: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: uuidv4(),
    title: "Слоновая кость",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/c2.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "С-8",
    sizeText: 'Выберите длину:',
    pricesBySize: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: uuidv4(),
    title: "Коричневый",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/c3.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "С-8",
    sizeText: 'Выберите длину:',
    pricesBySize: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: uuidv4(),
    title: "Морёный дуб - 2м",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/c4.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "С-8",
    sizeText: 'Выберите длину:',
    price: 1800
  },
  {
    id: uuidv4(),
    title: "Камень - 2м",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/c5.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "С-8",
    sizeText: 'Выберите длину:',
    price: 1800
  },  
  {
    id: uuidv4(),
    title: "Волма Слой",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/штук/слой.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Штукатурка",
    price: 400
  },  
  {
    id: uuidv4(),
    title: "Волма Старт",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/штук/старт.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Штукатурка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Волма Гипс-актив",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/штук/актив.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Штукатурка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Волма Гипс-актив Экстра",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/штук/активэкстра.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Штукатурка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Волма Аквапласт",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/штук/аквапласт.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Штукатурка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Knauf MP 75",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/штук/мп75.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Штукатурка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Литокс Start",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/штук/литстарт.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Штукатурка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Литокс AquaPlast",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/штук/литаквапласт.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Штукатурка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Литокс CemPlast",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/штук/цемпласт.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Штукатурка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Волма Шов",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/шпат/шов.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Шпатлёвка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Волма Финиш",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/шпат/финиш.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Шпатлёвка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Литокс SatenLux",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/шпат/сатен.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Шпатлёвка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Волма Аквастандарт",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/шпат/аквастандарт.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Шпатлёвка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Волма Аквастандарт Светлый",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/шпат/аквастандартсветлый.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Шпатлёвка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Волма Нивелир 20кг",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/пол/нивелир20.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Смеси для пола",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Волма Нивелир Экспресс 25кг",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/пол/нивелир25.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Смеси для пола",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Литокс Композит",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/пол/композит.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Смеси для пола",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Литокс Floorex",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/пол/флорекс.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Смеси для пола",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Старатели",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/пол/старатели.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Смеси для пола",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Пескобетон ProfMix М300",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/пол/м300.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Смеси для пола",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Волма Керамик +",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/плитклей/т20.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Плиточный клей",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Волма Мультиклей",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/плитклей/т34.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Плиточный клей",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Ceresit СМ 11",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/плитклей/см11.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Плиточный клей",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Ceresit СМ 14",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/плитклей/см14.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Плиточный клей",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Ceresit СМ 16",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/плитклей/см16.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Плиточный клей",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Ceresit СМ 17",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/плитклей/см17.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Плиточный клей",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Мега Стандарт",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/плитклей/мега.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Плиточный клей",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Хабез Стандарт",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/плитклей/хабез.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Плиточный клей",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Цемент Extra Cem 500+",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/цемент.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Цемент",
    price: 400
  },
  {
    id: uuidv4(),
    title: "ОСП 2440 х 1220 мм, пропитка 1 сторона",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/плиты/осп.jpg`,
    mainCategory: 'Древесные плиты',
    subCategory: "ОСП",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '9мм':680,
      '12мм':900
    }
  },
  {
    id: uuidv4(),
    title: "ДСП 2440 х 1830 х 16 мм",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/плиты/дсп.jpg`,
    mainCategory: 'Древесные плиты',
    subCategory: "ДСП",
    price: 1700
  },
  {
    id: uuidv4(),
    title: "ДВП 2440 х 1220 мм",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/плиты/двп.jpg`,
    mainCategory: 'Древесные плиты',
    subCategory: "ДВП",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '3мм':210,
      '5мм':500
    }
  },
  {
    id: uuidv4(),
    title: "Фанера 1520 х 1520 мм",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/плиты/фанера.jpg`,
    mainCategory: 'Древесные плиты',
    subCategory: "Фанера",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '4мм':600,
      '6мм':800,
      '8мм':950,
      '10мм':1100,
      '12мм':1300,
      '15мм':1500
    }
  },
  {
    id: uuidv4(),
    title: "Гипсокартон 2500 х 1200 мм",
    description: "Длина 2м, ширина 1.2м",
    image: `${process.env.PUBLIC_URL}/images/гкл/гкл1.jpg`,
    mainCategory: 'Гипсокартон',
    subCategory: "Для сухих помещений",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '9.5мм': 280,
      '12.5мм': 310
    }
  },
  {
    id: uuidv4(),
    title: "Гипсокартон 2500 х 1200 мм",
    description: "Длина 2м, ширина 1.2м",
    image: `${process.env.PUBLIC_URL}/images/гкл/гкл2.jpg`,
    mainCategory: 'Гипсокартон',
    subCategory: "Влагостойкий",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '9.5мм': 350,
      '12.5мм': 380
    }
  },  
];
