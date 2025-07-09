import { MenuItemProps } from "../../components/MenuItem/MenuItem";
import { v4 as uuidv4 } from 'uuid';

export const menuItems: MenuItemProps[] = [
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
    title: "Гипсокартон 2500х1200мм",
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
    title: "Профиль 3000х60х27мм",
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
    title: "Направляющий 3000х27х28мм",
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
    title: "Профиль 3000х50х50мм",
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
    title: "Направляющий 3000х50х40мм",
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
    title: "Профиль 3000х75х50мм",
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
    title: "Направляющий 3000х75х40мм",
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
    title: "Профиль 3000х100х50мм",
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
    title: "Направляющий 3000х100х40мм",
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
    image: `${process.env.UBLIC_URL}/images/профтрубы/1515.jpg`,
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
    title: "Isover СТРОНГ 610х1000х50мм (уп/10шт)",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/утепл/стронг.jpg`,
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    price: 1000
  },
  {
    id: uuidv4(),
    title: "Isover Теплый дом 610х1170х100мм (уп/7шт)",
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
    title: "Fiberon D 60м² Пароизоляция",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/изол/фд.jpg`,
    mainCategory: "Изоляция",
    subCategory: "Пароизоляция",
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
      "32мм" : 250
    }
  },
  {
    id: uuidv4(),
    title: "Саморез прессшайба",
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
    }
  },
  {
    id: uuidv4(),
    title: "Кровельный саморез зелёный",
    description: "Описание",
    image: `${process.env.PUBLIC_URL}/images/крепеж/зел.jpg`,
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "19мм" : 300,
      "29мм" : 300,
      "35мм" : 300,
      "51мм" : 300,
      "76мм" : 300,
      "41мм" : 300
    }
  },
];
