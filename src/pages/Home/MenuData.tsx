import MenuItem, { MenuItemProps } from "../../components/MenuItem/MenuItem";
import { v4 as uuidv4 } from 'uuid';

const menuItems: MenuItemProps[] = [
  {
    id: uuidv4(),
    title: "Коричневый",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/профнастил/mp1.jpg`,
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
    image: `${process.env.PUBLIC_URL}/images/профнастил/mp2.jpg`,
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
    image: `${process.env.PUBLIC_URL}/images/профнастил/mp3.jpg`,
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
    image: `${process.env.PUBLIC_URL}/images/профнастил/mp4.jpg`,
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
    image: `${process.env.PUBLIC_URL}/images/профнастил/mp5.jpg`,
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
    image: `${process.env.PUBLIC_URL}/images/профнастил/mp6.jpg`,
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
    image: `${process.env.PUBLIC_URL}/images/профнастил/c1.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "С-8",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 1000,
    },
  },
  {
    id: uuidv4(),
    title: "Слоновая кость",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/профнастил/c2.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "С-8",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 1000,
    },
  },
  {
    id: uuidv4(),
    title: "Коричневый",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/профнастил/c3.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "С-8",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 1000,
    },
  },
  {
    id: uuidv4(),
    title: "Морёный дуб",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/профнастил/c4.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "С-8",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 1800,
    },
  },
  {
    id: uuidv4(),
    title: "Камень",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/профнастил/c5.jpg`,
    mainCategory: 'Профнастил',
    subCategory: "С-8",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 1800,
    },
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
    title: "Волма Аквапласт",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/штук/аквапласт.jpg`,
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
    title: "Power Fasad",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/штук/повер.jpg`,
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
    title: "Шпатлёвка полимерная Vetonit LR+",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/шпат/ветонит.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Шпатлёвка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Шпатлёвка полимерная Старатели КР",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/шпат/старатели.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Шпатлёвка",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Декоративная штукатурка Литокс Короед",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/короед.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Декоративная штукатурка",
    sizeText: "Выберите фракцию зерна:",
    pricesBySize: {
      "2.5мм": 600,
      "3.5мм": 600
    }
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
    title: "Power Nivelir",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/пол/повер.jpg`,
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
    title: "Мега Керамогранит",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/плитклей/керамогранит.jpg`,
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
    title: "Power Ceramic",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/плитклей/повер.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Плиточный клей",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Литокс Бриз",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/штуккл/бриз.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Штукатурно-клеевая смесь",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Knauf Севенер",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/штуккл/севенер.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Штукатурно-клеевая смесь",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Power Teplofix",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/штуккл/повер.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Штукатурно-клеевая смесь",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Волма Монтаж",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/монтаж/волма.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Монтажный клей",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Хабез Мелисса",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/монтаж/хабез.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Монтажный клей",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Волма Блок",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/блок/волма.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Клей для блоков",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Литокс Контакт",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/блок/литокс.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Клей для блоков",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Мега Блок Монтаж",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/блок/мега.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Клей для блоков",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Profmix Профи-Блок",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/блок/профмикс.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Клей для блоков",
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
    title: "Затирка Ceresit CE33",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/затирка/се33.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Затирка для плитки",
    sizeText: 'Выберите цвет:',
    pricesBySize: {
      'Серый': 400,
      'Серебристо-серый': 450,
      'Графит': 450,
      'Антрацит': 450,
      'Светло-коричневый': 450,
      'Розовый': 450,
      'Роса': 400,
      'Натура': 400,
      'Манхеттен': 400,
      'Карамель': 400,
      'Жасмин': 400,
      'Белый': 400,
    }
  },
  {
    id: uuidv4(),
    title: "Затирка Ceresit CE40",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/затирка/се40.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Затирка для плитки",
    sizeText: 'Выберите цвет:',
    pricesBySize: {
      'Серый': 600,
      'Серебристо-серый': 600,
      'Мрамор белый': 600,
      'Графит': 700,
      'Белый': 500,
      'Антрацит': 650,
    }
  },
  {
    id: uuidv4(),
    title: "Затирка Литокол",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/смеси/затирка/литокол.jpg`,
    mainCategory: 'Сухие смеси',
    subCategory: "Затирка для плитки",
    sizeText: 'Выберите цвет:',
    pricesBySize: {
      'Жасмин': 450,
      'Багамы': 450,
      'Песочный': 450,
    }
  },
  {
    id: uuidv4(),
    title: "ОСП 2440х1220мм (пропитка 1 сторона)",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/плиты/осп.jpg`,
    mainCategory: 'Древесные плиты',
    subCategory: "ОСП",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '9мм': 700,
      '12мм': 950,
      '15мм': 1200
    }
  },
  {
    id: uuidv4(),
    title: "ОСП 2440х1220мм (пропитка 2 стороны)",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/плиты/осп.jpg`,
    mainCategory: 'Древесные плиты',
    subCategory: "ОСП",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '9мм': 750,
      '12мм': 1050
    }
  },
  {
    id: uuidv4(),
    title: "ДСП 2440х1830х16мм",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/плиты/дсп.jpg`,
    mainCategory: 'Древесные плиты',
    subCategory: "ДСП",
    price: 1700
  },
  {
    id: uuidv4(),
    title: "ДВП 2440х1220мм",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/плиты/двп.jpg`,
    mainCategory: 'Древесные плиты',
    subCategory: "ДВП",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '3мм': 210,
      '5мм': 500
    }
  },
  {
    id: uuidv4(),
    title: "Фанера 1520х1520мм",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/плиты/фанера.jpg`,
    mainCategory: 'Древесные плиты',
    subCategory: "Фанера",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '4мм': 600,
      '6мм': 800,
      '8мм': 950,
      '10мм': 1100,
      '12мм': 1300,
      '15мм': 1500
    }
  },
  {
    id: uuidv4(),
    title: "Вагонка класс AB",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/брус/вагонка.jpg`,
    mainCategory: 'Вагонка и бруски',
    subCategory: "Вагонка",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 140,
      '2.5м': 175,
      '2.7м': 190,
      '3м': 210,
    }
  },
  {
    id: uuidv4(),
    title: "Деревянный брус 3000мм",
    description: "описание",
    image: `${process.env.PUBLIC_URL}/images/брус/бруски.jpg`,
    mainCategory: 'Вагонка и бруски',
    subCategory: "Бруски",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '50х50мм': 220,
      '50х40мм': 200,
      '50х25мм': 150,
      '40х30мм (строганный)': 150,
      '40х20мм': 120

    }
  },
  {
    id: uuidv4(),
    title: "Гипсокартон 2500х1200мм",
    description: "Длина 2.5м, ширина 1.2м",
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
    title: "Гипсокартон Knauf 3000х1200мм",
    description: "Длина 3м, ширина 1.2м",
    image: `${process.env.PUBLIC_URL}/images/гкл/кнауф.jpg`,
    mainCategory: 'Гипсокартон',
    subCategory: "Для сухих помещений",
    price: 500
  },
  {
    id: uuidv4(),
    title: "Гипсокартон влагостойкий 2500х1200мм",
    description: "Длина 2.5м, ширина 1.2м",
    image: `${process.env.PUBLIC_URL}/images/гкл/гкл2.jpg`,
    mainCategory: 'Гипсокартон',
    subCategory: "Влагостойкий",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '9.5мм': 350,
      '12.5мм': 380
    }
  },
  {
    id: uuidv4(),
    title: "Гипсокартон влагостойкий Vetonit 2000х1200мм",
    description: "Длина 2.5м, ширина 1.2м",
    image: `${process.env.PUBLIC_URL}/images/гкл/ветон.jpg`,
    mainCategory: 'Гипсокартон',
    subCategory: "Влагостойкий",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '12.5мм': 300,
      '15мм': 400,
    }
  },
  {
    id: uuidv4(),
    title: "Профиль 60х27х3000мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/профиля/6027.jpg`,
    mainCategory: 'Профиля и направляющие',
    subCategory: "Стеновые",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '0.4мм': 160,
      '0.45мм': 180,
      '0.55мм': 230,
      '0.6мм knauf': 380,
    }
  },
  {
    id: uuidv4(),
    title: "Направляющий 27х28х3000мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/профиля/2728.jpg`,
    mainCategory: 'Профиля и направляющие',
    subCategory: "Стеновые",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '0.4мм': 120,
      '0.45мм': 130,
      '0.55мм': 160,
      '0.6мм': 250,
    }
  },
  {
    id: uuidv4(),
    title: "Профиль 50х50х3000мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/профиля/5050.jpg`,
    mainCategory: 'Профиля и направляющие',
    subCategory: "Перегородочные",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '0.55мм': 350,
      '0.6мм': 450,
    }
  },
  {
    id: uuidv4(),
    title: "Направляющий 50х40х3000мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/профиля/5040.jpg`,
    mainCategory: 'Профиля и направляющие',
    subCategory: "Перегородочные",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '0.5мм': 220,
      '0.55мм': 300,
      '0.6мм': 400,
    }
  },
  {
    id: uuidv4(),
    title: "Профиль 75х50х3000мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/профиля/7550.jpg`,
    mainCategory: 'Профиля и направляющие',
    subCategory: "Перегородочные",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '0.55мм': 350,
    }
  },
  {
    id: uuidv4(),
    title: "Направляющий 75х40х3000мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/профиля/7540.jpg`,
    mainCategory: 'Профиля и направляющие',
    subCategory: "Перегородочные",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '0.55мм': 300,
    }
  },
  {
    id: uuidv4(),
    title: "Профиль 100х50х3000мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/профиля/10050.jpg`,
    mainCategory: 'Профиля и направляющие',
    subCategory: "Перегородочные",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '0.55мм': 400,
      '0.6мм': 450,
      '0.6мм knauf': 550
    }
  },
  {
    id: uuidv4(),
    title: "Направляющий 100х40х3000мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/профиля/10040.jpg`,
    mainCategory: 'Профиля и направляющие',
    subCategory: "Перегородочные",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '0.55мм': 390,
      '0.6мм knauf': 500
    }
  },
  {
    id: uuidv4(),
    title: "Маячок 3000х6мм",
    description: "Длина 3м",
    image: `${process.env.PUBLIC_URL}/images/маяки/6.jpg`,
    mainCategory: 'Маяки и перфорированные углы',
    subCategory: "Маяки",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '0.55мм': 390,
      '0.6мм': 500
    }
  },
  {
    id: uuidv4(),
    title: "Маячок 3000х10мм",
    description: "Длина 3м",
    image: `${process.env.PUBLIC_URL}/images/маяки/10.jpg`,
    mainCategory: 'Маяки и перфорированные углы',
    subCategory: "Маяки",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '0.55мм': 390,
      '0.6мм': 500
    }
  },
  {
    id: uuidv4(),
    title: "Угол перфорированный 3000х20х20мм",
    description: "Длина 3м",
    image: `${process.env.PUBLIC_URL}/images/маяки/2020.jpg`,
    mainCategory: 'Маяки и перфорированные углы',
    subCategory: "Перфорированные углы",
    price: 390
  },
  {
    id: uuidv4(),
    title: "Угол перфорированный 3000х25х25мм",
    description: "Длина 3м",
    image: `${process.env.PUBLIC_URL}/images/маяки/2525.jpg`,
    mainCategory: 'Маяки и перфорированные углы',
    subCategory: "Перфорированные углы",
    price: 390
  },
  {
    id: uuidv4(),
    title: "Угол перфорированный пластиковый 3000х20х20мм",
    description: "Длина 3м",
    image: `${process.env.PUBLIC_URL}/images/маяки/пласт.jpg`,
    mainCategory: 'Маяки и перфорированные углы',
    subCategory: "Перфорированные углы",
    price: 390
  },
  {
    id: uuidv4(),
    title: "Маяк перфорированный пластиковый 3000х6мм",
    description: "Длина 3м",
    image: `${process.env.PUBLIC_URL}/images/маяки/маякпл.jpg`,
    mainCategory: 'Маяки и перфорированные углы',
    subCategory: "Маяки",
    price: 390
  },
  {
    id: uuidv4(),
    title: "Профтруба 15х15х1.5мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/1515.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 20х20х2мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/2020.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 25х25х2мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/2525.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 30х30х2мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/3030.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 40х20х1.5мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/4020.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 40х20х2мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/4020.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 40х25х2мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/4025.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 40х40х2мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/4040.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 50х25х2мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/5025.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 50х50х2мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/5050.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 60х30х2мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/6030.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 60х40х2мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/6040.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 60х40х3мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/6040.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 60х60х2мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/6060.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 60х60х3мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/6060.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 80х40х2мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/8040.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 80х80х2мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/8080.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 80х80х3мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/8080.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Профтруба 100х100х3мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/100100.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },  
  {
    id: uuidv4(),
    title: "Угол металлический 32х32мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/угол3232.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Металлические углы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Угол металлический 40х40мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/угол4040.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Металлические углы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Угол металлический 50х40мм",
    description: "Длина 6м",
    image: `${process.env.PUBLIC_URL}/images/профтрубы/угол5040.jpg`,
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Металлические углы",
    sizeText: 'Выберите длину:',
    pricesBySize: {
      '2м': 150,
      '3м': 225,
      '4м': 300,
      '6м': 450
    }
  },
  {
    id: uuidv4(),
    title: "Стеклопластиковая арматура (бухта 50м)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/арм/арм.jpg`,
    mainCategory: "Арматура и кладочная сетка",
    subCategory: "Стеклопластиковая арматура",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '6мм': 600,
      '8мм': 800,
      '10мм': 1200,
      '12мм': 1550
    }
  },
  {
    id: uuidv4(),
    title: "Кладочная сетка 2х1м",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/арм/сетка.jpg`,
    mainCategory: "Арматура и кладочная сетка",
    subCategory: "Кладочная сетка",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '3мм': 150,
      '4мм': 250
    }
  },
  {
    id: uuidv4(),
    title: "Пеноплэкс 1185х585х50мм (уп/7шт)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/пенопл1.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    price: 320
  },
  {
    id: uuidv4(),
    title: "Пеноплэкс 1185х585х30мм (уп/13шт)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/пенопл2.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    price: 220
  },
  {
    id: uuidv4(),
    title: "Пеноплэкс 1185х585х20мм (уп/20шт)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/пенопл3.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    price: 160
  },
  {
    id: uuidv4(),
    title: "Техноплeкс 1185х585х50мм (уп/8шт)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/технопл1.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    price: 310
  },
  {
    id: uuidv4(),
    title: "Техноплeкс 1185х585х30мм (уп/13шт)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/технопл2.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    price: 210
  },
  {
    id: uuidv4(),
    title: "Техноплeкс 1185х585х20мм (уп/20шт)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/технопл3.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    price: 150
  },
  {
    id: uuidv4(),
    title: "Профиплекс 1185х585х50мм (уп/8шт)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/профиплекс.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    price: 310
  },
  {
    id: uuidv4(),
    title: "Профиплекс 1185х585х30мм (уп/13шт)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/профиплекс.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    price: 210
  },
  {
    id: uuidv4(),
    title: "Профиплекс 1185х585х20мм (уп/20шт)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/профиплекс.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    price: 150
  },
  {
    id: uuidv4(),
    title: "Пенопласт 1200х1000мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/пенопласт.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Пенопласт",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '3мм': 100,
      '4мм': 130,
      '5мм': 150,
      '10мм': 280
    }
  },
  {
    id: uuidv4(),
    title: "Технониколь Роклайт 1200х600х50мм (уп/8шт)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/роклайт.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    price: 1000
  },
  {
    id: uuidv4(),
    title: "Звукоизоляция АкустиКнауф 1230х610х50мм (уп/16шт)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/акустик.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    price: 1800
  },
  {
    id: uuidv4(),
    title: "Тисма 1200x8300х50мм 2 мата (20м²)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/тисма.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    price: 1700
  },
  {
    id: uuidv4(),
    title: "Isover СТРОНГ 610х1000х50мм уп/10шт(6.1м²)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/стронг.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    price: 1000
  },
  {
    id: uuidv4(),
    title: "Isover Теплый дом 610х1170х100мм уп/7шт(5м²)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/изовер.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    price: 1500
  },
  {
    id: uuidv4(),
    title: "Isover Теплый дом 610х1170х50мм уп/14шт(10м²)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/изовер.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    price: 1500
  },
  {
    id: uuidv4(),
    title: "Isover Теплый дом 8200х610х50мм 2 мата (10м²)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/изовер10.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    price: 1500
  },
  {
    id: uuidv4(),
    title: "Фольгированный утеплитель 1200х25000мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/фольга.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Отражающая теплоизоляция",
    sizeText: 'Выберите толщину:',
    pricesBySize: {
      '2мм': 750,
      '3мм': 900,
      '5мм': 1300,
      '10мм (1200х15000мм)': 1300
    }
  },
  {
    id: uuidv4(),
    title: "Теплоотражающая пароизоляция 35м²",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/ф.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Отражающая теплоизоляция",
    price: 2500
  },
  {
    id: uuidv4(),
    title: "Мембрана B Пароизоляция",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/б.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Пароизоляция",
    sizeText: 'Площадь:',
    pricesBySize: {
      '30м²': 500,
      '70м²': 900
    }
  },
  {
    id: uuidv4(),
    title: "Мембрана D Гидро-пароизоляция",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/д.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Гидро-пароизоляция",
    sizeText: 'Площадь:',
    pricesBySize: {
      '30м²': 700,
      '70м²': 1300
    }
  },
  {
    id: uuidv4(),
    title: "Мембрана A Ветро-влагозащита",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/а.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Ветро-влагозащита",
    sizeText: 'Площадь:',
    pricesBySize: {
      '30м²': 700,
      '70м²': 1300
    }
  },
  {
    id: uuidv4(),
    title: "Тисма B 60м² Пароизоляция",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/тисмаб.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Пароизоляция",
    price: 2000
  },
  {
    id: uuidv4(),
    title: "Тисма A 60м² Ветро-влагозащита",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/тисмаа.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Ветро-влагозащита",
    price: 3000
  },
  {
    id: uuidv4(),
    title: "Fiberon B 60м² Пароизоляция",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/фб.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Пароизоляция",
    price: 1200
  },
  {
    id: uuidv4(),
    title: "Fiberon D 60м² Гидро-пароизоляция",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/фд.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Гидро-пароизоляция",
    price: 2000
  },
  {
    id: uuidv4(),
    title: "Fiberon A 60м² Ветро-влагозащита",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/фа.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Ветро-влагозащита",
    price: 2000
  },
  {
    id: uuidv4(),
    title: "Изоспан B Пароизоляция",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/изб.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Пароизоляция",
    sizeText: 'Площадь:',
    pricesBySize: {
      '35м²': 1400,
      '70м²': 2500
    }
  },
  {
    id: uuidv4(),
    title: "Изоспан D Гидро-пароизоляция",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/изд.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Гидро-пароизоляция",
    sizeText: 'Площадь:',
    pricesBySize: {
      '35м²': 1700,
      '70м²': 3000
    }
  },
  {
    id: uuidv4(),
    title: "Изоспан AM Ветро-влагозащита (3 слоя) 70м²",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/изам.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Ветро-влагозащита",
    price: 5500
  },
  {
    id: uuidv4(),
    title: "Изоспан FB Гидро-пароизоляция отражающая 35м²",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/изфб.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Гидро-пароизоляция",
    price: 2800
  },
  {
    id: uuidv4(),
    title: "Гидроизоляция Ceresit CR65",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/гидроизол/ср65.jpg`,
    mainCategory: "Гидроизоляция",
    subCategory: "Сухая смесь",
    sizeText: 'Выберите объём:',
    pricesBySize: {
      '5кг': 500,
      '20кг': 1300
    }
  },
  {
    id: uuidv4(),
    title: "Гидроизоляция Литокс",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/гидроизол/литокс.jpg`,
    mainCategory: "Гидроизоляция",
    subCategory: "Жидкая гидроизоляция",
    sizeText: 'Выберите объём:',
    pricesBySize: {
      '5кг': 1800,
      '10кг': 3800
    }
  },
  {
    id: uuidv4(),
    title: "Гидроизоляция Vetonit",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/гидроизол/ветон.jpg`,
    mainCategory: "Гидроизоляция",
    subCategory: "Жидкая гидроизоляция",
    sizeText: 'Выберите объём:',
    pricesBySize: {
      '4кг': 2400,
      '8кг': 3500
    }
  },
  {
    id: uuidv4(),
    title: "Гидроизоляция Ceresit CL51",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/гидроизол/сл51.jpg`,
    mainCategory: "Гидроизоляция",
    subCategory: "Жидкая гидроизоляция",
    sizeText: 'Выберите объём:',
    pricesBySize: {
      '5кг': 2700,
      '15кг': 3500
    }
  },
  {
    id: uuidv4(),
    title: "Лента гидроизоляционная Волма 10м²",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/гидроизол/волма.jpg`,
    mainCategory: "Гидроизоляция",
    subCategory: "Лента гидроизоляционная",
    price: 1500
  },
  {
    id: uuidv4(),
    title: "Саморез по дереву",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/дер.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Саморезы для гипсокартона",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "25мм" : 250,
      "35мм" : 250,
      "41мм" : 250,
      "45мм" : 250,
      "51мм" : 250,
      "55мм" : 250,
      "61мм" : 250,
      "65мм" : 250,
      "70мм" : 250,
      "75мм" : 250,
      "90мм" : 250,
      "102мм" : 250,
      "120мм" : 250,
    },
    isWeight: true,
    quantityStep: 0.1,
    minQuantity: 0.1
  },
  {
    id: uuidv4(),
    title: "Саморез по металлу",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/мет.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Саморезы для гипсокартона",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "25мм" : 250,
      "32мм" : 250,
      "41мм" : 250
    },
    isWeight: true,
    quantityStep: 0.1,
    minQuantity: 0.1
  },
  {
    id: uuidv4(),
    title: "Саморез прессшайба острый",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/пр.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Саморезы для гипсокартона",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "13мм" : 300,
      "16мм" : 300,
      "19мм" : 300,
      "29мм" : 300,
      "35мм" : 300,
      "41мм" : 300
    },
    isWeight: true,
    quantityStep: 0.1,
    minQuantity: 0.1
  },
  {
    id: uuidv4(),
    title: "Саморез прессшайба со сверлом",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/прсв.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Саморезы для гипсокартона",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "13мм" : 300,
      "16мм" : 300,
      "19мм" : 300,
      "29мм" : 300,
      "35мм" : 300,
    },
    isWeight: true,
    quantityStep: 0.1,
    minQuantity: 0.1
  },
  {
    id: uuidv4(),
    title: "Кровельный саморез оцинкованный",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/кров/оцинк.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм" : 2.5,
      "4.8х29мм" : 2.5,
      "6.3х32мм" : 4.5,
      "5.5х38мм" : 3.5,
      "5.5х51мм" : 4,
      "6.3х51мм" : 4.5,
      "5.5х76мм" : 5.5
    },
  },
  {
    id: uuidv4(),
    title: "Кровельный саморез белый",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/кров/бел.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм" : 3.5,
      "4.8х29мм" : 3.5,
      "4.8х35мм" : 4,
      "4.8х51мм" : 4.5,
      "5.5х76мм" : 7
    },
  },
  {
    id: uuidv4(),
    title: "Кровельный саморез графит",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/кров/граф.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм" : 3.5,
      "4.8х29мм" : 3.5,
      "4.8х35мм" : 4,
      "4.8х51мм" : 4.5,
      "5.5х76мм" : 7
    },
  },
  {
    id: uuidv4(),
    title: "Кровельный саморез зелёный",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/кров/зел.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм" : 3.5,
      "4.8х29мм" : 3.5,
      "4.8х35мм" : 4,
      "4.8х51мм" : 4.5,
      "5.5х76мм" : 7
    },
  },
  {
    id: uuidv4(),
    title: "Кровельный саморез коричневый",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/кров/корич.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм" : 3.5,
      "4.8х29мм" : 3.5,
      "4.8х35мм" : 4,
      "4.8х51мм" : 4.5,
      "5.5х76мм" : 7
    },
  },
  {
    id: uuidv4(),
    title: "Кровельный саморез красный",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/кров/крас.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм" : 3.5,
      "4.8х29мм" : 3.5,
      "4.8х35мм" : 4,
      "4.8х51мм" : 4.5,
      "5.5х76мм" : 7
    },
  },
  {
    id: uuidv4(),
    title: "Кровельный саморез синий",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/кров/син.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм" : 3.5,
      "4.8х29мм" : 3.5,
      "4.8х35мм" : 4,
      "4.8х51мм" : 4.5,
      "5.5х76мм" : 7
    },
  },
  {
    id: uuidv4(),
    title: "Кровельный саморез слоновая кость",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/кров/слон.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм" : 3.5,
      "4.8х29мм" : 3.5,
      "4.8х35мм" : 4,
      "4.8х51мм" : 4.5,
      "5.5х76мм" : 7
    },
  },
  {
    id: uuidv4(),
    title: "Саморез прессшайба коричневый 19мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/кров/краш1.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    price: 2
  },
  {
    id: uuidv4(),
    title: "Саморез прессшайба белый 19мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/кров/краш2.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    price: 2
  },
  {
    id: uuidv4(),
    title: "Саморез прессшайба графит 19мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/кров/краш3.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    price: 2
  },
  {
    id: uuidv4(),
    title: "Гвозди",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/гвозди/гвозди.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Гвозди",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "20мм" : 200,
      "40мм" : 200,
      "50мм" : 200,
      "60мм" : 200,
      "70мм" : 200,
      "80мм" : 200,
      "90мм" : 200,
      "100мм" : 200,
      "110мм" : 200,
      "120мм" : 200,
      "150мм" : 200
    },
    isWeight: true,
    quantityStep: 0.1,
    minQuantity: 0.1
  },
  {
    id: uuidv4(),
    title: "Гвозди толевые",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/гвозди/тол.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Гвозди",
    price: 300,
    isWeight: true,
    quantityStep: 0.1,
    minQuantity: 0.1
  },
  {
    id: uuidv4(),
    title: "Гвозди шиферные 120мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/гвозди/шиф.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Гвозди",
    price: 300,
    isWeight: true,
    quantityStep: 0.1,
    minQuantity: 0.1
  },
  {
    id: uuidv4(),
    title: "Гвозди финишные латунь",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/гвозди/латунь.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Гвозди",
    price: 800,
    isWeight: true,
    quantityStep: 0.1,
    minQuantity: 0.1
  },
  {
    id: uuidv4(),
    title: "Гвозди финишные оцинкованные",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/гвозди/оцинк.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Гвозди",
    price: 400,
    isWeight: true,
    quantityStep: 0.1,
    minQuantity: 0.1
  },
  {
    id: uuidv4(),
    title: "Анкерный болт",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/болты/анкер.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Болты, гайки",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "8х40мм" : 10,
      "8х65мм" : 13,
      "8х100мм" : 15,
      "8х120мм" : 20,
      "10х77мм" : 20,
      "10х97мм" : 20,
      "10х130мм" : 25,
      "12х99мм" : 30,
      "12х129мм" : 30,
      "12х150мм" : 40,
      "12х250мм" : 50,
      "12х300мм" : 60,
    }
  },
  {
    id: uuidv4(),
    title: "Болт",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/болты/болт.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Болты, гайки",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "6х20мм" : 5,
      "6х50мм" : 7,
      "8х30мм" : 8,
      "10х30мм" : 10,
      "10х50мм" : 12,
      "10х80мм" : 15,
      "12х40мм" : 10,
      "12х60мм" : 15,
      "12х100мм" : 20,
    }
  },
  {
    id: uuidv4(),
    title: "Гайка",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/болты/гайки.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Болты, гайки",
    sizeText: "Выберите диаметр:",
    pricesBySize: {
      "6мм" : 2,
      "8мм" : 4,
      "10мм" : 6,
      "12мм" : 8,
    }
  },
  {
    id: uuidv4(),
    title: "Уголок крепёжный",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/уголки.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Крепёжные уголки и подвесы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "20х40х40мм" : 6,
      "30х30х30мм" : 8,
      "40х40х30мм" : 10,
      "40х40х40мм" : 15,
      "40х50х50мм" : 18,
      "40х80х80мм" : 20,
      "50х40х40мм" : 20,
      "50х80х80мм" : 30,
      "60х60х60мм" : 25,
    }
  },
  {
    id: uuidv4(),
    title: "Уголок крепёжный усиленный",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/усил.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Крепёжные уголки и подвесы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "50х50х35мм" : 15,
      "70х70х40мм" : 25,
      "70х70х55мм" : 30,
      "90х90х40мм" : 35,
      "90х90х65мм" : 40,
    }
  },
  {
    id: uuidv4(),
    title: "Подвес прямой для гипсокартона",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/подвес.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Крепёжные уголки и подвесы",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "0.7мм" : 10,
      "0.9мм" : 15,
      "1мм knauf" : 20,
    }
  },
  {
    id: uuidv4(),
    title: "Дюбель морковка",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/дюб/морковка.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Дюбеля",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "6х42мм" : 1,
      "6х52мм" : 1,
    }
  },
  {
    id: uuidv4(),
    title: "Дюбель гвоздь",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/дюб/дюбель.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Дюбеля",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "6х40мм" : 2,
      "6х60мм" : 2.5,
      "6х80мм" : 3.5,
      "8х60мм" : 4,
      "8х120мм" : 6,
    }
  },
  {
    id: uuidv4(),
    title: "Дюбель ввёртыш 15х38мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/дюб/ввертыш.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Дюбеля",
    price: 2
  },
  {
    id: uuidv4(),
    title: "Дюбель бабочка",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/дюб/бабочка.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Дюбеля",
    price: 3
  },
  {
    id: uuidv4(),
    title: "Удлинитель профилей 60х27мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/проф/удл.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Удлинитель профилей и крабы",
    price: 25
  },
  {
    id: uuidv4(),
    title: "Соединитель профилей Knauf (Краб)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/проф/крабы.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Удлинитель профилей и крабы",
    price: 70
  },
  {
    id: uuidv4(),
    title: "Грунтовка Arco Iris глубокого проникновения",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/грунт/арко.jpg`,
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "10л" : 500,
      "5л" : 300,
      "3л" : 200,
    }
  },
  {
    id: uuidv4(),
    title: "Грунтовка Ceresit CT17",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/грунт/ст17.jpg`,
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    price: 500
  },
  {
    id: uuidv4(),
    title: "Грунтовка Оптимист",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/грунт/оптимист1.jpg`,
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "10л" : 500,
      "5л" : 300,
    }
  },
  {
    id: uuidv4(),
    title: "Грунтовка Оптимист глубокого проникновения",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/грунт/оптимист2.jpg`,
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    price: 500
  },
  {
    id: uuidv4(),
    title: "Грунтовка Vetonit глубокого проникновения",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/грунт/ветонит.jpg`,
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    price: 500
  },
  {
    id: uuidv4(),
    title: "Грунт-концентрат Knauf Тифенгрунд",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/грунт/тифен.jpg`,
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    price: 500
  },
  {
    id: uuidv4(),
    title: "Грунтовка Лакра интерьерная",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/грунт/лакра.jpg`,
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    price: 500
  },
  {
    id: uuidv4(),
    title: "Грунт-концентрат Лакра PROFIT",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/грунт/профит.jpg`,
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    price: 500
  },
  {
    id: uuidv4(),
    title: "Грунт-концентрат Arco Iris 1:10",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/грунт/конц.jpg`,
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "10л" : 500,
      "5л" : 300,
      "3л" : 200,
      "1л" : 100,
    }
  },
  {
    id: uuidv4(),
    title: "Грунт-концентрат Knauf Миттельгрунд",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/грунт/миттель.jpg`,
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    price: 500
  },
  {
    id: uuidv4(),
    title: "Грунтовка под декоративные штукатурки Ceresit CT16",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/грунт/ст16.jpg`,
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    price: 500
  },
  {
    id: uuidv4(),
    title: "Бетоноконтакт Ceresit CT19 15кг",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/грунт/ст19.jpg`,
    mainCategory: "Отделка",
    subCategory: "Бетоноконтакт",
    price: 500
  },
  {
    id: uuidv4(),
    title: "Бетоноконтакт Хабез 12кг",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/грунт/хабез.jpg`,
    mainCategory: "Отделка",
    subCategory: "Бетоноконтакт",
    price: 500
  },
  {
    id: uuidv4(),
    title: "Бетоноконтакт Arco Iris",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/грунт/бконтакт.jpg`,
    mainCategory: "Отделка",
    subCategory: "Бетоноконтакт",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "12кг" : 500,
      "6кг" : 300,
      "3кг" : 200,
      "1.5кг" : 100,
    }
  },
  {
    id: uuidv4(),
    title: "Краска Arco Iris для стен и потолков",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/краски/стен.jpg`,
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Водоэмульсионные краски",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "14кг" : 500,
      "7кг" : 300,
      "3кг" : 200,
      "1.5кг" : 100,
    }
  },
  {
    id: uuidv4(),
    title: "Краска Arco Iris моющаяся",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/краски/моющ.jpg`,
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Водоэмульсионные краски",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "14кг" : 500,
      "7кг" : 300,
      "3кг" : 200,
      "1.5кг" : 100,
    }
  },
  {
    id: uuidv4(),
    title: "Краска Arco Iris фасадная",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/краски/фасад.jpg`,
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Водоэмульсионные краски",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "14кг" : 500,
      "7кг" : 300,
      "3кг" : 200,
      "1.5кг" : 100,
    }
  },
  {
    id: uuidv4(),
    title: "Краска Лакра для стен и потолков",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/краски/лстен.jpg`,
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Водоэмульсионные краски",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "14кг" : 500,
      "6.5кг" : 300,
      "3кг" : 200,
      "1.5кг" : 100,
    }
  },
  {
    id: uuidv4(),
    title: "Краска Лакра моющаяся",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/краски/лмоющ.jpg`,
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Водоэмульсионные краски",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "14кг" : 500,
      "6.5кг" : 300,
      "3кг" : 200,
    }
  },
  {
    id: uuidv4(),
    title: "Краска Лакра фасадная",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/краски/лфасад.jpg`,
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Водоэмульсионные краски",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "14кг" : 500,
      "6.5кг" : 300,
      "3кг" : 200,
    }
  },
  {
    id: uuidv4(),
    title: "Эмаль алкидная ПФ-115 (1.8кг)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/краски/пф.jpg`,
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Эмали",
    sizeText: "Выберите цвет:",
    pricesBySize: {
      "Чёрный": 400,
      "Белый": 400,
      "Серый": 400,
      "Графит": 400,
      "Шоколадный": 400,
      "Вишнёвый": 400,
      "Жёлтый": 400,
      "Голубой": 400,
      "Бирюзовый": 400,
      "Салатный": 400,
    }
  },
  {
    id: uuidv4(),
    title: "Эмаль алкидная ПФ-115 (0.8кг)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/краски/пф.jpg`,
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Эмали",
    sizeText: "Выберите цвет:",
    pricesBySize: {
      "Чёрный": 400,
      "Белый": 400,
      "Серый": 400,
      "Графит": 400,
      "Жёлтый": 400,
      "Синий": 400,
    }
  },
  {
    id: uuidv4(),
    title: "Грунт-эмаль 3в1 (1.8кг)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/краски/грунт.jpg`,
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Эмали",
    sizeText: "Выберите цвет:",
    pricesBySize: {
      "Чёрный": 500,
      "Белый": 500,
      "Серый": 500,
      "Графит": 500,
      "Коричневый": 500
    }
  },
  {
    id: uuidv4(),
    title: "Эмаль для радиаторов акриловая",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/краски/термо.jpg`,
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Эмали",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "0.9кг": 500,
      "1.9кг": 900,
    }
  },
  {
    id: uuidv4(),
    title: "Эмаль для дверей и подоконников акриловая",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/краски/окон.jpg`,
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Эмали",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "0.9кг": 500,
      "1.9кг": 900,
    }
  },
  {
    id: uuidv4(),
    title: "Яхтный лак бесцветный",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/краски/яхт.jpg`,
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Лаки и пропитки",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "0.9л": 400,
      "1.9л": 700,
    }
  },
  {
    id: uuidv4(),
    title: "Пропитка Profiwood 0.75л",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/краски/профи075.jpg`,
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Лаки и пропитки",
    sizeText: "Выберите оттенок:",
    pricesBySize: {
      "Калужница": 400,
      "Красное дерево": 400,
      "Сосна": 400,
      "Палисандр": 400,
      "Тик": 400,
      "Орегон": 400,
    }
  },
  {
    id: uuidv4(),
    title: "Пропитка Profiwood 2.5л",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/краски/профи25.jpg`,
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Лаки и пропитки",
    sizeText: "Выберите оттенок:",
    pricesBySize: {
      "Калужница": 1100,
      "Красное дерево": 1100,
      "Сосна": 1100,
      "Палисандр": 1100,
      "Тик": 1100,
      "Орегон": 1100,
    }
  },
  {
    id: uuidv4(),
    title: "Шпатлёвка латексная Текс",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/шпатлевки/текс.jpg`,
    mainCategory: "Отделка",
    subCategory: "Готовые шпатлёвки",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "16кг" : 500,
      "8кг" : 300,
      "5кг" : 200,
      "1.5кг" : 100,
    }
  },
  {
    id: uuidv4(),
    title: "Шпатлёвка универсальная SHEETROCK SuperFinish",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/шпатлевки/шитрок.jpg`,
    mainCategory: "Отделка",
    subCategory: "Готовые шпатлёвки",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "28кг" : 3500,
      "18кг" : 2300,
    }
  },
  {
    id: uuidv4(),
    title: "Шпатлёвка финишная Knauf Ротбанд паста 18кг",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/шпатлевки/ротбанд.jpg`,
    mainCategory: "Отделка",
    subCategory: "Готовые шпатлёвки",
    price: 500
  },
  {
    id: uuidv4(),
    title: "Шпатлёвка финишная Vetonit LR паста 18кг",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/шпатлевки/лрпаста.jpg`,
    mainCategory: "Отделка",
    subCategory: "Готовые шпатлёвки",
    price: 500
  },
  {
    id: uuidv4(),
    title: "Пена профессиональная 70л",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/пена/проф70.jpg`,
    mainCategory: "Отделка",
    subCategory: "Монтажная пена и пена клей",
    pricesBySize: {
      "Arco Iris" : 600,
      "Soudal" : 600,
      "Tytan" : 700,
      "Kudo" : 600
    }
  },
  {
    id: uuidv4(),
    title: "Пена профессиональная 65л",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/пена/проф65.jpg`,
    mainCategory: "Отделка",
    subCategory: "Монтажная пена и пена клей",
    pricesBySize: {
      "Kron (универсальная)" : 600,
      "Момент" : 500,
      "Arco Iris" : 500,
      "Kron" : 500
    }
  },
  {
    id: uuidv4(),
    title: "Пена бытовая",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/пена/быт.jpg`,
    mainCategory: "Отделка",
    subCategory: "Монтажная пена и пена клей",
    pricesBySize: {
      "Kron 65л" : 500,
      "Arco Iris 55л" : 450,
    }
  },
  {
    id: uuidv4(),
    title: "Пена клей Arco Iris",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/пена/пенакл.jpg`,
    mainCategory: "Отделка",
    subCategory: "Монтажная пена и пена клей",
    price: 600
  },
  {
    id: uuidv4(),
    title: "Пена огнеупорная Kolt",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/пена/огн.jpg`,
    mainCategory: "Отделка",
    subCategory: "Монтажная пена и пена клей",
    price: 600
  },
  {
    id: uuidv4(),
    title: "Пена цемент Rich",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/пена/цем.jpg`,
    mainCategory: "Отделка",
    subCategory: "Монтажная пена и пена клей",
    price: 600
  },
  {
    id: uuidv4(),
    title: "Очиститель для пены",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/пена/очиститель.jpg`,
    mainCategory: "Отделка",
    subCategory: "Монтажная пена и пена клей",
    price: 200
  },
  {
    id: uuidv4(),
    title: "Силиконовый герметик санитарный",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/клей/санит.jpg`,
    mainCategory: "Отделка",
    subCategory: "Герметик",
    sizeText: "Выберите товар:",
    pricesBySize: {
      "Tytan прозрачный": 550,
      "Tytan белый": 550,
      "Момент белый": 500
    }
  },
  {
    id: uuidv4(),
    title: "Силиконовый герметик универсальный",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/клей/унив.jpg`,
    mainCategory: "Отделка",
    subCategory: "Герметик",
    sizeText: "Выберите товар:",
    pricesBySize: {
      "ISOBOX белый": 350,
      "Super Монтажник белый": 350
    }
  },
  {
    id: uuidv4(),
    title: "Силиконовый герметик Tytan для кровли",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/клей/кров.jpg`,
    mainCategory: "Отделка",
    subCategory: "Герметик",
    sizeText: "Выберите цвет:",
    pricesBySize: {
      "Прозрачный": 400,
      "Белый": 400,
      "Чёрный": 400
    }
  },
  {
    id: uuidv4(),
    title: "Силиконовый герметик Vetonit цветной",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/клей/ветон.jpg`,
    mainCategory: "Отделка",
    subCategory: "Герметик",
    sizeText: "Выберите цвет:",
    pricesBySize: {
      "Белый": 700,
      "Серый": 700,
      "Серебро": 700,
      "Гранит": 700,
      "Антрацит": 700,
    }
  },
  {
    id: uuidv4(),
    title: "Силиконовый герметик Rich огнеупорный",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/клей/огнеуп.jpg`,
    mainCategory: "Отделка",
    subCategory: "Герметик",
    price: 400
  },
  {
    id: uuidv4(),
    title: "Монтажный клей Момент Жидкие гвозди",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/клей/мв.jpg`,
    mainCategory: "Отделка",
    subCategory: "Клей",
    sizeText: "Выберите товар:",
    pricesBySize: {
      "МВ-100": 500,
      "МВ-70": 470,
      "МВ-50": 450
    }
  },
  {
    id: uuidv4(),
    title: "Монтажный клей Жидкие гвозди",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/клей/клей.jpg`,
    mainCategory: "Отделка",
    subCategory: "Клей",
    sizeText: "Выберите товар:",
    pricesBySize: {
      "Tytan Classic Fix": 800,
      "ЭКОН": 350,
      "Master Teks": 300
    }
  },
  {
    id: uuidv4(),
    title: "Клей КС для линоулема",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/клей/кс.jpg`,
    mainCategory: "Отделка",
    subCategory: "Клей",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "5кг": 500,
      "2.7кг": 350,
      "1.5кг": 250,
    }
  },
   {
    id: uuidv4(),
    title: "Клей ПВА строительный",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/клей/пва.jpg`,
    mainCategory: "Отделка",
    subCategory: "Клей",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "10кг": 900,
      "5кг": 450,
      "3кг": 300,
      "0.9кг": 150
    }
  },
  {
    id: uuidv4(),
    title: "Клей Hauser для пенополистирола ",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/клей/хаузер.jpg`,
    mainCategory: "Отделка",
    subCategory: "Клей",
    price: 500
  },
  
  {
    id: uuidv4(),
    title: "Стеклосетка фасадная под штукатурку",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/стекл/фасад.jpg`,
    mainCategory: "Отделка",
    subCategory: "Стеклосетка и стеклохолст",
    sizeText: "Выберите стеклосетку:",
    pricesBySize: {
      "Зелёная 50м": 2200,
      "Жёлтая 50м": 1950,
      "Синяя 50м": 2000,
      "Жёлтая 30м": 1500,
      "Жёлтая 20м": 1100,
      "Жёлтая 10м": 700,
    }
  },
  {
    id: uuidv4(),
    title: "Стеклосетка малярная под штукатурку",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/стекл/интер.jpg`,
    mainCategory: "Отделка",
    subCategory: "Стеклосетка и стеклохолст",
    sizeText: "Выберите стеклосетку:",
    pricesBySize: {
      "5х5 50м": 1550,
      "5х5 20м": 800,
      "2х2 50м": 1400,
      "2х2 20м": 800,
      "2х2 10м": 500,
    }
  },
  {
    id: uuidv4(),
    title: "Стеклохолст малярный 40гр/м²",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/отделка/стекл/холст.jpg`,
    mainCategory: "Отделка",
    subCategory: "Стеклосетка и стеклохолст",
    price: 1800
  },
  {
    id: uuidv4(),
    title: "Валик 180мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/валики.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Валики",
    sizeText: "Выберите валик:",
    pricesBySize: {
      "Тигр (ворс 11мм)": 200,
      "Зелёный (ворс 18мм)": 200,
      "Полосатый (ворс 11мм)": 200,
    }
  },
  {
    id: uuidv4(),
    title: "Валик 230мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/валики.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Валики",
    sizeText: "Выберите валик:",
    pricesBySize: {
      "Тигр (ворс 11мм)": 250,
      "Зелёный (ворс 18мм)": 250,
      "Полосатый (ворс 11мм)": 250,
    }
  },
  {
    id: uuidv4(),
    title: "Шпатель",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/шпатели.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Шпатели",
    sizeText: "Выберите ширину:",
    pricesBySize: {
      "40мм": 40,
      "60мм": 50,
      "80мм": 60,
      "100мм": 70,
      "150мм": 80,
      "200мм": 100,
      "250мм": 120,
      "300мм": 140,
      "350мм": 160,
      "450мм": 200,
      "600мм": 250,
    }
  },
  {
    id: uuidv4(),
    title: "Шпатель профессиональный",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/проф.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Шпатели",
    sizeText: "Выберите ширину:",
    pricesBySize: {
      "63мм": 150,
      "75мм": 200,
      "100мм": 250,
      "120мм": 300,
      "150мм": 350,
      "200мм": 400,
      "250мм": 450,
      "300мм": 500,
      "350мм": 550,
    }
  },
  {
    id: uuidv4(),
    title: "Кисть с натуральной щетиной",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/кисти.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Кисти",
    sizeText: "Выберите ширину:",
    pricesBySize: {
      "20мм": 50,
      "25мм": 60,
      "40мм": 80,
      "50мм": 100,
      "65мм": 120,
      "75мм": 150,
      "100мм": 200,
    }
  },
  {
    id: uuidv4(),
    title: "Кисть с искусственной щетиной",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/искус.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Кисти",
    sizeText: "Выберите ширину:",
    pricesBySize: {
      "38мм": 80,
      "50мм": 100,
      "65мм": 120,
      "75мм": 150,
      "100мм": 200,
    }
  },
  {
    id: uuidv4(),
    title: "Кисть макловица (ракля)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/ракля.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Кисти",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "140х50мм": 150,
      "150х70мм": 180,
      "170х70мм": 200,
    }
  },  
  {
    id: uuidv4(),
    title: "Скотч 48мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/скотчи.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Ленты и скотчи",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "30м прозрачный": 100,
      "150м жёлтый": 300,
    }
  }, 
  {
    id: uuidv4(),
    title: "Лента малярная 48х5000мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/маляр.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Ленты и скотчи",
    price: 150
  },  
  {
    id: uuidv4(),
    title: "Зажим кольцо 0.8мм 500шт",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/свп/роз500.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "СВП",
    price: 1000
  },
  {
    id: uuidv4(),
    title: "Зажим кольцо 0.8мм 100шт",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/свп/роз100.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "СВП",
    price: 300
  },
  {
    id: uuidv4(),
    title: "Зажим кольцо 1.5мм 500шт",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/свп/зел500.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "СВП",
    price: 1000
  },
  {
    id: uuidv4(),
    title: "Зажим кольцо 1.5мм 100шт",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/свп/зел100.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "СВП",
    price: 300
  },
  {
    id: uuidv4(),
    title: "Клинья 200шт",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/свп/клин200.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "СВП",
    price: 1000
  },
  {
    id: uuidv4(),
    title: "Клинья 50шт",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/свп/клин50.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "СВП",
    price: 350
  },
  {
    id: uuidv4(),
    title: "Бита Ph2-50мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/биты/бита.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Свёрла, биты и буры",
    price: 100
  },
  {
    id: uuidv4(),
    title: "Бита кровельная 8мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/биты/кров.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Свёрла, биты и буры",
    price: 100
  },
  {
    id: uuidv4(),
    title: "Бур по бетону SDS+",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/биты/буры.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Свёрла, биты и буры",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "6х110мм": 120,
      "6х160мм": 150,
      "6х210мм": 180,
      "8х110мм": 140,
      "8х210мм": 200,
      "8х260мм": 220,
      "10х160мм": 200,
      "10х210мм": 220,
      "10х310мм": 250,
    }
  },
  {
    id: uuidv4(),
    title: "Сверло по металлу",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/биты/сверла.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Свёрла, биты и буры",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "3мм": 50,
      "3.2мм": 60,
      "3.5мм": 70,
      "4.2мм": 80,
      "4.5мм": 90,
      "5мм": 100,
      "5.5мм": 110,
      "6мм": 130,
      "6.5мм": 140,
      "7мм": 150,
      "7.5мм": 170,
      "8.5мм": 200,
      "9мм": 230,
      "9.5мм": 250,
    }
  },
  {
    id: uuidv4(),
    title: "Диск отрезной по металлу",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/диски/отрез.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Абразивные диски",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "125мм": 100,
      "150мм": 120,
      "230мм": 150,
    }
  },
  {
    id: uuidv4(),
    title: "Круг зачистной по металлу",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/диски/зачист.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Абразивные диски",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "125х6х22мм": 150,
      "150х6х22мм": 170,
      "180х6х22мм": 200,
    }
  },
  {
    id: uuidv4(),
    title: "Шлифкруг лепестковый",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/диски/зачист.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Абразивные диски",
    price: 150
  },
  {
    id: uuidv4(),
    title: "Диск алмазный 125мм ультратонкий",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/диски/ультра.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Абразивные диски",
    price: 500
  },
  {
    id: uuidv4(),
    title: "Диск алмазный 125мм супертонкий",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/диски/ультра.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Абразивные диски",
    price: 450
  },
  {
    id: uuidv4(),
    title: "Диск алмазный по граниту LUFTER",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/диски/люфтер.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Абразивные диски",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "115мм": 900,
      "125мм": 1000,
    }
  },
  {
    id: uuidv4(),
    title: "Мешки для строительного мусора",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/мешки.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Другое",
    sizeText: "Выберите мешок:",
    pricesBySize: {
      "зелёный": 15,
      "белый": 20,
    }
  },
  {
    id: uuidv4(),
    title: "Ванночка 330х350мм",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/инструм/ванночка.jpg`,
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Другое",
    price: 150
  },
];

export default menuItems;