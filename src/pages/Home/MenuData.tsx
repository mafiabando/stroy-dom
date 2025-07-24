import { MenuItemProps } from "../../components/MenuItem/MenuItem";
import { v4 as uuidv4 } from 'uuid';

const menuItems: MenuItemProps[] = [
  {
    id: "ecd06d1c-b8c6-42f1-bb81-0b7ec38033a6",
    title: "МП-20 Коричневый (1150х0.35мм)",
    description: "Профнастил МП-20, ширина 1.15м, толщина 0.35мм, коричневый цвет. Используется для заборов и облицовки. Цена зависит от длины.",
    image: "undefined/images/профнастил/mp1.webp",
    mainCategory: "Профнастил",
    subCategory: "МП-20",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "1.5м": 800,
      "1.7м": 900,
      "2м": 1000
    },
    urlId: "mp-20-korichnevyy"
  },
  {
    id: "06d8312a-1558-4ef5-a1f1-caf133474b09",
    title: "МП-20 Красный (1150х0.35мм)",
    description: "Профнастил МП-20, ширина 1.15м, толщина 0.35мм, красный цвет. Используется для заборов и облицовки. Цена зависит от длины.",
    image: "undefined/images/профнастил/mp2.webp",
    mainCategory: "Профнастил",
    subCategory: "МП-20",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "1.5м": 800,
      "1.7м": 900,
      "2м": 1000
    },
    urlId: "mp-20-krasnyy"
  },
  {
    id: "591c654a-0c1e-4751-a04f-5ae3614c9baf",
    title: "МП-20 синий (1150х0.35мм)",
    description: "Профнастил МП-20, ширина 1.15м, толщина 0.35мм, синий цвет. Используется для заборов и облицовки. Цена зависит от длины.",
    image: "undefined/images/профнастил/mp3.webp",
    mainCategory: "Профнастил",
    subCategory: "МП-20",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "1.5м": 800,
      "1.7м": 900,
      "2м": 1000
    },
    urlId: "mp-20-siniy"
  },
  {
    id: "0c9398ac-ae31-4eb3-ae03-734fc6d69546",
    title: "МП-20 зелёный (1150х0.35мм)",
    description: "Профнастил МП-20, ширина 1.15м, толщина 0.35мм, зелёный цвет. Используется для заборов и облицовки. Цена зависит от длины.",
    image: "undefined/images/профнастил/mp4.webp",
    mainCategory: "Профнастил",
    subCategory: "МП-20",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "1.5м": 800,
      "1.7м": 900,
      "2м": 1000
    },
    urlId: "mp-20-zelenyy"
  },
  {
    id: "db4fc07d-fbb3-4ac7-9268-3d24984f5a6d",
    title: "МП-20 графит (1150х0.35мм)",
    description: "Профнастил МП-20, ширина 1.15м, толщина 0.35мм, цвет графит. Используется для заборов и облицовки. Цена зависит от длины.",
    image: "undefined/images/профнастил/mp5.webp",
    mainCategory: "Профнастил",
    subCategory: "МП-20",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "1.5м": 800,
      "1.7м": 900,
      "2м": 1000
    },
    urlId: "mp-20-grafit"
  },
  {
    id: "8a60cdf0-acfb-4129-abff-f58f365b4b53",
    title: "МП-20 оцинкованный (1150х0.35мм)",
    description: "Оцинкованный профнастил МП-20, ширина 1.15м, толщина 0.35мм. Устойчив к коррозии. Цена зависит от длины.",
    image: "undefined/images/профнастил/mp6.webp",
    mainCategory: "Профнастил",
    subCategory: "МП-20",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "1.5м": 650,
      "1.7м": 750,
      "2м": 850
    },
    urlId: "mp-20-otsinkovannyy"
  },
  {
    id: "960bab57-0df5-40b1-b16e-8b063279d332",
    title: "С-8 белый (2000х1150х0.35мм)",
    description: "Профнастил С-8, ширина 1.15м, толщина 0.35мм, белый цвет. Подходит для стен и облицовки. Длина — 2м. Не рекомендуется для кровли.",
    image: "undefined/images/профнастил/c1.webp",
    mainCategory: "Профнастил",
    subCategory: "С-8",
    "price": 1000,
    urlId: "s-8-belyy"
  },
  {
    id: "5ef82fef-dcf7-4939-87d3-6fb8c4c4209b",
    title: "С-8 слоновая кость (2000х1150х0.35мм)",
    description: "Профнастил С-8, ширина 1.15м, толщина 0.35мм, цвет слоновая кость. Подходит для стен и облицовки. Длина — 2м. Не рекомендуется для кровли.",
    image: "undefined/images/профнастил/c2.webp",
    mainCategory: "Профнастил",
    subCategory: "С-8",
    "price": 1000,
    urlId: "s-8-slonovaya-kost"
  },
  {
    id: "0b4692f3-87c6-4e6d-bcb9-937f069a439a",
    title: "С-8 коричневый (2000х1150х0.35мм)",
    description: "Профнастил С-8, ширина 1.15м, толщина 0.35мм, коричневый цвет. Подходит для стен и облицовки. Длина — 2м. Не рекомендуется для кровли.",
    image: "undefined/images/профнастил/c3.webp",
    mainCategory: "Профнастил",
    subCategory: "С-8",
    "price": 1000,
    urlId: "s-8-korichnevyy"
  },
  {
    id: "16349914-db15-4232-aa2c-f4f6a1851f07",
    title: "С-8 морёный дуб (2000х1150х0.35мм)",
    description: "Профнастил С-8, ширина 1.15м, толщина 0.35мм, цвет морёный дуб. Подходит для стен и облицовки. Длина — 2м. Не рекомендуется для кровли.",
    image: "undefined/images/профнастил/c4.webp",
    mainCategory: "Профнастил",
    subCategory: "С-8",
    "price": 1800,
    urlId: "s-8-morenyy-dub"
  },
  {
    id: "2922eccd-c601-4445-bc76-e50d6c106951",
    title: "С-8 камень (2000х1150х0.35мм)",
    description: "Профнастил С-8, ширина 1.15м, толщина 0.35мм, цвет камень. Подходит для стен и облицовки. Длина — 2м. Не рекомендуется для кровли.",
    image: "undefined/images/профнастил/c5.webp",
    mainCategory: "Профнастил",
    subCategory: "С-8",
    "price": 1800,
    urlId: "s-8-kamen"
  },
  {
    id: "a1e240da-0c94-41f3-a73b-14d44d287c79",
    title: "Волма Слой",
    description: "Гипсовая штукатурка для выравнивания стен и потолков внутри помещений. Расход: 8–9 кг на 1 м² при слое 10 мм. Рекомендованная толщина слоя — 5–30 мм, максимум — до 60 мм",
    image: "undefined/images/смеси/штук/слой.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Штукатурка",
    "price": 390,
    urlId: "volma-sloy"
  },
  {
    id: "fadc2923-7425-434a-81d7-97504ad8e395",
    title: "Волма Старт",
    description: "Выравнивающая гипсовая штукатурка для черновой отделки. Подходит для внутренних работ по стабильным основаниям.",
    image: "undefined/images/смеси/штук/старт.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Штукатурка",
    "price": 300,
    urlId: "volma-start"
  },
  {
    id: "c17c8703-3d23-44d5-a3be-fa164f5a0abc",
    title: "Волма Гипс-актив",
    description: "Быстросохнущая гипсовая штукатурка для выравнивания поверхностей. Используется для внутренней отделки стен и потолков.",
    image: "undefined/images/смеси/штук/актив.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Штукатурка",
    "price": 350,
    urlId: "volma-gips-aktiv"
  },
  {
    id: "99eb6525-fde1-44a9-95aa-2d0391a12fea",
    title: "Волма Гипс-актив Экстра",
    description: "Улучшенная формула штукатурки с высокой адгезией. Подходит для выравнивания минеральных оснований внутри помещений.",
    image: "undefined/images/смеси/штук/активэкстра.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Штукатурка",
    "price": 350,
    urlId: "volma-gips-aktiv-ekstra"
  },
  {
    id: "182d213f-e9a9-45cf-8d8f-1b1896f2e3d4",
    title: "Knauf MP 75",
    description: "Гипсовая штукатурка для машинного нанесения. Предназначена для высококачественного оштукатуривания стен и потолков внутри помещений с нормальной влажностью, включая кухни и ванные комнаты (при наличии защитного покрытия)",
    image: "undefined/images/смеси/штук/мп75.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Штукатурка",
    "price": 410,
    urlId: "knauf-mp-75"
  },
  {
    id: "ac6c5f81-a941-421f-a4e2-770b85ee1af1",
    title: "Литокс Start",
    description: "Гипсовая штукатурка для выравнивания стен и потолков внутри помещений. Обладает высокой пластичностью и удобна в нанесении.",
    image: "undefined/images/смеси/штук/литстарт.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Штукатурка",
    "price": 300,
    urlId: "litoks-start"
  },
  {
    id: "0b1d3479-75f7-4a7c-9b5b-17d0b7f61171",
    title: "Литокс AquaPlast",
    description: "Штукатурка с повышенной влагостойкостью. Подходит для помещений с повышенной влажностью.",
    image: "undefined/images/смеси/штук/литаквапласт.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Штукатурка",
    "price": 500,
    urlId: "litoks-aquaplast"
  },
  {
    id: "ee9d1b26-7799-4255-9b7e-375e29ec727e",
    title: "Волма Аквапласт",
    description: "Гипсовая штукатурка с добавками, повышающими водостойкость. Применяется в помещениях с нормальной влажностью.",
    image: "undefined/images/смеси/штук/аквапласт.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Штукатурка",
    "price": 400,
    urlId: "volma-akvaplast"
  },
  {
    id: "ecf7c417-8594-4f7c-befe-dc29aa7a53d6",
    title: "Литокс CemPlast",
    description: "Цементная штукатурка с пластификаторами. Используется для наружных и внутренних работ.",
    image: "undefined/images/смеси/штук/цемпласт.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Штукатурка",
    "price": 360,
    urlId: "litoks-cemplast"
  },
  {
    id: "5e39b9f7-02c7-4bf9-9e63-d47819e3ad7b",
    title: "Power Fasad",
    description: "Фасадная штукатурка на цементной основе. Устойчива к атмосферным воздействиям, морозу и влаге.",
    image: "undefined/images/смеси/штук/повер.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Штукатурка",
    "price": 300,
    urlId: "power-fasad"
  },
  {
    id: "31932c6f-66b8-4e3f-814c-6c13afa87c6b",
    title: "Волма Шов",
    description: "Сухая смесь на основе гипса для заделки швов и трещин в гипсокартонных конструкциях.",
    image: "undefined/images/смеси/шпат/шов.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Шпатлёвка",
    "price": 420,
    urlId: "volma-shov"
  },
  {
    id: "9d28ccf6-2b2f-4e43-809e-4a96299509fc",
    title: "Волма Финиш",
    description: "Мелкозернистая шпатлёвка для финишного выравнивания поверхностей перед покраской или оклейкой обоев.",
    image: "undefined/images/смеси/шпат/финиш.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Шпатлёвка",
    "price": 400,
    urlId: "volma-finish"
  },
  {
    id: "2acaf646-4beb-4be9-92f6-1e1ed695999b",
    title: "Литокс SatenLux",
    description: "Финишная акриловая шпатлёвка для внутренних работ. Обеспечивает гладкую поверхность перед покраской.",
    image: "undefined/images/смеси/шпат/сатен.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Шпатлёвка",
    "price": 500,
    urlId: "litoks-satenlux"
  },
  {
    id: "866eb8e4-3559-4429-9897-af3493ce5b3b",
    title: "Волма Аквастандарт",
    description: "Шпатлёвка с улучшенной водостойкостью для внутренних работ, в том числе в помещениях с повышенной влажностью.",
    image: "undefined/images/смеси/шпат/аквастандарт.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Шпатлёвка",
    "price": 400,
    urlId: "volma-akvastandart"
  },
  {
    id: "263bd2c4-ae98-4604-be89-1127b419a281",
    title: "Волма Аквастандарт Светлый",
    description: "Светлая шпатлёвка с высокой водостойкостью, подходит для влажных помещений и финишной отделки.",
    image: "undefined/images/смеси/шпат/аквастандартсветлый.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Шпатлёвка",
    "price": 550,
    urlId: "volma-akvastandart-svetlyy"
  },
  {
    id: "6bb42b44-10f6-4aaf-aff4-3e025e07df5e",
    title: "Шпатлёвка полимерная Vetonit LR+",
    description: "Универсальная финишная шпатлёвка на акриловой основе для внутренних работ. Образует гладкую поверхность перед покраской.",
    image: "undefined/images/смеси/шпат/ветонит.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Шпатлёвка",
    "price": 1050,
    urlId: "shpatlevka-polimernaya-vetonit-lr"
  },
  {
    id: "1ec5ecd5-1bd0-4838-a9b7-bfca28028dab",
    title: "Шпатлёвка полимерная Старатели КР",
    description: "Финишная шпатлёвка для выравнивания стен и потолков перед окончательной отделкой.",
    image: "undefined/images/смеси/шпат/старатели.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Шпатлёвка",
    "price": 650,
    urlId: "shpatlevka-polimernaya-starateli-kr"
  },
  {
    id: "512f47cd-20e7-4a05-a39b-26053f139830",
    title: "Декоративная штукатурка Литокс Короед",
    description: "Декоративная фасадная штукатурка с зерном 2.5 или 3.5 мм. Используется для создания текстуры «короед».",
    image: "undefined/images/смеси/короед.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Декоративная штукатурка",
    sizeText: "Выберите фракцию зерна:",
    pricesBySize: {
      "2.5мм": 600,
      "3.5мм": 600
    },
    urlId: "dekorativnaya-shtukaturka-litoks-koroed"
  },
  {
    id: "bcb6f7fe-19d0-4288-a416-54f5fa9bcf82",
    title: "Волма Нивелир 20кг",
    description: "Самовыравнивающаяся смесь для пола. Подходит для устройства стяжки с минимальными трудозатратами.",
    image: "undefined/images/смеси/пол/нивелир20.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Смеси для пола",
    "price": 300,
    urlId: "volma-nivelir-20kg"
  },
  {
    id: "e68146b0-fdb5-48cd-ad89-7ecc5c324e79",
    title: "Волма Нивелир Экспресс 25кг",
    description: "Быстротвердеющая смесь для выравнивания полов внутри помещений. Обладает высокой прочностью.",
    image: "undefined/images/смеси/пол/нивелир25.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Смеси для пола",
    "price": 430,
    urlId: "volma-nivelir-ekspress-25kg"
  },
  {
    id: "b7565384-dd27-43c9-98da-0060e0a76375",
    title: "Литокс Композит",
    description: "Сухая смесь для устройства прочного и устойчивого к нагрузкам наливного пола. Подходит для тёплого пола.",
    image: "undefined/images/смеси/пол/композит.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Смеси для пола",
    "price": 500,
    urlId: "litoks-kompozit"
  },
  {
    id: "daaeddf7-97a3-4b69-b964-225e8c615c86",
    title: "Литокс Floorex",
    description: "Наливной пол на основе цемента и полимеров. Подходит для быстрого выравнивания основания.",
    image: "undefined/images/смеси/пол/флорекс.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Смеси для пола",
    "price": 500,
    urlId: "litoks-floorex"
  },
  {
    id: "08e9089b-4663-4c9b-80e3-8a19b53d5928",
    title: "Наливной пол Старатели",
    description: "Самовыравнивающаяся смесь для пола, используется как основа под линолеум, ламинат, ковролин и другие покрытия.",
    image: "undefined/images/смеси/пол/старатели.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Смеси для пола",
    "price": 350,
    urlId: "nalivnoy-pol-starateli"
  },
  {
    id: "f86b1d76-f3aa-4da2-8364-5400be528ff1",
    title: "Power Nivelir",
    description: "Самовыравнивающаяся смесь для пола. Используется для устройства ровной основы под укладку напольных покрытий.",
    image: "undefined/images/смеси/пол/повер.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Смеси для пола",
    "price": 380,
    urlId: "power-nivelir"
  },
  {
    id: "e49456a2-0ba3-4dbd-bf21-bb0ebf2a56ed",
    title: "Пескобетон ProfMix М300",
    description: "Цементная смесь на основе песка и цемента, марка прочности М300. Применяется для стяжки пола, устройства оснований и монтажных работ.",
    image: "undefined/images/смеси/пол/м300.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Смеси для пола",
    "price": 200,
    urlId: "peskobeton-profmix-m300"
  },
  {
    id: "ad454070-f9ea-49c8-8df6-7d6e2cab826f",
    title: "Волма Керамик +",
    description: "Клеевая смесь для укладки керамической плитки. Обладает повышенной пластичностью и адгезией. Подходит для внутренних и наружных работ. Подходит для теплого пола.",
    image: "undefined/images/смеси/плитклей/т20.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Плиточный клей",
    "price": 400,
    urlId: "volma-keramik"
  },
  {
    id: "213e6d77-c9ea-465f-9848-bd0ab172afe3",
    title: "Волма Мультиклей",
    description: "Универсальный плиточный клей для укладки керамической плитки и мозаики на разные типы оснований. Подходит для теплого пола.",
    image: "undefined/images/смеси/плитклей/т34.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Плиточный клей",
    "price": 500,
    urlId: "volma-multikley"
  },
  {
    id: "5e0d91aa-c175-4693-acd0-d7ae97606cb5",
    title: "Ceresit СМ 11",
    description: "Стандартный плиточный клей для внутренних и наружных работ. Подходит для керамической плитки на бетоне и цементных стяжках",
    image: "undefined/images/смеси/плитклей/см11.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Плиточный клей",
    "price": 530,
    urlId: "ceresit-sm-11"
  },
  {
    id: "7f0ef014-85b9-439e-afdd-e88cc7ed02d1",
    title: "Ceresit СМ 14",
    description: "Улучшенный клей для плитки с увеличенным временем коррекции. Подходит для внутренних и наружных работ. ",
    image: "undefined/images/смеси/плитклей/см14.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Плиточный клей",
    "price": 800,
    urlId: "ceresit-sm-14"
  },
  {
    id: "ab3eb8ab-38e1-4ea4-aea5-3e1d0ed7a15b",
    title: "Ceresit СМ 16",
    description: "Высокопрочный клевой состав для укладки крупноформатной плитки и керамогранита. Подходит для внутренних и наружных работ.",
    image: "undefined/images/смеси/плитклей/см16.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Плиточный клей",
    "price": 1350,
    urlId: "ceresit-sm-16"
  },
  {
    id: "bccd737c-05fb-49f0-99b8-88d5386acb4b",
    title: "Ceresit СМ 17",
    description: "Плиточный клей для внутренних и наружных работ с двойным временем открытой пленки. Подходит для облицовки полов и стен в сложных условиях.",
    image: "undefined/images/смеси/плитклей/см17.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Плиточный клей",
    "price": 2000,
    urlId: "ceresit-sm-17"
  },
  {
    id: "66585e30-bead-4373-8c60-5cf7b414711f",
    title: "Мега Стандарт",
    description: "Универсальный плиточный клей для внутренних и наружных работ. Обладает хорошей адгезией к различным основаниям.",
    image: "undefined/images/смеси/плитклей/мега.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Плиточный клей",
    "price": 300,
    urlId: "mega-standart"
  },
  {
    id: "793ae7c6-106c-4380-ab77-86171f9c3bd1",
    title: "Мега Керамогранит",
    description: "Усиленный клей для укладки керамогранита и тяжелых видов плитки. Обеспечивает надежное сцепление с основанием.",
    image: "undefined/images/смеси/плитклей/керамогранит.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Плиточный клей",
    "price": 370,
    urlId: "mega-keramogranit"
  },
  {
    id: "3632348a-8b25-4960-bf4a-bddc18e3b8c5",
    title: "Хабез Стандарт",
    description: "Плиточный клей для внутренних и наружних работ по  облицовке стен и полов керамической, мозаичной плиткой малого и среднего размера. Подходит для теплого пола.",
    image: "undefined/images/смеси/плитклей/хабез.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Плиточный клей",
    "price": 300,
    urlId: "habez-standart"
  },
  {
    id: "3c58e3be-91c4-4310-b2a0-141199d4cdb3",
    title: "Power Ceramic",
    description: "Клеевая смесь для укладки керамической плитки и керамогранита внутри и снаружи помещений.",
    image: "undefined/images/смеси/плитклей/повер.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Плиточный клей",
    "price": 300,
    urlId: "power-ceramic"
  },
  {
    id: "59e328c9-5d86-4a0e-b955-12ec99cbc69b",
    title: "Литокс Бриз",
    description: "Штукатурно-клеевая смесь для укладки теплоизоляции и выравнивания стен. Подходит для минераловатных плит.",
    image: "undefined/images/смеси/штуккл/бриз.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Штукатурно-клеевая смесь",
    "price": 500,
    urlId: "litoks-briz"
  },
  {
    id: "2acb6bfe-86e5-43db-b27c-6ddc2a26f6b7",
    title: "Knauf Севенер",
    description: "Смесь для приклеивания теплоизоляции из минеральной ваты на стены и потолки. Используется внутри и снаружи зданий.",
    image: "undefined/images/смеси/штуккл/севенер.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Штукатурно-клеевая смесь",
    "price": 850,
    urlId: "knauf-sevener"
  },
  {
    id: "7787eaaa-7f79-496c-b91c-facdd7a56c8a",
    title: "Power Teplofix",
    description: "Клеевая смесь для монтажа утеплителя. Обеспечивает прочное сцепление с минеральными основаниями.",
    image: "undefined/images/смеси/штуккл/повер.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Штукатурно-клеевая смесь",
    "price": 500,
    urlId: "power-teplofix"
  },
  {
    id: "a42c6823-39ab-47dd-84ad-611cd7b47853",
    title: "Волма Монтаж",
    description: "Сухая смесь для приклеивания гипсокартона, пенополистирола, минераловатных плит и выравнивания поверхностей.",
    image: "undefined/images/смеси/монтаж/волма.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Монтажный клей",
    "price": 500,
    urlId: "volma-montazh"
  },
  {
    id: "5995863e-ca4d-43d7-a425-a1a6ad001761",
    title: "Хабез Мелисса",
    description: "Клеевая смесь для утепления фасадов и внутренних поверхностей. Обладает высокой адгезией к минеральным основаниям.",
    image: "undefined/images/смеси/монтаж/хабез.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Монтажный клей",
    "price": 450,
    urlId: "habez-melissa"
  },
  {
    id: "58228803-d051-4e8c-81f1-f69450725ea6",
    title: "Волма Блок",
    description: "Клеевая смесь для кладки газобетонных и пенобетонных блоков. Обеспечивает тонкий шов и высокую прочность.",
    image: "undefined/images/смеси/блок/волма.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Клей для блоков",
    "price": 380,
    urlId: "volma-blok"
  },
  {
    id: "efc62908-6672-4e97-96c4-f45e35e6206a",
    title: "Литокс Контакт",
    description: "Клей для кладки газобетона. Обеспечивает минимальную толщину шва и высокую адгезию.",
    image: "undefined/images/смеси/блок/литокс.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Клей для блоков",
    "price": 340,
    urlId: "litoks-kontakt"
  },
  {
    id: "cc3577ac-bc8f-41aa-84bf-68a64bac23f4",
    title: "Мега Блок Монтаж",
    description: "Клеевая смесь для кладки газобетонных и пенобетонных блоков. Обладает высокой прочностью и удобством нанесения.",
    image: "undefined/images/смеси/блок/мега.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Клей для блоков",
    "price": 300,
    urlId: "mega-blok-montazh"
  },
  {
    id: "79145a3c-d323-4d87-871b-8bb7e5f1cc81",
    title: "Profmix Профи-Блок",
    description: "Специализированный клей для кладки газобетонных блоков. Подходит для ручного и механизированного нанесения.",
    image: "undefined/images/смеси/блок/профмикс.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Клей для блоков",
    "price": 300,
    urlId: "profmix-profi-blok"
  },
  {
    id: "8397883b-db7d-4017-a27c-07d9c250e823",
    title: "Цемент Extra Cem 500+",
    description: "Цемент марки М500 с улучшенными прочностными характеристиками. Используется для приготовления строительных растворов и бетонов.",
    image: "undefined/images/смеси/цемент.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Цемент",
    "price": 480,
    urlId: "tsement-extra-cem-500"
  },
  {
    id: "e3aa8fed-5164-49d9-b620-41ebbca34e4c",
    title: "Затирка Ceresit CE33",
    description: "Цементная затирка для швов от 1 до 6 мм . Подходит для керамической плитки, камня, стекла и мозаики. Обладает противогрибковым эффектом , защищает от плесени и пятен. Применяется внутри и снаружи помещений , в том числе во влажных зонах.",
    image: "undefined/images/смеси/затирка/се33.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Затирка для плитки",
    sizeText: "Выберите цвет:",
    pricesBySize: {
      "Серый": 400,
      "Серебристо-серый": 450,
      "Графит": 450,
      "Антрацит": 450,
      "Светло-коричневый": 450,
      "Розовый": 450,
      "Роса": 400,
      "Натура": 400,
      "Манхеттен": 400,
      "Карамель": 400,
      "Жасмин": 400,
      "Белый": 400
    },
    urlId: "zatirka-ceresit-ce33"
  },
  {
    id: "d58f3563-ba23-47b7-8841-372574eefeee",
    title: "Затирка Ceresit CE40",
    description: "Эпоксидно-цементная затирка для швов шириной от 2 до 20 мм . Устойчива к химическим веществам, влаге и загрязнениям. Используется для плитки в бассейнах, ванных, на кухнях и в общественных зонах.",
    image: "undefined/images/смеси/затирка/се40.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Затирка для плитки",
    sizeText: "Выберите цвет:",
    pricesBySize: {
      "Серый": 600,
      "Серебристо-серый": 600,
      "Мрамор белый": 600,
      "Графит": 700,
      "Белый": 500,
      "Антрацит": 650
    },
    urlId: "zatirka-ceresit-ce40"
  },
  {
    id: "deaf26e8-76fc-4932-9540-04824d3df874",
    title: "Затирка Литокол",
    description: "Цементная затирка с противогрибковыми добавками. Подходит для швов шириной от 1 до 6 мм . Используется для керамики, мозаики и камня внутри и снаружи помещений.",
    image: "undefined/images/смеси/затирка/литокол.webp",
    mainCategory: "Сухие смеси",
    subCategory: "Затирка для плитки",
    sizeText: "Выберите цвет:",
    pricesBySize: {
      "Жасмин": 450,
      "Багамы": 450,
      "Песочный": 450
    },
    urlId: "zatirka-litokol"
  },
  {
    id: "e99b3772-8829-4fa4-a3a4-8d82c531d5d7",
    title: "ОСП пропитка 1 сторона (2440х1220мм)",
    description: "Ориентированно-стружечная плита с защитной пропиткой с одной стороны. Применяется для обшивки стен, перегородок, обрешетки и временных конструкций.",
    image: "undefined/images/плиты/осп.webp",
    mainCategory: "Древесные плиты",
    subCategory: "ОСП",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "9мм": 700,
      "12мм": 950,
      "15мм": 1200
    },
    urlId: "osp-propitka-1-storona"
  },
  {
    id: "00831b49-94d5-4494-bbdf-fe202f94a404",
    title: "ОСП пропитка 2 стороны (2440х1220мм)",
    description: "ОСП с защитной пропиткой с обеих сторон. Обладает повышенной влагостойкостью и прочностью. Используется в условиях повышенной влажности и для наружных работ.",
    image: "undefined/images/плиты/осп.webp",
    mainCategory: "Древесные плиты",
    subCategory: "ОСП",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "9мм": 750,
      "12мм": 1050
    },
    urlId: "osp-propitka-2-storony"
  },
  {
    id: "77150cb0-36fa-4f17-95f5-c5e864c0507c",
    title: "ДСП (2440х1830х16мм)",
    description: "Древесно-стружечная плита стандартного качества. Применяется для изготовления мебели, перегородок и временных конструкций.",
    image: "undefined/images/плиты/дсп.webp",
    mainCategory: "Древесные плиты",
    subCategory: "ДСП",
    "price": 1800,
    urlId: "dsp"
  },
  {
    id: "ed6c3518-c8a0-449e-8a6e-81a8d13b900c",
    title: "ДВП (2440х1220мм)",
    description: "Древесно-волокнистая плита. Используется для обшивки стен, полов, в качестве основы под напольные покрытия и в мебельной промышленности.",
    image: "undefined/images/плиты/двп.webp",
    mainCategory: "Древесные плиты",
    subCategory: "ДВП",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "3мм": 210,
      "5мм": 500
    },
    urlId: "dvp"
  },
  {
    id: "a295cb41-3cda-4d7a-b44a-0a2d001b951f",
    title: "Фанера (1520х1520мм)",
    description: "Фанера высокого качества, используется в строительстве, ремонте и мебельном производстве. Выдерживает высокие нагрузки и влажность (в зависимости от сорта и вида).",
    image: "undefined/images/плиты/фанера.webp",
    mainCategory: "Древесные плиты",
    subCategory: "Фанера",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "4мм": 600,
      "6мм": 800,
      "8мм": 950,
      "10мм": 1100,
      "12мм": 1300,
      "15мм": 1500
    },
    urlId: "fanera"
  },
  {
    id: "b292239a-94f0-43ef-95ec-b67eded4962f",
    title: "Вагонка класс AB",
    description: "Обшивочная доска из натурального дерева, отсортированная по качеству. Используется для внутренней отделки стен и потолков.",
    image: "undefined/images/брус/вагонка.webp",
    mainCategory: "Вагонка и бруски",
    subCategory: "Вагонка",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 140,
      "2.5м": 175,
      "2.7м": 190,
      "3м": 210
    },
    urlId: "vagonka-klass-ab"
  },
  {
    id: "3484ba46-a4d6-461a-98bf-795c2e9b3d58",
    title: "Деревянный брус (3000мм)",
    description: "Деревянный брус разных сечений. Используется в строительстве каркасов, обрешетки, мебели и временных конструкций.",
    image: "undefined/images/брус/бруски.webp",
    mainCategory: "Вагонка и бруски",
    subCategory: "Бруски",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "50х50мм": 220,
      "50х40мм": 200,
      "50х25мм": 140,
      "40х30мм (строганный)": 150,
      "40х20мм": 100
    },
    urlId: "derevyannyy-brus"
  },
  {
    id: "99314267-afdc-4ade-bd6f-57e4129faa31",
    title: "Гипсокартон (2500х1200мм)",
    description: "Гипсокартонный лист для сухих помещений. Применяется для выравнивания стен и потолков, устройства перегородок и ниш.",
    image: "undefined/images/гкл/гкл1.webp",
    mainCategory: "Гипсокартон",
    subCategory: "Для сухих помещений",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "9.5мм": 280,
      "12.5мм": 310
    },
    urlId: "gipsokarton"
  },
  {
    id: "e63ea8ac-b9c0-4654-8215-bdfd04b15802",
    title: "Гипсокартон Knauf (12.5х3000х1200мм)",
    description: "Гипсокартон от бренда Knauf для сухих помещений. Отличается высоким качеством и точными геометрическими размерами.",
    image: "undefined/images/гкл/кнауф.webp",
    mainCategory: "Гипсокартон",
    subCategory: "Для сухих помещений",
    "price": 500,
    urlId: "gipsokarton-knauf"
  },
  {
    id: "76ba5101-e388-400b-8c86-d448306ca110",
    title: "Гипсокартон влагостойкий (2500х1200мм)",
    description: "Гипсокартон с добавками, повышающими устойчивость к влаге. Используется в помещениях с повышенной влажностью (ванная, кухня).",
    image: "undefined/images/гкл/гкл2.webp",
    mainCategory: "Гипсокартон",
    subCategory: "Влагостойкий",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "9.5мм": 350,
      "12.5мм": 380
    },
    urlId: "gipsokarton-vlagostoykiy"
  },
  {
    id: "b007c0a0-3f90-41c4-9d44-65808cdda3c0",
    title: "Гипсокартон влагостойкий Vetonit (2000х1200мм)",
    description: "Влагостойкий гипсокартон для помещений с повышенной влажностью. Используется для выравнивания стен и потолков.",
    image: "undefined/images/гкл/ветон.webp",
    mainCategory: "Гипсокартон",
    subCategory: "Влагостойкий",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "12.5мм": 300,
      "15мм": 400
    },
    urlId: "gipsokarton-vlagostoykiy-vetonit"
  },
  {
    id: "a6b561ce-0e80-41d0-8a32-d745d1bd4c8e",
    title: "Профиль 60х27(х3000мм)",
    description: "Стеновой профиль для каркасов под гипсокартон. Подходит для возведения перегородок и обрешетки стен.",
    image: "undefined/images/профиля/6027.webp",
    mainCategory: "Профиля и направляющие",
    subCategory: "Стеновые",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "0.4мм": 160,
      "0.45мм": 180,
      "0.55мм": 230,
      "0.6мм knauf": 380
    },
    urlId: "profil-60h27"
  },
  {
    id: "d2b21401-c4af-4892-ad9d-7eaa8b7a1a3d",
    title: "Направляющий 27х28(х3000мм)",
    description: "Направляющий профиль для каркасов. Используется вместе со стоечным профилем при монтаже перегородок и подвесных потолков.",
    image: "undefined/images/профиля/2728.webp",
    mainCategory: "Профиля и направляющие",
    subCategory: "Стеновые",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "0.4мм": 120,
      "0.45мм": 130,
      "0.55мм": 160,
      "0.6мм": 250
    },
    urlId: "napravlyayuschiy-27h28"
  },
  {
    id: "a108d5eb-4a5c-4531-884a-07bd9fdb9851",
    title: "Профиль 50х50(х3000мм)",
    description: "Перегородочный профиль для усиленных каркасов. Применяется при возведении капитальных перегородок.",
    image: "undefined/images/профиля/5050.webp",
    mainCategory: "Профиля и направляющие",
    subCategory: "Перегородочные",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "0.55мм": 350,
      "0.6мм": 450
    },
    urlId: "profil-50h50"
  },
  {
    id: "94a4c58c-86af-4a50-90ab-ef83d87f0348",
    title: "Направляющий 50х40(х3000мм)",
    description: "Направляющий профиль для перегородок. Используется в паре с профилем 50х50 или 75х50.",
    image: "undefined/images/профиля/5040.webp",
    mainCategory: "Профиля и направляющие",
    subCategory: "Перегородочные",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "0.5мм": 220,
      "0.55мм": 300,
      "0.6мм": 400
    },
    urlId: "napravlyayuschiy-50h40"
  },
  {
    id: "0dca7556-3609-4231-b8a2-0d2f0287531c",
    title: "Профиль 75х50(х3000мм)",
    description: "Усиленный перегородочный профиль для высоких и широких перегородок. Обеспечивает дополнительную жесткость конструкции.",
    image: "undefined/images/профиля/7550.webp",
    mainCategory: "Профиля и направляющие",
    subCategory: "Перегородочные",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "0.55мм": 350
    },
    urlId: "profil-75h50"
  },
  {
    id: "61b1b071-c48d-4d51-8ee7-56ab3850cf57",
    title: "Направляющий 75х40(х3000мм)",
    description: "Направляющая для профиля 75х50. Обеспечивает надежную фиксацию каркаса.",
    image: "undefined/images/профиля/7540.webp",
    mainCategory: "Профиля и направляющие",
    subCategory: "Перегородочные",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "0.55мм": 300
    },
    urlId: "napravlyayuschiy-75h40"
  },
  {
    id: "55b667eb-2920-4f56-91ec-ab9ba74e133d",
    title: "Профиль 100х50(х3000мм)",
    description: "Усиленный профиль для широких перегородок и конструкций с повышенной нагрузкой.",
    image: "undefined/images/профиля/10050.webp",
    mainCategory: "Профиля и направляющие",
    subCategory: "Перегородочные",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "0.55мм": 400,
      "0.6мм": 450,
      "0.6мм knauf": 550
    },
    urlId: "profil-100h50"
  },
  {
    id: "89f4c604-fed1-4c56-951b-f1f30b6f6e08",
    title: "Направляющий 100х40(х3000мм)",
    description: "Направляющая для профиля 100х50. Используется при монтаже широких перегородок.",
    image: "undefined/images/профиля/10040.webp",
    mainCategory: "Профиля и направляющие",
    subCategory: "Перегородочные",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "0.55мм": 390,
      "0.6мм": 400,
      "0.6мм knauf": 500
    },
    urlId: "napravlyayuschiy-100h40"
  },
  {
    id: "46125595-c982-4304-9c7d-cf35d5ff256b",
    title: "Маячок 6(х3000мм)",
    description: "Металлический маячок длиной 3 м, высотой профиля 6 мм. Используется как направляющая при оштукатуривании стен и выравнивании поверхностей с перепадами до 5 мм и более.",
    image: "undefined/images/маяки/6.webp",
    mainCategory: "Маяки и перфорированные углы",
    subCategory: "Маяки",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "0.3мм": 50,
      "0.4мм": 60,
      "0.5мм": 80,
      "knauf": 100
    },
    urlId: "mayachok-6"
  },
  {
    id: "f2c07811-89d6-4d82-8549-f8300688be80",
    title: "Маячок 10(х3000мм)",
    description: "Металлический маячок длиной 3 м, высотой профиля 10 мм. Применяется при значительных перепадах поверхности (от 10 мм). Используется как опорная направляющая при штукатурных работах.",
    image: "undefined/images/маяки/10.webp",
    mainCategory: "Маяки и перфорированные углы",
    subCategory: "Маяки",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "0.3мм": 60,
      "0.4мм": 80,
      "0.5мм": 100,
      "knauf": 120
    },
    urlId: "mayachok-10"
  },
  {
    id: "c1587ce2-f7e8-4148-9161-4d5a5af4573b",
    title: "Угол перфорированный (20х20х3000мм)",
    description: "Металлический перфорированный уголок длиной 3 м, размером полок 20×20 мм. Используется для армирования углов при штукатурных работах, предотвращает растрескивание штукатурного слоя.",
    image: "undefined/images/маяки/2020.webp",
    mainCategory: "Маяки и перфорированные углы",
    subCategory: "Перфорированные углы",
    "price": 70,
    urlId: "ugol-perforirovannyy"
  },
  {
    id: "23b45a1b-7066-417e-ba3b-8922aa4411f1",
    title: "Угол перфорированный Knauf (25х25х3000мм)",
    description: "Перфорированный уголок длиной 3 м, размером полок 25×25 мм. Применяется для усиления наружных углов стен. Обеспечивает ровный угол и защиту от сколов при отделке.",
    image: "undefined/images/маяки/2525.webp",
    mainCategory: "Маяки и перфорированные углы",
    subCategory: "Перфорированные углы",
    "price": 120,
    urlId: "ugol-perforirovannyy-knauf"
  },
  {
    id: "733b4c76-2eb7-417e-8ad0-9bdf296aaf20",
    title: "Угол перфорированный пластиковый (20х20х3000мм)",
    description: "Пластиковый перфорированный уголок длиной 3 м, размером 20×20 мм. Используется для армирования и защиты углов при штукатурке и шпатлёвке. Легкий, не подвержен коррозии.",
    image: "undefined/images/маяки/пласт.webp",
    mainCategory: "Маяки и перфорированные углы",
    subCategory: "Перфорированные углы",
    "price": 60,
    urlId: "ugol-perforirovannyy-plastikovyy"
  },
  {
    id: "3dd90927-2b0d-4303-95e5-8e09ddd52989",
    title: "Маяк перфорированный пластиковый (6х3000мм)",
    description: "Пластиковый перфорированный маячок длиной 3 м, высотой 6 мм. Используется как направляющая при выравнивании стен, особенно в местах с небольшими перепадами. Легкий, не подвержен коррозии.",
    image: "undefined/images/маяки/маякпл.webp",
    mainCategory: "Маяки и перфорированные углы",
    subCategory: "Маяки",
    "price": 60,
    urlId: "mayak-perforirovannyy-plastikovyy"
  },
  {
    id: "b42e9be2-a74c-424d-986d-e49198dab32d",
    title: "Профтруба 15х15х1.5(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/1515.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 150,
      "3м": 225,
      "4м": 300,
      "6м": 450
    },
    urlId: "proftruba-15h15h1-5"
  },
  {
    id: "499e41a5-cc2e-4517-98c9-3d433169d2e2",
    title: "Профтруба 20х20х2(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/2020.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 200,
      "3м": 300,
      "4м": 400,
      "6м": 600
    },
    urlId: "proftruba-20h20h2"
  },
  {
    id: "80988798-be63-4a5e-9387-00b2a734b637",
    title: "Профтруба 25х25х2(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/2525.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 250,
      "3м": 375,
      "4м": 500,
      "6м": 750
    },
    urlId: "proftruba-25h25h2"
  },
  {
    id: "ac8aeddf-b90d-43ed-a928-0c6f05674103",
    title: "Профтруба 30х30х2(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/3030.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 300,
      "3м": 450,
      "4м": 600,
      "6м": 900
    },
    urlId: "proftruba-30h30h2"
  },
  {
    id: "36d721c1-493e-489d-bba5-9fcc2ac055ba",
    title: "Профтруба 40х20х1.5(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/4020.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 250,
      "3м": 375,
      "4м": 500,
      "6м": 750
    },
    urlId: "proftruba-40h20h1-5"
  },
  {
    id: "830e4a0f-b72a-4c5e-9b4c-b7ea45c0994b",
    title: "Профтруба 40х20х2(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/4020.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 280,
      "3м": 420,
      "4м": 640,
      "6м": 840
    },
    urlId: "proftruba-40h20h2"
  },
  {
    id: "cb14a10a-d120-4d6d-880f-2f48fd9962ce",
    title: "Профтруба 40х25х2(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/4025.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 300,
      "3м": 450,
      "4м": 600,
      "6м": 900
    },
    urlId: "proftruba-40h25h2"
  },
  {
    id: "2061f5bd-9e36-4ab3-8b79-0676d6015c44",
    title: "Профтруба 40х40х2(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/4040.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 380,
      "3м": 570,
      "4м": 760,
      "6м": 1140
    },
    urlId: "proftruba-40h40h2"
  },
  {
    id: "f1d99282-444e-4ebb-b498-1d3587ca034a",
    title: "Профтруба 50х25х2(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/5025.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 350,
      "3м": 525,
      "4м": 700,
      "6м": 1050
    },
    urlId: "proftruba-50h25h2"
  },
  {
    id: "c0a15ae3-c2b4-46ee-bc8d-fd70d5871fd2",
    title: "Профтруба 50х50х2(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/5050.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 450,
      "3м": 675,
      "4м": 900,
      "6м": 1350
    },
    urlId: "proftruba-50h50h2"
  },
  {
    id: "eef75d3d-d337-4f37-8f3f-02b0166cb3be",
    title: "Профтруба 60х30х2(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/6030.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 430,
      "3м": 645,
      "4м": 860,
      "6м": 1290
    },
    urlId: "proftruba-60h30h2"
  },
  {
    id: "bdde798a-402c-4f83-ab8b-7611bb74beab",
    title: "Профтруба 60х40х2(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/6040.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 450,
      "3м": 675,
      "4м": 900,
      "6м": 1350
    },
    urlId: "proftruba-60h40h2"
  },
  {
    id: "f957403b-5f01-451e-b121-723f44e09862",
    title: "Профтруба 60х40х3(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/6040.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 630,
      "3м": 945,
      "4м": 1260,
      "6м": 1890
    },
    urlId: "proftruba-60h40h3"
  },
  {
    id: "5070a0f6-b25e-494d-85fb-3b9caeafc9a9",
    title: "Профтруба 60х60х2(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/6060.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 530,
      "3м": 795,
      "4м": 1060,
      "6м": 1590
    },
    urlId: "proftruba-60h60h2"
  },
  {
    id: "f8ce8311-a984-4b15-a23a-c390c5cda768",
    title: "Профтруба 60х60х3(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/6060.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 780,
      "3м": 1170,
      "4м": 1560,
      "6м": 2340
    },
    urlId: "proftruba-60h60h3"
  },
  {
    id: "d289307f-c655-4323-abdc-e7b9ec36e698",
    title: "Профтруба 80х40х2(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/8040.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 610,
      "3м": 915,
      "4м": 1220,
      "6м": 1830
    },
    urlId: "proftruba-80h40h2"
  },
  {
    id: "2c2435ef-abd7-41dc-9f04-362b849adf06",
    title: "Профтруба 80х80х2(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/8080.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 730,
      "3м": 1095,
      "4м": 1460,
      "6м": 2190
    },
    urlId: "proftruba-80h80h2"
  },
  {
    id: "369af05b-8002-4ec0-8675-294364732285",
    title: "Профтруба 80х80х3(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/8080.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 930,
      "3м": 1395,
      "4м": 1860,
      "6м": 2790
    },
    urlId: "proftruba-80h80h3"
  },
  {
    id: "d72ddba3-b777-4d3f-aa01-473c6db5923d",
    title: "Профтруба 100х100х3(мм)",
    description: "Стальная профильная труба с прямоугольным или квадратным сечением. Используется для строительства каркасов, заборов, ограждений, мебели и других металлических конструкций. Длина — 6 м. Также возможен раскрой на меньшие размеры.",
    image: "undefined/images/профтрубы/100100.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Профтрубы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 1270,
      "3м": 1905,
      "4м": 2540,
      "6м": 3810
    },
    urlId: "proftruba-100h100h3"
  },
  {
    id: "42915945-bcab-4a39-834a-a949d3d0ec88",
    title: "Угол металлический 32х32(мм)",
    description: "Стальной уголок равнополочный или неравнополочный. Используется в строительстве, машиностроении и для усиления конструкций. Обеспечивает жесткость и устойчивость каркасов. Длина — 6 м.",
    image: "undefined/images/профтрубы/угол3232.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Металлические углы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 470,
      "3м": 705,
      "4м": 940,
      "6м": 1410
    },
    urlId: "ugol-metallicheskiy-32h32"
  },
  {
    id: "f7f29cd0-e05e-4a19-baeb-915f8d5f0aed",
    title: "Угол металлический 40х40(мм)",
    description: "Стальной уголок равнополочный или неравнополочный. Используется в строительстве, машиностроении и для усиления конструкций. Обеспечивает жесткость и устойчивость каркасов. Длина — 6 м.",
    image: "undefined/images/профтрубы/угол4040.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Металлические углы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 530,
      "3м": 795,
      "4м": 1060,
      "6м": 1590
    },
    urlId: "ugol-metallicheskiy-40h40"
  },
  {
    id: "44a02fae-4eea-4d98-9687-1799e46d14bf",
    title: "Угол металлический 50х40(мм)",
    description: "Стальной уголок равнополочный или неравнополочный. Используется в строительстве, машиностроении и для усиления конструкций. Обеспечивает жесткость и устойчивость каркасов. Длина — 6 м.",
    image: "undefined/images/профтрубы/угол5040.webp",
    mainCategory: "Профтрубы и металлические углы",
    subCategory: "Металлические углы",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "2м": 630,
      "3м": 945,
      "4м": 1260,
      "6м": 1890
    },
    urlId: "ugol-metallicheskiy-50h40"
  },
  {
    id: "dd107af8-3e70-4bfd-8767-70c82883fe65",
    title: "Стеклопластиковая арматура (бухта 50м)",
    description: "Композитная стеклопластиковая арматура — современная замена металлической. Обладает высокой прочностью на растяжение, в 2 раза превышающей стальную, при этом в 5–6 раз легче. Не подвержена коррозии, устойчива к химическим воздействиям. Применяется в частном и промышленном строительстве.",
    image: "undefined/images/арм/арм.webp",
    mainCategory: "Арматура и кладочная сетка",
    subCategory: "Стеклопластиковая арматура",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "6мм": 600,
      "8мм": 800,
      "10мм": 1200,
      "12мм": 1550
    },
    urlId: "stekloplastikovaya-armatura"
  },
  {
    id: "e06eff53-4178-4fa0-bc00-44139bc5cdca",
    title: "Кладочная сетка (2х1м)",
    description: "Кладочная сетка из металла используется для армирования кладки из газобетона, кирпича и других материалов. Повышает прочность конструкции и предотвращает растрескивание.",
    image: "undefined/images/арм/сетка.webp",
    mainCategory: "Арматура и кладочная сетка",
    subCategory: "Кладочная сетка",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "3мм": 150,
      "4мм": 250
    },
    urlId: "kladochnaya-setka"
  },
  {
    id: "6563b564-93ca-4e7d-a42b-fb6744afda23",
    title: "Пеноплэкс 50(х1185х585мм) (уп/7шт)",
    description: "Экструдированный пенополистирол для утепления фундаментов, полов, стен и кровель. Обладает низким водопоглощением и высокой прочностью. Упаковка — 7 листов.",
    image: "undefined/images/утепл/пенопл1.webp",
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    "price": 320,
    urlId: "penopleks-50"
  },
  {
    id: "4efcca1f-b557-4bb8-af06-c16d210966e4",
    title: "Пеноплэкс 30(х1185х585мм) (уп/13шт)",
    description: "Утеплитель из экструдированного пенополистирола толщиной 30 мм. Применяется для теплоизоляции стен, полов и перекрытий. Упаковка — 13 листов.",
    image: "undefined/images/утепл/пенопл2.webp",
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    "price": 220,
    urlId: "penopleks-30"
  },
  {
    id: "cc4a18d2-8b8a-4686-9d7e-ac14e8e9c7ed",
    title: "Пеноплэкс 20(х1185х585мм) (уп/20шт)",
    description: "Тонкий утеплитель из экструдированного пенополистирола. Используется для дополнительного утепления и выравнивания поверхностей. Упаковка — 20 листов.",
    image: "undefined/images/утепл/пенопл3.webp",
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    "price": 160,
    urlId: "penopleks-20"
  },
  {
    id: "4babf22a-85b2-473b-b3e3-523f93cbb679",
    title: "Техноплeкс 50(х1185х585мм) (уп/8шт)",
    description: "Экструзионный пенополистирол от бренда Техноплекс. Высокая прочность и низкая теплопроводность. Подходит для утепления фундаментов, полов и стен. Упаковка — 8 листов.",
    image: "undefined/images/утепл/технопл1.webp",
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    "price": 310,
    urlId: "tehnopleks-50"
  },
  {
    id: "21ba141f-60ed-44e7-b92a-5f76fd5d70a8",
    title: "Техноплeкс 30(х1185х585мм) (уп/13шт)",
    description: "Утеплитель Техноплекс толщиной 30 мм. Применяется в системах теплоизоляции жилых и коммерческих зданий. Упаковка — 13 листов.",
    image: "undefined/images/утепл/технопл2.webp",
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    "price": 210,
    urlId: "tehnopleks-30"
  },
  {
    id: "e05d2b26-742c-4b89-98bb-cd1e1d2cbc02",
    title: "Техноплeкс 20(х1185х585мм) (уп/20шт)",
    description: "Тонкий утеплитель Техноплекс для дополнительного слоя теплоизоляции. Используется в стенах, полах и кровлях. Упаковка — 20 листов.",
    image: "undefined/images/утепл/технопл3.webp",
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    "price": 150,
    urlId: "tehnopleks-20"
  },
  {
    id: "a8c81693-ebaa-4d06-94a4-8708b28b0831",
    title: "Профиплекс 50(х1185х585мм) (уп/8шт)",
    description: "Экструдированный пенополистирол Profiplex для утепления фундаментов, цоколей, полов. Обладает низким водопоглощением и высокой прочностью. Упаковка — 8 листов.",
    image: "undefined/images/утепл/профиплекс.webp",
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    "price": 310,
    urlId: "profipleks-50"
  },
  {
    id: "98ed2ec6-7592-47ec-9aea-514cad741547",
    title: "Профиплекс 30(х1185х585мм) (уп/13шт)",
    description: "Экструдированный пенополистирол Profiplex толщиной 30 мм. Подходит для теплоизоляции стен, полов, перекрытий. Упаковка — 13 листов.",
    image: "undefined/images/утепл/профиплекс.webp",
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    "price": 210,
    urlId: "profipleks-30"
  },
  {
    id: "a1b88438-35cd-4a28-8243-f521936a9ef6",
    title: "Профиплекс 20(х1185х585мм) (уп/20шт)",
    description: "Тонкий утеплитель Profiplex для дополнительного слоя теплоизоляции. Упаковка — 20 листов",
    image: "undefined/images/утепл/профиплекс.webp",
    mainCategory: "Утеплители",
    subCategory: "Пенополистирол",
    "price": 150,
    urlId: "profipleks-20"
  },
  {
    id: "55d8ac22-708a-4bb8-9a57-9ac8d47816aa",
    title: "Пенопласт (1200х1000мм)",
    description: "Пенопласт для утепления стен, перекрытий и мансард. Самозатухающийся, легкий, доступный, прост в монтаже.",
    image: "undefined/images/утепл/пенопласт.webp",
    mainCategory: "Утеплители",
    subCategory: "Пенопласт",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "3мм": 100,
      "4мм": 130,
      "5мм": 150,
      "10мм": 280
    },
    urlId: "penoplast"
  },
  {
    id: "10039b56-eef6-491e-bbc0-8cac6cc9678e",
    title: "Технониколь Роклайт (1200х600х50мм) (уп/8шт)",
    description: "Утеплитель из каменной ваты для утепления стен и перекрытий. Обладает хорошими тепло- и звукоизоляционными свойствами. Упаковка — 8 матов.",
    image: "undefined/images/утепл/роклайт.webp",
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    "price": 1000,
    urlId: "tehnonikol-roklayt"
  },
  {
    id: "13a6c3a8-62a9-42d1-aeee-feac5baab1d0",
    title: "Звукоизоляция АкустиКнауф (1230х610х50мм) (уп/16шт)",
    description: "Минераловатный утеплитель для звукоизоляции стен и перегородок. Обеспечивает комфортный акустический режим в помещениях. Упаковка — 16 плит.",
    image: "undefined/images/утепл/акустик.webp",
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    "price": 2800,
    urlId: "zvukoizolyatsiya-akustiknauf"
  },
  {
    id: "57baf5d7-f10f-4d74-a8f2-213b40abb66e",
    title: "Тисма (1200x8300х50мм) 2 мата (20м²)",
    description: "Минераловатный утеплитель Тисма для теплоизоляции стен, кровель и перекрытий. Обладает высокими теплоизоляционными свойствами. В рулоне 2 мата общей площадью 20 м²",
    image: "undefined/images/утепл/тисма.webp",
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    "price": 1700,
    urlId: "tisma-2-mata"
  },
  {
    id: "4820af36-6dfa-467e-aea4-9d5863d37958",
    title: "Isover СТРОНГ (610х1000х50мм уп/10шт) (6.1м²)",
    description: "Минераловатный утеплитель Isover СТРОНГ для теплоизоляции стен и перекрытий. Обладает высокой плотностью и теплоизоляционными свойствами. Упаковка — 10 плит на площадь 6.1 м².",
    image: "undefined/images/утепл/стронг.webp",
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    "price": 1200,
    urlId: "isover-strong"
  },
  {
    id: "e0612221-60e6-40e0-b63e-b57450c1187e",
    title: "Isover Теплый дом (610х1170х)100мм (уп/7шт) (5м²)",
    description: "Минераловатный утеплитель для утепления наружных стен и перекрытий. Обладает высокими теплоизоляционными свойствами. Толщина - 100мм. Упаковка — 7 плит на площадь 5 м².",
    image: "undefined/images/утепл/изовер.webp",
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    "price": 1500,
    urlId: "isover-teplyy-dom-100mm"
  },
  {
    id: "8f12eed2-7174-4def-a2db-f8ef8573a0a0",
    title: "Isover Теплый дом (610х1170х)50мм (уп/14шт) (10м²)",
    description: "Минераловатный утеплитель для теплоизоляции стен и перекрытий. Упаковка — 14 плит на площадь 10 м².",
    image: "undefined/images/утепл/изовер.webp",
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    "price": 1500,
    urlId: "isover-teplyy-dom-50mm"
  },
  {
    id: "c5575ab2-8d76-4a48-bf9e-7457a9bf939d",
    title: "Isover Теплый дом (8200х610х50мм) 2 мата (10м²)",
    description: "Минераловатный утеплитель для утепления стен и перекрытий. Поставляется в виде 2 больших матов на площадь 10 м²",
    image: "undefined/images/утепл/изовер10.webp",
    mainCategory: "Утеплители",
    subCategory: "Каменная и минеральная вата",
    "price": 1500,
    urlId: "isover-teplyy-dom-2-mata"
  },
  {
    id: "5eba61e9-fffe-483a-9431-5aa5537b7dde",
    title: "Фольгированный утеплитель (1200х25000мм)",
    description: "Отражающий утеплитель с фольгированным слоем. Используется для тепло-, паро- и гидроизоляции в банях, саунах, системах отопления и кровле.",
    image: "undefined/images/изол/фольга.webp",
    mainCategory: "Изоляция",
    subCategory: "Отражающая теплоизоляция",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "2мм": 750,
      "3мм": 900,
      "5мм": 1300,
      "10мм (1200х15000мм)": 1300
    },
    urlId: "folgirovannyy-uteplitel"
  },
  {
    id: "742aa4ef-5ab9-4655-9e7d-f408c8a06a1d",
    title: "Теплоотражающая пароизоляция (35м²)",
    description: "Фольгированный материал для тепло- и пароизоляции. Используется в системах утепления стен, полов, кровель и вентиляции.",
    image: "undefined/images/изол/ф.webp",
    mainCategory: "Изоляция",
    subCategory: "Отражающая теплоизоляция",
    "price": 2500,
    urlId: "teplootrazhayuschaya-paroizolyatsiya"
  },
  {
    id: "8ec4f17d-d316-4186-aa34-da52a9c919ec",
    title: "Мембрана B Пароизоляция",
    description: "Пароизоляционная пленка для защиты утеплителя и конструкций от проникновения водяного пара. Используется в стенах, перекрытиях и кровлях.",
    image: "undefined/images/изол/б.webp",
    mainCategory: "Изоляция",
    subCategory: "Пароизоляция",
    sizeText: "Площадь:",
    pricesBySize: {
      "30м²": 450,
      "70м²": 850
    },
    urlId: "membrana-b-paroizolyatsiya"
  },
  {
    id: "94f10130-e536-4409-87b6-dc5f5d988fa5",
    title: "Мембрана D Гидро-пароизоляция",
    description: "Паро- и гидроизоляционная пленка с повышенной плотностью. Защищает утеплитель от конденсата и атмосферной влаги.",
    image: "undefined/images/изол/д.webp",
    mainCategory: "Изоляция",
    subCategory: "Гидро-пароизоляция",
    sizeText: "Площадь:",
    pricesBySize: {
      "30м²": 700,
      "70м²": 1300
    },
    urlId: "membrana-d-gidro-paroizolyatsiya"
  },
  {
    id: "ec1d3c92-52bf-454d-973d-ea4468bfc92d",
    title: "Мембрана A (70м²) Ветро-влагозащита",
    description: "Ветрозащитная мембрана для защиты утеплителя от ветра и атмосферной влаги. Применяется в вентилируемых фасадах и кровлях.",
    image: "undefined/images/изол/а.webp",
    mainCategory: "Изоляция",
    subCategory: "Ветро-влагозащита",
    "price": 1200,
    urlId: "membrana-a-vetro-vlagozaschita"
  },
  {
    id: "a27862d4-87de-471f-81b2-23de72b334a8",
    title: "Тисма B (60м²) Пароизоляция",
    description: "Пароизоляционная пленка для защиты утеплителя от пара и конденсата. Используется в системах утепления стен, полов и перекрытий.",
    image: "undefined/images/изол/тисмаб.webp",
    mainCategory: "Изоляция",
    subCategory: "Пароизоляция",
    "price": 2000,
    urlId: "tisma-b-paroizolyatsiya"
  },
  {
    id: "6286455e-d967-4efd-bbee-dd33b482b707",
    title: "Тисма A (60м²) Ветро-влагозащита",
    description: "Ветро- и влагозащитная мембрана для защиты утеплителя от ветра и атмосферной влаги. Подходит для фасадов и кровель.",
    image: "undefined/images/изол/тисмаа.webp",
    mainCategory: "Изоляция",
    subCategory: "Ветро-влагозащита",
    "price": 3000,
    urlId: "tisma-a-vetro-vlagozaschita"
  },
  {
    id: "0a554ce2-607e-4f2d-86b2-f5adde97756c",
    title: "Fiberon B (60м²) Пароизоляция",
    description: "Пароизоляционная пленка для защиты утеплителя от пара и конденсата. Используется в стенах, перекрытиях и кровлях.",
    image: "undefined/images/изол/фб.webp",
    mainCategory: "Изоляция",
    subCategory: "Пароизоляция",
    "price": 1200,
    urlId: "fiberon-b-paroizolyatsiya"
  },
  {
    id: "92dffb87-f037-49d2-86d6-4367ead93e27",
    title: "Fiberon D (60м²) Гидро-пароизоляция",
    description: "Гидро- и пароизоляционная пленка для защиты утеплителя от влаги и пара. Подходит для наружных и внутренних работ.",
    image: "undefined/images/изол/фд.webp",
    mainCategory: "Изоляция",
    subCategory: "Гидро-пароизоляция",
    "price": 2000,
    urlId: "fiberon-d-gidro-paroizolyatsiya"
  },
  {
    id: "4397109f-4475-4b4c-9d2b-0225d29d55b9",
    title: "Fiberon A (60м²) Ветро-влагозащита",
    description: "Ветро- и влагозащитная мембрана для защиты утеплителя от ветра и атмосферной влаги.",
    image: "undefined/images/изол/фа.webp",
    mainCategory: "Изоляция",
    subCategory: "Ветро-влагозащита",
    "price": 2000,
    urlId: "fiberon-a-vetro-vlagozaschita"
  },
  {
    id: "cca46651-29f0-4f6a-bbdc-4676654585e5",
    title: "Изоспан B Пароизоляция",
    description: "Пароизоляционная пленка для защиты утеплителя от пара и конденсата. Применяется в системах утепления стен, полов и кровель.",
    image: "undefined/images/изол/изб.webp",
    mainCategory: "Изоляция",
    subCategory: "Пароизоляция",
    sizeText: "Площадь:",
    pricesBySize: {
      "35м²": 1400,
      "70м²": 2500
    },
    urlId: "izospan-b-paroizolyatsiya"
  },
  {
    id: "8b183597-0a0d-45ed-9675-1f0ace17606d",
    title: "Изоспан D Гидро-пароизоляция",
    description: "Гидро- и пароизоляционная пленка с высокой прочностью. Защищает утеплитель от влаги и пара.",
    image: "undefined/images/изол/изд.webp",
    mainCategory: "Изоляция",
    subCategory: "Гидро-пароизоляция",
    sizeText: "Площадь:",
    pricesBySize: {
      "35м²": 1700,
      "70м²": 3000
    },
    urlId: "izospan-d-gidro-paroizolyatsiya"
  },
  {
    id: "3c286a9e-7d89-4c77-aedb-63891bcc1225",
    title: "Изоспан AM Ветро-влагозащита (70м²)",
    description: "Трёхслойная ветро- и влагозащитная мембрана для защиты утеплителя от ветра и влаги. Подходит для кровель и фасадов.",
    image: "undefined/images/изол/изам.webp",
    mainCategory: "Изоляция",
    subCategory: "Ветро-влагозащита",
    "price": 5500,
    urlId: "izospan-am-vetro-vlagozaschita"
  },
  {
    id: "ef8c671a-7db1-4dac-8af9-07fc3118af44",
    title: "Изоспан FB Гидро-пароизоляция отражающая (35м²)",
    description: "Фольгированный материал с гидроизоляционными свойствами. Используется для утепления бань, саун, трубопроводов.",
    image: "undefined/images/изол/изфб.webp",
    mainCategory: "Изоляция",
    subCategory: "Гидро-пароизоляция",
    "price": 2800,
    urlId: "izospan-fb-gidro-paroizolyatsiya-otrazhayuschaya"
  },
  {
    id: "35392bdd-72bc-468f-ac4b-53b0af544a27",
    title: "Гидроизоляция Ceresit CR65",
    description: "Гидроизоляционная смесь на цементной основе для защиты бетонных и кирпичных конструкций от воды и влаги. Применяется в бассейнах, ванных, душевых, на балконах и террасах. Обладает высокой эластичностью и адгезией.",
    image: "undefined/images/гидроизол/ср65.webp",
    mainCategory: "Гидроизоляция",
    subCategory: "Сухая смесь",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "5кг": 500,
      "20кг": 1300
    },
    urlId: "gidroizolyatsiya-ceresit-cr65"
  },
  {
    id: "9a0a6936-7ba7-4a93-8afc-0b2025e1aa95",
    title: "Гидроизоляция Литокс",
    description: "Однокомпонентная эластичная гидроизоляция на полимерной основе. Используется для защиты бетонных, кирпичных и газобетонных поверхностей от влаги. Подходит для ванных комнат, бассейнов, фундаментов.",
    image: "undefined/images/гидроизол/литокс.webp",
    mainCategory: "Гидроизоляция",
    subCategory: "Жидкая гидроизоляция",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "5кг": 1800,
      "10кг": 3800
    },
    urlId: "gidroizolyatsiya-litoks"
  },
  {
    id: "943288b8-25c3-44b9-ac48-bf21035daeac",
    title: "Гидроизоляция Vetonit",
    description: "Жидкая гидроизоляция для защиты внутренних и наружных конструкций от влаги. Обладает высокой эластичностью и устойчивостью к перепадам температур. Применяется в ванных, на балконах, в системах тёплых полов.",
    image: "undefined/images/гидроизол/ветон.webp",
    mainCategory: "Гидроизоляция",
    subCategory: "Жидкая гидроизоляция",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "4кг": 2400,
      "8кг": 3500
    },
    urlId: "gidroizolyatsiya-vetonit"
  },
  {
    id: "73cf081a-0806-492f-81d2-636f1c171d30",
    title: "Гидроизоляция Ceresit CL51",
    description: "Эластичная гидроизоляционная мембрана на основе акрилатов. Образует водонепроницаемый слой на бетоне, цементных стяжках, гипсокартоне. Используется в душевых, ванных, на балконах и террасах.",
    image: "undefined/images/гидроизол/сл51.webp",
    mainCategory: "Гидроизоляция",
    subCategory: "Жидкая гидроизоляция",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "5кг": 2700,
      "15кг": 3500
    },
    urlId: "gidroizolyatsiya-ceresit-cl51"
  },
  {
    id: "8dc55da2-a080-48ce-ad2e-587e6df11362",
    title: "Лента гидроизоляционная Волма (10м²)",
    description: "Самоклеящаяся гидроизоляционная лента для герметизации стыков, швов и примыканий. Используется в сочетании с обмазочной гидроизоляцией для усиления защиты от протечек.",
    image: "undefined/images/гидроизол/волма.webp",
    mainCategory: "Гидроизоляция",
    subCategory: "Лента гидроизоляционная",
    "price": 1500,
    urlId: "lenta-gidroizolyatsionnaya-volma"
  },
  {
    id: "b6b16abb-03eb-4ffa-a0f3-899dfa506af4",
    title: "Рубероид РПП-300",
    description: "Рулонный битумный материал для гидроизоляции фундаментов, кровель, полов в подвалах. Обладает высокой водонепроницаемостью и прочностью.",
    image: "undefined/images/гидроизол/рубероид.webp",
    mainCategory: "Гидроизоляция",
    subCategory: "Битумные рулоны",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "10м": 400,
      "15м": 550
    },
    urlId: "ruberoid-rpp-300"
  },
  {
    id: "4564896d-9698-4343-9e8b-b5383da2e935",
    title: "Гидроизол ТКП (1000х10000мм)",
    description: "Гидроизоляционный материал на основе битума. Используется для защиты фундаментов, цоколей, кровель.",
    image: "undefined/images/гидроизол/ткп.webp",
    mainCategory: "Гидроизоляция",
    subCategory: "Битумные рулоны",
    sizeText: "Выберите тип:",
    pricesBySize: {
      "с присыпкой": 1500,
      "без присыпки": 1500
    },
    urlId: "gidroizol-tkp"
  },
  {
    id: "ab20799e-e8d5-4fd8-a55a-86a33348ee34",
    title: "Саморез по дереву",
    description: "Острые саморезы с резьбой для крепления гипсокартона к деревянным основаниям. Обеспечивают надежную фиксацию без предварительного сверления.",
    image: "undefined/images/крепеж/дер.webp",
    mainCategory: "Крепёж",
    subCategory: "Саморезы для гипсокартона",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "25мм": 250,
      "35мм": 250,
      "41мм": 250,
      "45мм": 250,
      "51мм": 250,
      "55мм": 250,
      "61мм": 250,
      "65мм": 250,
      "70мм": 250,
      "75мм": 250,
      "90мм": 250,
      "102мм": 250,
      "120мм": 250
    },
    "isWeight": true,
    "quantityStep": 0.1,
    "minQuantity": 0.1,
    urlId: "samorez-po-derevu"
  },
  {
    id: "2a847e22-143a-412e-9c4d-2f4fd174e8fa",
    title: "Саморез по металлу",
    description: "Саморезы с острым наконечником для крепления гипсокартона к металлическим профилям. Имеют шаг резьбы, адаптированный под тонкостенные профили.",
    image: "undefined/images/крепеж/мет.webp",
    mainCategory: "Крепёж",
    subCategory: "Саморезы для гипсокартона",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "25мм": 250,
      "32мм": 250,
      "41мм": 250
    },
    "isWeight": true,
    "quantityStep": 0.1,
    "minQuantity": 0.1,
    urlId: "samorez-po-metallu"
  },
  {
    id: "3756a745-79bd-4017-91aa-12a3a9a3b313",
    title: "Саморез прессшайба острый",
    description: "Саморезы с прессшайбой для крепления гипсокартона к металлическим профилям. Ускоряют монтаж, предотвращают перекосы листа и повреждение бумаги.",
    image: "undefined/images/крепеж/пр.webp",
    mainCategory: "Крепёж",
    subCategory: "Саморезы для гипсокартона",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "13мм": 300,
      "16мм": 300,
      "19мм": 300,
      "29мм": 300,
      "35мм": 300,
      "41мм": 300
    },
    "isWeight": true,
    "quantityStep": 0.1,
    "minQuantity": 0.1,
    urlId: "samorez-pressshayba-ostryy"
  },
  {
    id: "9f727b9f-4095-4f27-bd27-f6b57012f34d",
    title: "Саморез прессшайба со сверлом",
    description: "Саморезы с остриём в виде сверла для крепления гипсокартона без предварительного засверливания. Удобны при монтаже на металлический каркас.",
    image: "undefined/images/крепеж/прсв.webp",
    mainCategory: "Крепёж",
    subCategory: "Саморезы для гипсокартона",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "13мм": 300,
      "16мм": 300,
      "19мм": 300,
      "29мм": 300,
      "35мм": 300
    },
    "isWeight": true,
    "quantityStep": 0.1,
    "minQuantity": 0.1,
    urlId: "samorez-pressshayba-so-sverlom"
  },
  {
    id: "b1b6dbe2-6328-41f3-b51b-af70db40ca98",
    title: "Кровельный саморез оцинкованный",
    description: "Высокопрочные оцинкованные саморезы для крепления металлочерепицы, профнастила и других кровельных материалов к деревянной обрешетке.",
    image: "undefined/images/крепеж/кров/оцинк.webp",
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм": 2.5,
      "4.8х29мм": 2.5,
      "6.3х32мм": 4.5,
      "5.5х38мм": 3.5,
      "5.5х51мм": 4,
      "6.3х51мм": 4.5,
      "5.5х76мм": 5.5
    },
    urlId: "krovelnyy-samorez-otsinkovannyy"
  },
  {
    id: "0b80892d-1a0a-4f5c-a296-812939732184",
    title: "Кровельный саморез белый",
    description: "Цветные саморезы с полимерным покрытием для крепления кровельных материалов. Белый цвет позволяет вписать крепёж в светлую кровлю.",
    image: "undefined/images/крепеж/кров/бел.webp",
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм": 3.5,
      "4.8х29мм": 3.5,
      "4.8х35мм": 4,
      "4.8х51мм": 4.5,
      "5.5х76мм": 7
    },
    urlId: "krovelnyy-samorez-belyy"
  },
  {
    id: "0f9efb14-e1a5-4898-84db-a8faae665bc9",
    title: "Кровельный саморез графит",
    description: "Цветные саморезы с полимерным покрытием в цвет графита. Подходят для кровель тёмных оттенков.",
    image: "undefined/images/крепеж/кров/граф.webp",
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм": 3.5,
      "4.8х29мм": 3.5,
      "4.8х35мм": 4,
      "4.8х51мм": 4.5,
      "5.5х76мм": 7
    },
    urlId: "krovelnyy-samorez-grafit"
  },
  {
    id: "5e9061b9-2cfa-4748-bb60-2df7f93de92e",
    title: "Кровельный саморез зелёный",
    description: "Цветные саморезы для крепления профнастила и металлочерепицы. Зелёный цвет сочетается с кровлями в природных тонах.",
    image: "undefined/images/крепеж/кров/зел.webp",
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм": 3.5,
      "4.8х29мм": 3.5,
      "4.8х35мм": 4,
      "4.8х51мм": 4.5,
      "5.5х76мм": 7
    },
    urlId: "krovelnyy-samorez-zelenyy"
  },
  {
    id: "3e2b1cdf-2568-4bcc-b535-5bd5aed9fdc1",
    title: "Кровельный саморез коричневый",
    description: "Полимерные саморезы в тёплых тонах. Подходят для кровель в бежевых, кирпичных и земляных оттенках.",
    image: "undefined/images/крепеж/кров/корич.webp",
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм": 3.5,
      "4.8х29мм": 3.5,
      "4.8х35мм": 4,
      "4.8х51мм": 4.5,
      "5.5х76мм": 7
    },
    urlId: "krovelnyy-samorez-korichnevyy"
  },
  {
    id: "89b836c9-17ce-4819-af29-117b1f47c425",
    title: "Кровельный саморез красный",
    description: "Цветные саморезы для крепления кровельных материалов. Красный цвет подходит для кровель в кирпичных и терракотовых оттенках.",
    image: "undefined/images/крепеж/кров/крас.webp",
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм": 3.5,
      "4.8х29мм": 3.5,
      "4.8х35мм": 4,
      "4.8х51мм": 4.5,
      "5.5х76мм": 7
    },
    urlId: "krovelnyy-samorez-krasnyy"
  },
  {
    id: "e63994a4-83e6-4f5f-952d-51a84662f717",
    title: "Кровельный саморез синий",
    description: "Саморезы с синим полимерным покрытием. Используются в кровлях холодных оттенков или для декоративного контраста.",
    image: "undefined/images/крепеж/кров/син.webp",
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм": 3.5,
      "4.8х29мм": 3.5,
      "4.8х35мм": 4,
      "4.8х51мм": 4.5,
      "5.5х76мм": 7
    },
    urlId: "krovelnyy-samorez-siniy"
  },
  {
    id: "fcdcc9e3-7ca1-4a96-b5a8-6a0ee2861837",
    title: "Кровельный саморез слоновая кость",
    description: "Саморезы в светло-бежевом оттенке. Подходят для светлых и бежевых кровель, в том числе под натуральную черепицу.",
    image: "undefined/images/крепеж/кров/слон.webp",
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "5.5х19мм": 3.5,
      "4.8х29мм": 3.5,
      "4.8х35мм": 4,
      "4.8х51мм": 4.5,
      "5.5х76мм": 7
    },
    urlId: "krovelnyy-samorez-slonovaya-kost"
  },
  {
    id: "fffe921f-e821-4c0d-b64c-6501855ada5c",
    title: "Саморез прессшайба коричневый (19мм)",
    description: "Саморез с прессшайбой и полимерным покрытием в коричневом цвете. Подходит для кровельных работ, особенно на черепице и профнастиле в теплых тонах.",
    image: "undefined/images/крепеж/кров/краш1.webp",
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    "price": 2,
    urlId: "samorez-pressshayba-korichnevyy"
  },
  {
    id: "35aad071-36dd-4fa8-a160-514becfac7ba",
    title: "Саморез прессшайба белый (19мм)",
    description: "Саморез с прессшайбой в белом цвете. Используется для крепления кровельных материалов к деревянной обрешетке.",
    image: "undefined/images/крепеж/кров/краш2.webp",
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    "price": 2,
    urlId: "samorez-pressshayba-belyy"
  },
  {
    id: "e618e5b5-84a1-4510-8797-89f3e5b0c498",
    title: "Саморез прессшайба графит (19мм)",
    description: "Цветной саморез с прессшайбой в цвет графита. Подходит для тёмных и холодных оттенков кровельных материалов.",
    image: "undefined/images/крепеж/кров/краш3.webp",
    mainCategory: "Крепёж",
    subCategory: "Кровельные саморезы",
    "price": 2,
    urlId: "samorez-pressshayba-grafit"
  },
  {
    id: "961fb00f-bfee-42c3-984d-e23efbfd68b4",
    title: "Гвозди",
    description: "Стандартные стальные гвозди для общестроительных работ. Применяются в деревянном домостроении, монтаже опалубки, обрешетки и других задачах.",
    image: "undefined/images/крепеж/гвозди/гвозди.webp",
    mainCategory: "Крепёж",
    subCategory: "Гвозди",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "20мм": 200,
      "40мм": 200,
      "50мм": 200,
      "60мм": 200,
      "70мм": 200,
      "80мм": 200,
      "90мм": 200,
      "100мм": 200,
      "110мм": 200,
      "120мм": 200,
      "150мм": 200
    },
    "isWeight": true,
    "quantityStep": 0.1,
    "minQuantity": 0.1,
    urlId: "gvozdi"
  },
  {
    id: "e6db57a7-7979-44da-acf2-84328fc7444a",
    title: "Гвозди толевые",
    description: "Гвозди с крупной шляпкой для крепления толя, рубероида и других рулонных гидроизоляционных материалов.",
    image: "undefined/images/крепеж/гвозди/тол.webp",
    mainCategory: "Крепёж",
    subCategory: "Гвозди",
    "price": 300,
    "isWeight": true,
    "quantityStep": 0.1,
    "minQuantity": 0.1,
    urlId: "gvozdi-tolevye"
  },
  {
    id: "c6365608-0101-4060-a902-3da1dfd7f1af",
    title: "Гвозди шиферные (120мм)",
    description: "Удлинённые гвозди с широкой шляпкой для крепления шифера к деревянной обрешетке. Обеспечивают надёжную фиксацию и защиту от вырывания.",
    image: "undefined/images/крепеж/гвозди/шиф.webp",
    mainCategory: "Крепёж",
    subCategory: "Гвозди",
    "price": 300,
    "isWeight": true,
    "quantityStep": 0.1,
    "minQuantity": 0.1,
    urlId: "gvozdi-shifernye"
  },
  {
    id: "c59cbda5-d913-4b32-ac31-a5ada61f4e91",
    title: "Гвозди финишные латунь",
    description: "Финишные гвозди из латуни с декоративной шляпкой. Используются в столярных работах, при отделке мебели и интерьера.",
    image: "undefined/images/крепеж/гвозди/латунь.webp",
    mainCategory: "Крепёж",
    subCategory: "Гвозди",
    "price": 800,
    "isWeight": true,
    "quantityStep": 0.1,
    "minQuantity": 0.1,
    urlId: "gvozdi-finishnye-latun"
  },
  {
    id: "07f29402-6dd9-48ad-a19d-71f968f6ded0",
    title: "Гвозди финишные оцинкованные",
    description: "Финишные гвозди с оцинкованным покрытием для крепления деревянных изделий. Устойчивы к коррозии и подходят для помещений с повышенной влажностью.",
    image: "undefined/images/крепеж/гвозди/оцинк.webp",
    mainCategory: "Крепёж",
    subCategory: "Гвозди",
    "price": 400,
    "isWeight": true,
    "quantityStep": 0.1,
    "minQuantity": 0.1,
    urlId: "gvozdi-finishnye-otsinkovannye"
  },
  {
    id: "f23fa979-6ba9-4c69-bff4-50d7fec5b8d2",
    title: "Анкерный болт",
    description: "Распорный анкерный болт для крепления тяжелых конструкций к бетону, кирпичу и камню. Используется для монтажа перил, навесов, кронштейнов и т. д.",
    image: "undefined/images/крепеж/болты/анкер.webp",
    mainCategory: "Крепёж",
    subCategory: "Болты, гайки",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "8х40мм": 10,
      "8х65мм": 13,
      "8х100мм": 15,
      "8х120мм": 20,
      "10х77мм": 20,
      "10х97мм": 20,
      "10х130мм": 25,
      "12х99мм": 30,
      "12х129мм": 30,
      "12х150мм": 40,
      "12х250мм": 50,
      "12х300мм": 60
    },
    urlId: "ankernyy-bolt"
  },
  {
    id: "e11df1ac-0e90-47f5-9426-ba3c975c4bda",
    title: "Болт",
    description: "Стандартный болт с шестигранной головкой для соединения металлических и деревянных конструкций. Используется в строительстве, ремонте и монтаже.",
    image: "undefined/images/крепеж/болты/болт.webp",
    mainCategory: "Крепёж",
    subCategory: "Болты, гайки",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "6х20мм": 5,
      "6х50мм": 7,
      "8х30мм": 8,
      "10х30мм": 10,
      "10х50мм": 12,
      "10х80мм": 15,
      "12х40мм": 10,
      "12х60мм": 15,
      "12х100мм": 20
    },
    urlId: "bolt"
  },
  {
    id: "064bcdda-5254-4ff6-83e3-be4fad5bfabf",
    title: "Гайка",
    description: "Шестигранные гайки для соединения с болтами и шпильками. Используются в различных строительных и монтажных работах.",
    image: "undefined/images/крепеж/болты/гайки.webp",
    mainCategory: "Крепёж",
    subCategory: "Болты, гайки",
    sizeText: "Выберите диаметр:",
    pricesBySize: {
      "6мм": 2,
      "8мм": 4,
      "10мм": 6,
      "12мм": 8
    },
    urlId: "gayka"
  },
  {
    id: "ac3bbae2-88ac-46a9-bab7-dd3aee076aed",
    title: "Уголок крепёжный",
    description: "Стальной уголок для усиления соединений в каркасных конструкциях. Используется при монтаже гипсокартона, обрешетки, перегородок и других строительных работах.",
    image: "undefined/images/крепеж/уголки.webp",
    mainCategory: "Крепёж",
    subCategory: "Крепёжные уголки и подвесы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "20х40х40мм": 6,
      "30х30х30мм": 8,
      "40х40х30мм": 10,
      "40х40х40мм": 15,
      "40х50х50мм": 18,
      "40х80х80мм": 20,
      "50х40х40мм": 20,
      "50х80х80мм": 30,
      "60х60х60мм": 25
    },
    urlId: "ugolok-krepezhnyy"
  },
  {
    id: "97fc9a63-b04f-4440-ad0c-7c73b2d4048f",
    title: "Уголок крепёжный усиленный",
    description: "Усиленный стальной уголок для ответственных соединений и конструкций. Обеспечивает повышенную жёсткость каркасов при монтаже перегородок и подвесных потолков.",
    image: "undefined/images/крепеж/усил.webp",
    mainCategory: "Крепёж",
    subCategory: "Крепёжные уголки и подвесы",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "50х50х35мм": 15,
      "70х70х40мм": 25,
      "70х70х55мм": 30,
      "90х90х40мм": 35,
      "90х90х65мм": 40
    },
    urlId: "ugolok-krepezhnyy-usilennyy"
  },
  {
    id: "c6194fec-e414-4481-91a5-f600f3c976be",
    title: "Подвес прямой для гипсокартона",
    description: "Прямой подвес для крепления стоечных профилей при монтаже перегородок и потолков. Упрощает выравнивание каркаса и обеспечивает прочное крепление.",
    image: "undefined/images/крепеж/подвес.webp",
    mainCategory: "Крепёж",
    subCategory: "Крепёжные уголки и подвесы",
    sizeText: "Выберите толщину:",
    pricesBySize: {
      "0.7мм": 10,
      "0.9мм": 15,
      "1мм knauf": 20
    },
    urlId: "podves-pryamoy-dlya-gipsokartona"
  },
  {
    id: "d526289b-7a78-48a3-b279-3b4a684c437b",
    title: "Дюбель морковка",
    description: "Распорный дюбель для крепления в бетоне, кирпиче и пустотелых материалах. Используется с саморезами и шурупами.",
    image: "undefined/images/крепеж/дюб/морковка.webp",
    mainCategory: "Крепёж",
    subCategory: "Дюбеля",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "6х42мм": 1,
      "6х52мм": 1
    },
    urlId: "dyubel-morkovka"
  },
  {
    id: "3acf4856-cbd0-47d7-bed0-1dd0039a6ea7",
    title: "Дюбель гвоздь",
    description: "Комбинированный крепёж: дюбель + гвоздь. Применяется для фиксации теплоизоляции, пенополистирола, профилей и других материалов.",
    image: "undefined/images/крепеж/дюб/дюбель.webp",
    mainCategory: "Крепёж",
    subCategory: "Дюбеля",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "6х40мм": 2,
      "6х60мм": 2.5,
      "6х80мм": 3.5,
      "8х60мм": 4,
      "8х120мм": 6
    },
    urlId: "dyubel-gvozd"
  },
  {
    id: "ce666c65-caf4-42c7-bd3f-fc9be649a814",
    title: "Дюбель ввёртыш (15х38мм)",
    description: "Самонарезающий дюбель для крепления в пустотелые и пористые материалы (газобетон, пеноблок, пустотелый кирпич).",
    image: "undefined/images/крепеж/дюб/ввертыш.webp",
    mainCategory: "Крепёж",
    subCategory: "Дюбеля",
    "price": 2,
    urlId: "dyubel-vvertysh"
  },
  {
    id: "d82975dc-cdab-441b-8ef6-7ab91bbcf202",
    title: "Дюбель бабочка",
    description: "Дюбель-бабочка для крепления в пустотелые материалы. Раскрывается внутри стены при закручивании шурупа.",
    image: "undefined/images/крепеж/дюб/бабочка.webp",
    mainCategory: "Крепёж",
    subCategory: "Дюбеля",
    "price": 3,
    urlId: "dyubel-babochka"
  },
  {
    id: "b9d49888-d742-455b-a847-bc53fa3b8157",
    title: "Удлинитель профилей (60х27мм)",
    description: "Соединительный элемент для наращивания профилей при монтаже каркасов. Обеспечивает прочное и ровное соединение.",
    image: "undefined/images/крепеж/проф/удл.webp",
    mainCategory: "Крепёж",
    subCategory: "Удлинитель профилей и крабы",
    "price": 25,
    urlId: "udlinitel-profiley"
  },
  {
    id: "1149d2af-be3c-41be-8061-0aea0a59aa60",
    title: "Соединитель профилей Knauf (Краб)",
    description: "Крестовой соединитель (краб) для стоечных и направляющих профилей. Используется при монтаже каркасов для гипсокартона.",
    image: "undefined/images/крепеж/проф/крабы.webp",
    mainCategory: "Крепёж",
    subCategory: "Удлинитель профилей и крабы",
    "price": 70,
    urlId: "soedinitel-profiley-knauf"
  },
  {
    id: "441b0ed0-4223-4955-8198-e982ed9bc351",
    title: "Грунтовка Arco Iris глубокого проникновения",
    description: "Грунтовка глубокого проникновения для подготовки оснований под отделку. Укрепляет поверхность, уменьшает пылеобразование, повышает адгезию штукатурки и шпатлёвки.",
    image: "undefined/images/отделка/грунт/арко.webp",
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "10л": 500,
      "5л": 300,
      "3л": 200
    },
    urlId: "gruntovka-arco-iris-glubokogo-proniknoveniya"
  },
  {
    id: "e5c6ce58-e3e2-430a-ac0a-f0e2849e55c6",
    title: "Грунтовка Ceresit CT17",
    description: "Универсальная грунтовка для внутренних работ. Подходит для бетона, гипсокартона, штукатурки. Уменьшает впитывающую способность основания.",
    image: "undefined/images/отделка/грунт/ст17.webp",
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    "price": 1200,
    urlId: "gruntovka-ceresit-ct17"
  },
  {
    id: "16559641-7678-495f-bd9f-9ccce98cfa9b",
    title: "Грунтовка Оптимист",
    description: "Грунт для подготовки основания перед штукатурными и шпатлёвочными работами. Улучшает сцепление материалов с поверхностью.",
    image: "undefined/images/отделка/грунт/оптимист1.webp",
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "10л": 850,
      "5л": 500
    },
    urlId: "gruntovka-optimist"
  },
  {
    id: "756d3ee2-d6bb-48c6-8cff-4ae16aeeee9d",
    title: "Грунтовка Оптимист глубокого проникновения",
    description: "Грунтовка с глубоким проникновением для укрепления пористых оснований. Уменьшает пыление, повышает адгезию.",
    image: "undefined/images/отделка/грунт/оптимист2.webp",
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    "price": 1100,
    urlId: "gruntovka-optimist-glubokogo-proniknoveniya"
  },
  {
    id: "ca9d9df0-9229-49af-8564-50ddca696946",
    title: "Грунтовка Vetonit глубокого проникновения",
    description: "Грунт для укрепления основания и повышения адгезии. Подходит для бетона, кирпича, газобетона.",
    image: "undefined/images/отделка/грунт/ветонит.webp",
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    "price": 1200,
    urlId: "gruntovka-vetonit-glubokogo-proniknoveniya"
  },
  {
    id: "1cc848e5-ac2f-4c0b-ac3d-0dae93c55810",
    title: "Грунтовка Knauf Тифенгрунд",
    description: "Готовая к применению грунтовка на акриловой основе для подготовки оснований перед отделкой. Используется для выравнивания впитывающей способности поверхностей (бетон, штукатурка, гипсокартон и др.), повышает адгезию к штукатуркам, шпатлёвкам и клеевым смесям. Не требует разведения.",
    image: "undefined/images/отделка/грунт/тифен.webp",
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    "price": 1350,
    urlId: "gruntovka-knauf-tifengrund"
  },
  {
    id: "8e56fd3c-c8d8-4e3d-a5d2-7c8e0086f173",
    title: "Грунтовка Лакра интерьерная",
    description: "Грунт для подготовки внутренних поверхностей перед покраской, оклейкой обоев или нанесением штукатурки.",
    image: "undefined/images/отделка/грунт/лакра.webp",
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    "price": 750,
    urlId: "gruntovka-lakra-interernaya"
  },
  {
    id: "24f96940-d237-41b4-bf2e-1ceff5f15c49",
    title: "Грунт-концентрат Лакра PROFIT",
    description: "Концентрированная грунтовка для внутренних и наружных работ. Экономичный расход, высокая степень укрепления основания.",
    image: "undefined/images/отделка/грунт/профит.webp",
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    "price": 1000,
    urlId: "grunt-kontsentrat-lakra-profit"
  },
  {
    id: "63bb85a9-7351-40e9-86f5-2d520eca74fc",
    title: "Грунт-концентрат Arco Iris 1:10",
    description: "Концентрат грунтовки, разводится водой (1:10). Подходит для обработки пористых и впитывающих оснований.",
    image: "undefined/images/отделка/грунт/конц.webp",
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "10л": 1800,
      "5л": 1000,
      "3л": 650,
      "1л": 300
    },
    urlId: "grunt-kontsentrat-arco-iris-1-10"
  },
  {
    id: "302185b8-a2a3-4eae-8d26-c4e253dda35e",
    title: "Грунт-концентрат Knauf Миттельгрунд",
    description: "Грунт для подготовки основания средней впитываемости (бетон, штукатурка, гипсокартон). Разводится водой в соотношении 1:3–1:5.",
    image: "undefined/images/отделка/грунт/миттель.webp",
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    "price": 3300,
    urlId: "grunt-kontsentrat-knauf-mittelgrund"
  },
  {
    id: "a23e49be-c7b6-4898-b8fd-66787a54736b",
    title: "Грунтовка под декоративные штукатурки Ceresit CT16",
    description: "Специализированная грунтовка для подготовки основания перед нанесением декоративных штукатурок. Повышает адгезию и уменьшает впитываемость.",
    image: "undefined/images/отделка/грунт/ст16.webp",
    mainCategory: "Отделка",
    subCategory: "Грунтовка",
    "price": 2500,
    urlId: "gruntovka-pod-dekorativnye-shtukaturki-ceresit-ct16"
  },
  {
    id: "99ca149d-d910-4813-bb9f-94c417ba89c2",
    title: "Бетоноконтакт Ceresit CT19 15кг",
    description: "Грунт с кварцевым наполнителем для высокой адгезии к гладким основаниям: бетону, цементным стяжкам, плитке.",
    image: "undefined/images/отделка/грунт/ст19.webp",
    mainCategory: "Отделка",
    subCategory: "Бетоноконтакт",
    "price": 2100,
    urlId: "betonokontakt-ceresit-ct19-15kg"
  },
  {
    id: "0971597c-7b51-4b12-bf67-16196e9ff75f",
    title: "Бетоноконтакт Хабез 12кг",
    description: "Усиленная грунтовка с кварцевым песком для улучшения сцепления с гладкими основаниями. Применяется внутри и снаружи помещений.",
    image: "undefined/images/отделка/грунт/хабез.webp",
    mainCategory: "Отделка",
    subCategory: "Бетоноконтакт",
    "price": 1000,
    urlId: "betonokontakt-habez-12kg"
  },
  {
    id: "9b1f5ea0-1e9a-49fc-b39c-f61df0a6638c",
    title: "Бетоноконтакт Arco Iris",
    description: "Акриловый грунт с кварцевым наполнителем для повышения адгезии к трудноудерживаемым основаниям.",
    image: "undefined/images/отделка/грунт/бконтакт.webp",
    mainCategory: "Отделка",
    subCategory: "Бетоноконтакт",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "12кг": 1200,
      "6кг": 650,
      "3кг": 400,
      "1.5кг": 200
    },
    urlId: "betonokontakt-arco-iris"
  },
  {
    id: "502fdb8b-dcec-4be7-a9a6-5cd3252f2759",
    title: "Краска Arco Iris для стен и потолков",
    description: "Водоэмульсионная краска для внутренних работ. Подходит для окрашивания штукатурки, бетона, гипсокартона. Обладает хорошей укрывистостью и легко наносится.",
    image: "undefined/images/краски/стен.webp",
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Водоэмульсионные краски",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "14кг": 1300,
      "7кг": 700,
      "3кг": 350,
      "1.5кг": 230
    },
    urlId: "kraska-arco-iris-dlya-sten-i-potolkov"
  },
  {
    id: "45f0b219-bba2-4d39-b8a9-11997f022461",
    title: "Краска Arco Iris моющаяся",
    description: "Моющаяся водоэмульсионная краска для стен и потолков. Устойчива к влажной уборке, подходит для кухонь, ванных и детских комнат.",
    image: "undefined/images/краски/моющ.webp",
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Водоэмульсионные краски",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "14кг": 1500,
      "7кг": 800,
      "3кг": 450,
      "1.5кг": 260
    },
    urlId: "kraska-arco-iris-moyuschayasya"
  },
  {
    id: "903162b3-c176-40c1-ada3-9d3bade1a585",
    title: "Краска Arco Iris фасадная",
    description: "Водоэмульсионная фасадная краска. Устойчива к перепадам температур, УФ-излучению и атмосферным осадкам. Подходит для наружных и внутренних работ.",
    image: "undefined/images/краски/фасад.webp",
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Водоэмульсионные краски",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "14кг": 1600,
      "7кг": 900,
      "3кг": 450,
      "1.5кг": 300
    },
    urlId: "kraska-arco-iris-fasadnaya"
  },
  {
    id: "b2c3862b-d4fe-4c94-a4bf-deae1740a329",
    title: "Краска Лакра для стен и потолков",
    description: "Белая водоэмульсионная краска для внутренних работ. Используется для окрашивания штукатурки, бетона, гипсокартона. Обладает хорошей укрывистостью.",
    image: "undefined/images/краски/лстен.webp",
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Водоэмульсионные краски",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "14кг": 1300,
      "6.5кг": 700,
      "3кг": 350,
      "1.5кг": 200
    },
    urlId: "kraska-lakra-dlya-sten-i-potolkov"
  },
  {
    id: "eb28fe79-56b4-495f-b259-75113451d754",
    title: "Краска Лакра моющаяся",
    description: "Моющаяся водоэмульсионная краска для стен и потолков. Устойчива к многократной влажной уборке. Подходит для кухонь, ванных, коридоров.",
    image: "undefined/images/краски/лмоющ.webp",
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Водоэмульсионные краски",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "14кг": 2500,
      "6.5кг": 1200,
      "3кг": 650
    },
    urlId: "kraska-lakra-moyuschayasya"
  },
  {
    id: "447c2e63-eb7b-492f-ac07-6457b2f846bd",
    title: "Краска Лакра фасадная",
    description: "Фасадная водоэмульсионная краска с высокой стойкостью к влаге и УФ-излучению. Используется для наружных и внутренних работ.",
    image: "undefined/images/краски/лфасад.webp",
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Водоэмульсионные краски",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "14кг": 2550,
      "6.5кг": 1250,
      "3кг": 650
    },
    urlId: "kraska-lakra-fasadnaya"
  },
  {
    id: "635dc004-ce9f-47ea-afe6-d41ab42b6c46",
    title: "Эмаль алкидная ПФ-115 (1.8кг)",
    description: "Универсальная алкидная эмаль для окрашивания металлических, деревянных и оштукатуренных поверхностей. Обладает высокой укрывистостью и долговечностью.",
    image: "undefined/images/краски/пф.webp",
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
      "Салатный": 400
    },
    urlId: "emal-alkidnaya-pf-115"
  },
  {
    id: "b6f99f46-45c9-42af-a509-0b18730fd509",
    title: "Эмаль алкидная ПФ-115 (0.8кг)",
    description: "Универсальная алкидная эмаль для окрашивания металлических, деревянных и оштукатуренных поверхностей. Обладает высокой укрывистостью и долговечностью.",
    image: "undefined/images/краски/пф.webp",
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Эмали",
    sizeText: "Выберите цвет:",
    pricesBySize: {
      "Чёрный": 200,
      "Белый": 200,
      "Серый": 200,
      "Графит": 200,
      "Жёлтый": 200,
      "Синий": 200
    },
    urlId: "emal-alkidnaya-pf-115"
  },
  {
    id: "cf7abf87-3c85-4888-ab46-a0bbf683e727",
    title: "Грунт-эмаль 3в1 (1.8кг)",
    description: "Грунт-эмаль с антикоррозионными свойствами. Подходит для подготовки и окрашивания металлических поверхностей перед покраской.",
    image: "undefined/images/краски/грунт.webp",
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Эмали",
    sizeText: "Выберите цвет:",
    pricesBySize: {
      "Чёрный": 500,
      "Белый": 500,
      "Серый": 500,
      "Графит": 500,
      "Шоколадный": 500
    },
    urlId: "grunt-emal-3v1"
  },
  {
    id: "a4a64012-af11-415b-9f34-43869e238a0f",
    title: "Грунт-эмаль 3в1 (0.8кг)",
    description: "Грунт-эмаль с антикоррозионными свойствами. Подходит для подготовки и окрашивания металлических поверхностей перед покраской.",
    image: "undefined/images/краски/грунт.webp",
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Эмали",
    sizeText: "Выберите цвет:",
    pricesBySize: {
      "Чёрный": 300,
      "Белый": 300,
      "Серый": 300,
      "Графит": 300,
      "Шоколадный": 300
    },
    urlId: "grunt-emal-3v1"
  },
  {
    id: "4a89e958-1a17-4cc7-9d76-c9528a7a0a5d",
    title: "Эмаль для радиаторов акриловая",
    description: "Термостойкая акриловая эмаль для окрашивания отопительных радиаторов. Выдерживает температуру до 80°C.",
    image: "undefined/images/краски/термо.webp",
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Эмали",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "0.9кг": 500,
      "1.9кг": 900
    },
    urlId: "emal-dlya-radiatorov-akrilovaya"
  },
  {
    id: "0cd3bc8b-f31c-426a-bcb4-81c45f58c694",
    title: "Эмаль для дверей и подоконников акриловая",
    description: "Акриловая эмаль для окрашивания деревянных окон, дверей, подоконников. Образует прочное и износостойкое покрытие.",
    image: "undefined/images/краски/окон.webp",
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Эмали",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "0.9кг": 500,
      "1.9кг": 900
    },
    urlId: "emal-dlya-dverey-i-podokonnikov-akrilovaya"
  },
  {
    id: "a229909d-d8a1-481f-820a-c5a74d2d07a9",
    title: "Яхтный лак бесцветный",
    description: "Защитный лак для деревянных поверхностей внутри и снаружи помещений. Обладает высокой водостойкостью и устойчивостью к УФ-излучению.",
    image: "undefined/images/краски/яхт.webp",
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Лаки и пропитки",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "0.9л": 400,
      "1.9л": 700
    },
    urlId: "yahtnyy-lak-bestsvetnyy"
  },
  {
    id: "69114423-67e3-41c0-a59b-9819043ae803",
    title: "Пропитка Profiwood (0.75л)",
    description: "Масляно-алкидная пропитка для защиты и декора древесины. Подчеркивает текстуру дерева, защищает от влаги и выцветания. Подходит для террас, заборов, мебели и других поверхностей.",
    image: "undefined/images/краски/профи075.webp",
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Лаки и пропитки",
    sizeText: "Выберите оттенок:",
    pricesBySize: {
      "Калужница": 400,
      "Красное дерево": 400,
      "Сосна": 400,
      "Палисандр": 400,
      "Тик": 400,
      "Орегон": 400
    },
    urlId: "propitka-profiwood"
  },
  {
    id: "e405ae44-d402-4fa1-a32a-c435d8e052c4",
    title: "Пропитка Profiwood (2.5л)",
    description: "Масляно-алкидная пропитка для защиты и декора древесины. Подчеркивает текстуру дерева, защищает от влаги и выцветания. Подходит для террас, заборов, мебели и других поверхностей.",
    image: "undefined/images/краски/профи25.webp",
    mainCategory: "Лакокрасочные материалы",
    subCategory: "Лаки и пропитки",
    sizeText: "Выберите оттенок:",
    pricesBySize: {
      "Калужница": 1100,
      "Красное дерево": 1100,
      "Сосна": 1100,
      "Палисандр": 1100,
      "Тик": 1100,
      "Орегон": 1100
    },
    urlId: "propitka-profiwood"
  },
  {
    id: "b8a83da4-1e26-4078-a3d6-4f61ef014209",
    title: "Шпатлёвка латексная Текс",
    description: "Готовая шпатлёвка на латексной основе для выравнивания поверхностей перед покраской или оклейкой обоев. Подходит для гипсокартона, штукатурки, бетона.",
    image: "undefined/images/отделка/шпатлевки/текс.webp",
    mainCategory: "Отделка",
    subCategory: "Готовые шпатлёвки",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "16кг": 1300,
      "8кг": 850,
      "5кг": 650,
      "1.5кг": 200
    },
    urlId: "shpatlevka-lateksnaya-teks"
  },
  {
    id: "2c3fa203-7e03-4400-af17-d60bf16a26eb",
    title: "Шпатлёвка универсальная SHEETROCK SuperFinish",
    description: "Готовая шпатлёвка для заделки швов, трещин и неровностей. Обладает высокой пластичностью и удобна в нанесении.",
    image: "undefined/images/отделка/шпатлевки/шитрок.webp",
    mainCategory: "Отделка",
    subCategory: "Готовые шпатлёвки",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "28кг": 3500,
      "18кг": 2300
    },
    urlId: "shpatlevka-universalnaya-sheetrock-superfinish"
  },
  {
    id: "21526f3d-79af-4862-8be3-93477daf92f7",
    title: "Шпатлёвка финишная Knauf Ротбанд паста (18кг)",
    description: "Финишная шпатлёвка на основе полимеров. Используется для тонкого выравнивания стен и потолков перед покраской или поклейкой обоев.",
    image: "undefined/images/отделка/шпатлевки/ротбанд.webp",
    mainCategory: "Отделка",
    subCategory: "Готовые шпатлёвки",
    "price": 2000,
    urlId: "shpatlevka-finishnaya-knauf-rotband-pasta"
  },
  {
    id: "f02d054d-908a-4ea0-afb4-94d9e33e0c09",
    title: "Шпатлёвка финишная Vetonit LR паста (18кг)",
    description: "Готовая акриловая шпатлёвка для внутренних работ. Обеспечивает гладкую поверхность перед покраской и оклейкой.",
    image: "undefined/images/отделка/шпатлевки/лрпаста.webp",
    mainCategory: "Отделка",
    subCategory: "Готовые шпатлёвки",
    "price": 1700,
    urlId: "shpatlevka-finishnaya-vetonit-lr-pasta"
  },
  {
    id: "1c6c684e-7e6d-41ac-a31b-8b80e60328bf",
    title: "Пена профессиональная 70л",
    description: "Высококачественная монтажная пена для профессионального использования. Обладает высокой адгезией, минимальной усадкой и увеличенным выходом.",
    image: "undefined/images/отделка/пена/проф70.webp",
    mainCategory: "Отделка",
    subCategory: "Монтажная пена и пена клей",
    pricesBySize: {
      "Arco Iris": 600,
      "Soudal": 600,
      "Tytan": 700,
      "Kudo": 600
    },
    urlId: "pena-professionalnaya-70l"
  },
  {
    id: "0a61ccd5-6092-4c5d-9f5f-b6b718500975",
    title: "Пена профессиональная 65л",
    description: "Профессиональная монтажная пена для плотных швов и высокой фиксации. Подходит для наружных и внутренних работ.",
    image: "undefined/images/отделка/пена/проф65.webp",
    mainCategory: "Отделка",
    subCategory: "Монтажная пена и пена клей",
    pricesBySize: {
      "Kron (универсальная)": 600,
      "Момент": 500,
      "Arco Iris": 500,
      "Kron": 500
    },
    urlId: "pena-professionalnaya-65l"
  },
  {
    id: "7d7b60af-1627-4acc-acae-f68f4f4b2aa2",
    title: "Пена бытовая",
    description: "Монтажная пена для бытового использования. Обеспечивает надёжное заполнение швов, хорошее сцепление с большинством поверхностей.",
    image: "undefined/images/отделка/пена/быт.webp",
    mainCategory: "Отделка",
    subCategory: "Монтажная пена и пена клей",
    pricesBySize: {
      "Kron 65л": 500,
      "Arco Iris 55л": 450
    },
    urlId: "pena-bytovaya"
  },
  {
    id: "66253c79-7281-42d5-a6a3-f5cbdb591310",
    title: "Пена клей Arco Iris",
    description: "Универсальная пена-клей для фиксации и герметизации. Используется вместо крепежа при монтаже панелей, утеплителя, оконных откосов.",
    image: "undefined/images/отделка/пена/пенакл.webp",
    mainCategory: "Отделка",
    subCategory: "Монтажная пена и пена клей",
    "price": 600,
    urlId: "pena-kley-arco-iris"
  },
  {
    id: "e80f4662-90a1-4822-8b9e-d2da5a58f5b2",
    title: "Пена огнеупорная Kolt",
    description: "Огнестойкая монтажная пена для заполнения и герметизации швов в противопожарных конструкциях.",
    image: "undefined/images/отделка/пена/огн.webp",
    mainCategory: "Отделка",
    subCategory: "Монтажная пена и пена клей",
    "price": 600,
    urlId: "pena-ogneupornaya-kolt"
  },
  {
    id: "ca72e287-73ab-497b-813f-e92dad7a9c87",
    title: "Пена цемент Rich",
    description: "Цементная пена для заполнения швов и пустот в условиях высокой влажности. Устойчива к воде и механическим нагрузкам.",
    image: "undefined/images/отделка/пена/цем.webp",
    mainCategory: "Отделка",
    subCategory: "Монтажная пена и пена клей",
    "price": 600,
    urlId: "pena-tsement-rich"
  },
  {
    id: "85a513fd-efe1-4fa2-9dec-3cd56adc4f37",
    title: "Очиститель для пены",
    description: "Средство для очистки пистолетов и удаления остатков монтажной пены до затвердевания.",
    image: "undefined/images/отделка/пена/очиститель.webp",
    mainCategory: "Отделка",
    subCategory: "Монтажная пена и пена клей",
    "price": 200,
    urlId: "ochistitel-dlya-peny"
  },
  {
    id: "eca6a31c-20dc-44e9-a2e0-abd11ef742f9",
    title: "Силиконовый герметик санитарный",
    description: "Герметик с противогрибковыми добавками для ванных комнат, кухонь, душевых. Обеспечивает водонепроницаемое и долговечное соединение.",
    image: "undefined/images/отделка/клей/санит.webp",
    mainCategory: "Отделка",
    subCategory: "Герметик",
    sizeText: "Выберите товар:",
    pricesBySize: {
      "Tytan прозрачный": 550,
      "Tytan белый": 550,
      "Момент белый": 500
    },
    urlId: "silikonovyy-germetik-sanitarnyy"
  },
  {
    id: "01cf5b11-52e8-4353-8c21-a0585fe50009",
    title: "Силиконовый герметик универсальный",
    description: "Универсальный герметик для внутренних и наружных работ. Используется для герметизации швов в окнах, дверях, вентиляции.",
    image: "undefined/images/отделка/клей/унив.webp",
    mainCategory: "Отделка",
    subCategory: "Герметик",
    sizeText: "Выберите товар:",
    pricesBySize: {
      "ISOBOX белый": 350,
      "Super Монтажник белый": 350
    },
    urlId: "silikonovyy-germetik-universalnyy"
  },
  {
    id: "6e293778-8e5e-4d89-9a03-8a80140b14ae",
    title: "Силиконовый герметик Tytan для кровли",
    description: "Эластичный герметик для герметизации швов на кровле. Устойчив к перепадам температур, ультрафиолету и осадкам.",
    image: "undefined/images/отделка/клей/кров.webp",
    mainCategory: "Отделка",
    subCategory: "Герметик",
    sizeText: "Выберите цвет:",
    pricesBySize: {
      "Прозрачный": 400,
      "Белый": 400,
      "Чёрный": 400
    },
    urlId: "silikonovyy-germetik-tytan-dlya-krovli"
  },
  {
    id: "de19a3bb-83f1-48cf-af8e-6be32c4cd832",
    title: "Силиконовый герметик Vetonit цветной",
    description: "Цветной силиконовый герметик для декоративной отделки и герметизации швов. Используется в ванных, на кухнях и в интерьере.",
    image: "undefined/images/отделка/клей/ветон.webp",
    mainCategory: "Отделка",
    subCategory: "Герметик",
    sizeText: "Выберите цвет:",
    pricesBySize: {
      "Белый": 700,
      "Серый": 700,
      "Серебро": 700,
      "Гранит": 700,
      "Антрацит": 700
    },
    urlId: "silikonovyy-germetik-vetonit-tsvetnoy"
  },
  {
    id: "d0aae6e0-8d28-4d84-8ea9-17fee266ed7b",
    title: "Силиконовый герметик Rich огнеупорный",
    description: "Огнеупорный герметик для герметизации швов в условиях повышенной температуры. Подходит для каминов, печей, вентиляции.",
    image: "undefined/images/отделка/клей/огнеуп.webp",
    mainCategory: "Отделка",
    subCategory: "Герметик",
    "price": 400,
    urlId: "silikonovyy-germetik-rich-ogneupornyy"
  },
  {
    id: "c7056fb9-b989-4761-b6a8-c61946e98b31",
    title: "Монтажный клей Момент Жидкие гвозди",
    description: "Высокопрочный клей для фиксации панелей, плит, зеркал, плинтусов и других материалов.",
    image: "undefined/images/отделка/клей/мв.webp",
    mainCategory: "Отделка",
    subCategory: "Клей",
    sizeText: "Выберите товар:",
    pricesBySize: {
      "МВ-100": 500,
      "МВ-70": 470,
      "МВ-50": 450
    },
    urlId: "montazhnyy-kley-moment-zhidkie-gvozdi"
  },
  {
    id: "fee04f21-6cb3-4c88-beea-44680ffac8e5",
    title: "Монтажный клей Жидкие гвозди",
    description: "Универсальный клей для фиксации материалов без крепежа. Подходит для разных поверхностей: дерево, металл, пластик, бетон.",
    image: "undefined/images/отделка/клей/клей.webp",
    mainCategory: "Отделка",
    subCategory: "Клей",
    sizeText: "Выберите товар:",
    pricesBySize: {
      "Tytan Classic Fix": 800,
      "ЭКОН": 350,
      "Master Teks": 300
    },
    urlId: "montazhnyy-kley-zhidkie-gvozdi"
  },
  {
    id: "367cdd01-de83-4a8d-ac14-4d7ed0681376",
    title: "Клей КС для линоулема",
    description: "Специализированный клей для приклеивания линолеума и других напольных покрытий. Обеспечивает прочное и долговечное сцепление.",
    image: "undefined/images/отделка/клей/кс.webp",
    mainCategory: "Отделка",
    subCategory: "Клей",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "5кг": 500,
      "2.7кг": 350,
      "1.5кг": 250
    },
    urlId: "kley-ks-dlya-linoulema"
  },
  {
    id: "129cf9fb-b382-4f5e-b448-b4a143ba4ab3",
    title: "Клей ПВА строительный",
    description: "Универсальный клей на основе ПВА для склеивания древесины, бумаги, картона, гипсокартона, ткани и других материалов.",
    image: "undefined/images/отделка/клей/пва.webp",
    mainCategory: "Отделка",
    subCategory: "Клей",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "10кг": 900,
      "5кг": 450,
      "3кг": 300,
      "0.9кг": 150
    },
    urlId: "kley-pva-stroitelnyy"
  },
  {
    id: "daec2e04-f171-4172-8f9a-03c8c50bfdc5",
    title: "Клей Hauser для пенополистирола ",
    description: "Клей для приклеивания пенополистирола, пенопласта, гипсокартона, панелей. Образует прочное и устойчивое к влаге соединение.",
    image: "undefined/images/отделка/клей/хаузер.webp",
    mainCategory: "Отделка",
    subCategory: "Клей",
    "price": 500,
    urlId: "kley-hauser-dlya-penopolistirola"
  },
  {
    id: "08786350-e296-4034-b8c0-bebe5c6108a2",
    title: "Стеклосетка фасадная под штукатурку",
    description: "Армирующая стеклосетка для усиления фасадных и внутренних штукатурных систем. Увеличивает прочность и предотвращает растрескивание.",
    image: "undefined/images/отделка/стекл/фасад.webp",
    mainCategory: "Отделка",
    subCategory: "Стеклосетка и стеклохолст",
    sizeText: "Выберите стеклосетку:",
    pricesBySize: {
      "Зелёная 50м": 2200,
      "Жёлтая 50м": 1950,
      "Синяя 50м": 2000,
      "Жёлтая 30м": 1500,
      "Жёлтая 20м": 1100,
      "Жёлтая 10м": 700
    },
    urlId: "steklosetka-fasadnaya-pod-shtukaturku"
  },
  {
    id: "7164333c-1b9d-4aab-b16d-f71f0994bd07",
    title: "Стеклосетка малярная под штукатурку",
    description: "Малярная сетка для армирования штукатурных систем, выравнивания углов, заделки трещин.",
    image: "undefined/images/отделка/стекл/интер.webp",
    mainCategory: "Отделка",
    subCategory: "Стеклосетка и стеклохолст",
    sizeText: "Выберите стеклосетку:",
    pricesBySize: {
      "5х5 50м": 1550,
      "5х5 20м": 800,
      "2х2 50м": 1400,
      "2х2 20м": 800,
      "2х2 10м": 500
    },
    urlId: "steklosetka-malyarnaya-pod-shtukaturku"
  },
  {
    id: "63e588a8-8d5e-4360-967d-272739c27148",
    title: "Стеклохолст малярный (40гр/м²)",
    description: "Нетканый стеклохолст для армирования и выравнивания стен перед поклейкой обоев. Предотвращает растрескивание штукатурки.",
    image: "undefined/images/отделка/стекл/холст.webp",
    mainCategory: "Отделка",
    subCategory: "Стеклосетка и стеклохолст",
    "price": 1800,
    urlId: "stekloholst-malyarnyy"
  },
  {
    id: "081d7ccd-f688-4014-b7b9-32de19cb070c",
    title: "Валик 180мм",
    description: "Валик шириной 180 мм для окрашивания стен и потолков. Подходит для водоэмульсионных и акриловых красок.",
    image: "undefined/images/инструм/валики.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Валики",
    sizeText: "Выберите валик:",
    pricesBySize: {
      "Тигр (ворс 11мм)": 200,
      "Зелёный (ворс 18мм)": 200,
      "Полосатый (ворс 11мм)": 200
    },
    urlId: "valik-180mm"
  },
  {
    id: "8bb7153c-7b8a-45bf-86c9-e5cf06ca1cbb",
    title: "Валик 230мм",
    description: "Широкий валик для быстрого нанесения краски на большие поверхности. Используется с водоэмульсионными и акриловыми составами.",
    image: "undefined/images/инструм/валики.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Валики",
    sizeText: "Выберите валик:",
    pricesBySize: {
      "Тигр (ворс 11мм)": 250,
      "Зелёный (ворс 18мм)": 250,
      "Полосатый (ворс 11мм)": 250
    },
    urlId: "valik-230mm"
  },
  {
    id: "06763146-fa63-4663-9e1c-dc527d6e5349",
    title: "Шпатель",
    description: "Шпатель для нанесения и разравнивания шпатлёвки, клея, герметика.",
    image: "undefined/images/инструм/шпатели.webp",
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
      "600мм": 250
    },
    urlId: "shpatel"
  },
  {
    id: "ce3497fd-6c56-4596-9a9d-c5bdf8a037c6",
    title: "Шпатель профессиональный",
    description: "Профессиональный шпатель с усиленной конструкцией для точного нанесения шпатлёвочных смесей и клея.",
    image: "undefined/images/инструм/проф.webp",
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
      "350мм": 550
    },
    urlId: "shpatel-professionalnyy"
  },
  {
    id: "14aa5d51-2212-4ba8-a1ff-c9fbb137ced3",
    title: "Кисть с натуральной щетиной",
    description: "Кисть с натуральной щетиной для нанесения масляных и алкидных красок. Обеспечивает гладкое покрытие и точное нанесение.",
    image: "undefined/images/инструм/кисти.webp",
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
      "100мм": 200
    },
    urlId: "kist-s-naturalnoy-schetinoy"
  },
  {
    id: "d2984c94-3b4a-4ccb-a956-0d150f2bb9f5",
    title: "Кисть с искусственной щетиной",
    description: "Кисть с синтетической щетиной для водоэмульсионных и акриловых красок. Не оставляет ворса, легко моется.",
    image: "undefined/images/инструм/искус.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Кисти",
    sizeText: "Выберите ширину:",
    pricesBySize: {
      "38мм": 80,
      "50мм": 100,
      "65мм": 120,
      "75мм": 150,
      "100мм": 200
    },
    urlId: "kist-s-iskusstvennoy-schetinoy"
  },
  {
    id: "85127a6c-033b-4736-ae4e-6c2ba29feb08",
    title: "Кисть макловица (ракля)",
    description: "Широкая кисть для быстрого нанесения грунтовки, краски, штукатурки. Удобна при работе на больших поверхностях.",
    image: "undefined/images/инструм/ракля.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Кисти",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "140х50мм": 150,
      "150х70мм": 180,
      "170х70мм": 200
    },
    urlId: "kist-maklovitsa"
  },
  {
    id: "dc372d4f-e0e8-49c6-b94d-69ef5f361d72",
    title: "Скотч 48мм",
    description: "Канцелярский и строительный скотч для фиксации, упаковки и защиты краёв при покраске.",
    image: "undefined/images/инструм/скотчи.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Ленты и скотчи",
    sizeText: "Выберите длину:",
    pricesBySize: {
      "30м прозрачный": 100,
      "150м жёлтый": 300
    },
    urlId: "skotch-48mm"
  },
  {
    id: "e55a7d04-e4bb-4b37-a523-88d68e9ff280",
    title: "Лента малярная (48х5000мм)",
    description: "Малярный скотч для защиты поверхностей при покраске и отделке. Обеспечивает чёткую линию, легко отклеивается.",
    image: "undefined/images/инструм/маляр.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Ленты и скотчи",
    "price": 150,
    urlId: "lenta-malyarnaya"
  },
  {
    id: "d49f136e-3cf1-4e3e-9a39-112450edcc6c",
    title: "Пистолет для пены усиленный ПМ-220",
    description: "Усиленный монтажный пистолет для нанесения монтажной пены. Обладает прочной металлической конструкцией, регулировкой подачи и долгим сроком службы. Подходит для профессионального использования.",
    image: "undefined/images/инструм/пм220.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Монтажные пистолеты",
    "price": 650,
    urlId: "pistolet-dlya-peny-usilennyy-pm-220"
  },
  {
    id: "9a2d011f-3fef-49e0-a1a5-558b93b19753",
    title: "Пистолет для пены металлический",
    description: "Прочный металлический пистолет для нанесения монтажной пены. Обеспечивает точную дозировку и равномерное распределение пены. Подходит для профессионального и бытового использования.",
    image: "undefined/images/инструм/пистпен.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Монтажные пистолеты",
    "price": 650,
    urlId: "pistolet-dlya-peny-metallicheskiy"
  },
  {
    id: "244d4ce1-9bdf-4187-a06a-bcfae0c8eafb",
    title: "Пистолет для пены Fomeron Fort",
    description: "Профессиональный пистолет для монтажной пены с регулировкой подачи и удобным ходом штока. Обеспечивает точное и экономичное нанесение пены.",
    image: "undefined/images/инструм/фомеронт.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Монтажные пистолеты",
    "price": 450,
    urlId: "pistolet-dlya-peny-fomeron-fort"
  },
  {
    id: "500d9c78-24db-4b64-b9a7-d9fd6b400d54",
    title: "Пистолет для пены пластиковый",
    description: "Бюджетный пистолет для нанесения монтажной пены. Удобен в бытовом использовании, подходит для стандартных баллонов.",
    image: "undefined/images/инструм/пм02.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Монтажные пистолеты",
    "price": 300,
    urlId: "pistolet-dlya-peny-plastikovyy"
  },
  {
    id: "7255d2ff-f58c-4abe-8913-0e9c57afedce",
    title: "Пистолет для герметика полузакрытый",
    description: "Пистолет для нанесения силиконовых и акриловых герметиков из туб. Используется в строительстве, ремонте и автосервисе.",
    image: "undefined/images/инструм/пистгерм.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Монтажные пистолеты",
    "price": 350,
    urlId: "pistolet-dlya-germetika-poluzakrytyy"
  },
  {
    id: "5745fec3-9b92-444a-90d8-71ec3c823441",
    title: "Зажим кольцо 500шт (1мм)",
    description: "Пластиковые зажимы (диски) для системы выравнивания плитки. Используются вместе с клиньями, чтобы равномерно распределить давление и выровнять уровень соседних плиток.",
    image: "undefined/images/инструм/свп/роз500.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "СВП",
    "price": 1000,
    urlId: "zazhim-koltso-500sht"
  },
  {
    id: "56c59c03-0968-4cf8-89e5-ee59a2f06c9d",
    title: "Зажим кольцо 100шт (1мм)",
    description: "Пластиковые зажимы (диски) для системы выравнивания плитки. Используются вместе с клиньями, чтобы равномерно распределить давление и выровнять уровень соседних плиток.",
    image: "undefined/images/инструм/свп/роз100.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "СВП",
    "price": 300,
    urlId: "zazhim-koltso-100sht"
  },
  {
    id: "9cd45fff-ae1b-4d20-9d50-f0ff9c37ec44",
    title: "Зажим кольцо 500шт (1.5мм)",
    description: "Пластиковые зажимы для СВП, предназначенные для более толстых плиток и крупноформатных элементов. Обеспечивают точное выравнивание и ровную поверхность.",
    image: "undefined/images/инструм/свп/зел500.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "СВП",
    "price": 1000,
    urlId: "zazhim-koltso-500sht"
  },
  {
    id: "6f004589-c305-49fd-9286-a24d3705eef6",
    title: "Зажим кольцо 100шт (1.5мм)",
    description: "Пластиковые зажимы для СВП, предназначенные для более толстых плиток и крупноформатных элементов. Обеспечивают точное выравнивание и ровную поверхность.",
    image: "undefined/images/инструм/свп/зел100.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "СВП",
    "price": 300,
    urlId: "zazhim-koltso-100sht"
  },
  {
    id: "92dc0319-82c7-48ce-849e-d1c14a75dabf",
    title: "Клинья 200шт",
    description: "Пластиковые клинья для системы выравнивания плитки. Используются вместе с зажимами для точного выравнивания швов и поверхности. Удаляются после схватывания клея.",
    image: "undefined/images/инструм/свп/клин200.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "СВП",
    "price": 1000,
    urlId: "klinya-200sht"
  },
  {
    id: "9e1f43a1-7f24-470b-a072-097eca985902",
    title: "Клинья 50шт",
    description: "Пластиковые клинья для системы выравнивания плитки. Используются вместе с зажимами для точного выравнивания швов и поверхности. Удаляются после схватывания клея.",
    image: "undefined/images/инструм/свп/клин50.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "СВП",
    "price": 350,
    urlId: "klinya-50sht"
  },
  {
    id: "a1b93de7-31d0-45fd-937e-994536e91206",
    title: "Бита Ph2-50мм",
    description: "Универсальная бита с наконечником PH2 для работы с шуруповёртом. Подходит для завинчивания саморезов, шурупов и других крепёжных элементов. ",
    image: "undefined/images/инструм/биты/бита.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Свёрла, биты и буры",
    "price": 100,
    urlId: "bita-ph2-50mm"
  },
  {
    id: "52954625-87ef-4b6c-afc1-3b906c404de7",
    title: "Бита кровельная 8мм",
    description: "Кровельная бита с широким наконечником для работы с кровельными саморезами. Обеспечивает надёжное закручивание без повреждения шляпки крепежа.",
    image: "undefined/images/инструм/биты/кров.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Свёрла, биты и буры",
    "price": 100,
    urlId: "bita-krovelnaya-8mm"
  },
  {
    id: "72b502b3-8ac4-47e8-a0a8-84958a11fbfb",
    title: "Бур по бетону SDS+",
    description: "Бур с хвостовиком SDS+ для перфораторов. Используется для сверления отверстий в бетоне, кирпиче, камне.",
    image: "undefined/images/инструм/биты/буры.webp",
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
      "10х310мм": 250
    },
    urlId: "bur-po-betonu-sds"
  },
  {
    id: "404cb96c-9d7c-4aea-adb3-3a2a427c3cc2",
    title: "Сверло по металлу",
    description: "Свёрло из быстрорежущей стали HSS для точного сверления металлических заготовок, профилей, листового металла.",
    image: "undefined/images/инструм/биты/сверла.webp",
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
      "9.5мм": 250
    },
    urlId: "sverlo-po-metallu"
  },
  {
    id: "0efa2d9e-a2c8-4f9c-a009-5e43d9cf68f1",
    title: "Диск отрезной по металлу",
    description: "Абразивный отрезной диск для резки металлических профилей, арматуры, уголков и других изделий.",
    image: "undefined/images/инструм/диски/отрез.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Абразивные диски",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "125мм": 100,
      "150мм": 120,
      "230мм": 150
    },
    urlId: "disk-otreznoy-po-metallu"
  },
  {
    id: "71c825ad-0e7d-4862-b3c7-706bb9558d11",
    title: "Круг зачистной по металлу",
    description: "Зачистной диск для шлифовальных машин. Используется для удаления ржавчины, окалин, заусенцев и подготовки швов.",
    image: "undefined/images/инструм/диски/зачист.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Абразивные диски",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "125х6х22мм": 150,
      "150х6х22мм": 170,
      "180х6х22мм": 200
    },
    urlId: "krug-zachistnoy-po-metallu"
  },
  {
    id: "47177b4f-38c2-4b20-8fef-5317d2833e75",
    title: "Шлифкруг лепестковый",
    description: "Лепестковый шлифовальный круг для финишной обработки металлических и деревянных поверхностей. Позволяет добиться гладкой поверхности.",
    image: "undefined/images/инструм/диски/зачист.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Абразивные диски",
    "price": 150,
    urlId: "shlifkrug-lepestkovyy"
  },
  {
    id: "53dd7eb7-b578-42c2-966e-d18dd3827895",
    title: "Диск алмазный ультратонкий (125мм)",
    description: "Алмазный отрезной диск для резки керамики, керамогранита, бетона и других твёрдых материалов. Ультратонкий для минимального скола и точной резки.",
    image: "undefined/images/инструм/диски/ультра.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Абразивные диски",
    "price": 500,
    urlId: "disk-almaznyy-ultratonkiy"
  },
  {
    id: "ec262e90-cd6a-40e2-9edf-5365036a7e74",
    title: "Диск алмазный супертонкий (125мм)",
    description: "Супертонкий алмазный диск для резки керамической плитки, керамогранита и бетона. Обеспечивает чистый и аккуратный рез.",
    image: "undefined/images/инструм/диски/ультра.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Абразивные диски",
    "price": 450,
    urlId: "disk-almaznyy-supertonkiy"
  },
  {
    id: "73f0c68a-5998-43bc-bd54-1bdffadc92a7",
    title: "Диск алмазный по граниту LUFTER",
    description: "Профессиональный алмазный диск для резки гранита, мрамора, керамогранита и других твёрдых материалов.",
    image: "undefined/images/инструм/диски/люфтер.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Абразивные диски",
    sizeText: "Выберите размер:",
    pricesBySize: {
      "115мм": 900,
      "125мм": 1000
    },
    urlId: "disk-almaznyy-po-granitu-lufter"
  },
  {
    id: "92839205-2bf8-4b82-86b7-7282caa83c94",
    title: "Ведро строительное",
    description: "Пластиковое ведро для приготовления и переноски строительных смесей, воды, инструментов. Удобная форма и прочный материал выдерживают интенсивную эксплуатацию.",
    image: "undefined/images/инструм/ведро.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Тара и ёмкости",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "12л": 150,
      "16л": 200,
      "20л": 250
    },
    urlId: "vedro-stroitelnoe"
  },
  {
    id: "92e02327-a4c9-4794-a230-b43bc396e33d",
    title: "Таз строительный круглый",
    description: "Круглый пластиковый таз для замешивания штукатурки, клея, грунтовки и других смесей. Удобен для транспортировки и хранения материалов.",
    image: "undefined/images/инструм/круг.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Тара и ёмкости",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "45л": 350,
      "60л": 400,
      "90л": 450
    },
    urlId: "taz-stroitelnyy-kruglyy"
  },
  {
    id: "ded6d119-c415-4f14-9709-8b649f8a8a26",
    title: "Таз строительный прямоугольный",
    description: "Прямоугольный таз для приготовления и переноски строительных смесей. Удобен для работы с клеем и штукатуркой.",
    image: "undefined/images/инструм/прям.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Тара и ёмкости",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "45л": 350,
      "60л": 400,
      "90л": 450
    },
    urlId: "taz-stroitelnyy-pryamougolnyy"
  },
  {
    id: "dbcd8dc5-4d3d-46bb-b3e5-be980958e742",
    title: "Ведро строительное ударопрочное Decor Profi (20л)",
    description: "Ударопрочное ведро из усиленного пластика. Устойчиво к деформации и нагрузкам. Подходит для профессионального использования.",
    image: "undefined/images/инструм/удведр.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Тара и ёмкости",
    "price": 700,
    urlId: "vedro-stroitelnoe-udaroprochnoe-decor-profi"
  },
  {
    id: "f4ca8138-1be3-427b-8cc3-001777a7fda1",
    title: "Таз строительный ударопрочный Decor Profi",
    description: "Профессиональный таз из прочного пластика для работы с клеем, штукатуркой и другими смесями. Удобные ручки и устойчивость к повреждениям.",
    image: "undefined/images/инструм/удтаз.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Тара и ёмкости",
    sizeText: "Выберите объём:",
    pricesBySize: {
      "30л": 1200,
      "50л": 1800
    },
    urlId: "taz-stroitelnyy-udaroprochnyy-decor-profi"
  },
  {
    id: "d77ae990-9d67-4c00-be3b-b386b79ea7b3",
    title: "Мешки для строительного мусора",
    description: "Прочные мешки для сбора и выноса строительного мусора. Выдерживают значительный вес, устойчивы к проколам. Зелёный выдерживает нагрузку до 30кг. Белый выдерживает нагрузку до 50кг.",
    image: "undefined/images/инструм/мешки.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Другое",
    sizeText: "Выберите мешок:",
    pricesBySize: {
      "зелёный": 15,
      "белый": 20
    },
    urlId: "meshki-dlya-stroitelnogo-musora"
  },
  {
    id: "07c91a7d-c5eb-41c8-b79b-de8842e125c9",
    title: "Ванночка (330х350мм)",
    description: "Пластиковая ванночка для краски, штукатурки, шпатлёвки. Удобна при окрашивании валиком или приготовлении смесей.",
    image: "undefined/images/инструм/ванночка.webp",
    mainCategory: "Инструменты и расходные материалы",
    subCategory: "Другое",
    "price": 150,
    urlId: "vannochka"
  }
];

export default menuItems;