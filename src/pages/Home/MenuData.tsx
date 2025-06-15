import { MenuItemProps } from "../../components/MenuItem/MenuItem";

export const menuItems: MenuItemProps[] = [
  {
    id: 1,
    title: "Коричневый",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/mp1.jpg`,
    category: "МП-20",
    pricesByLength: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: 2,
    title: "Красный",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/mp2.jpg`,
    category: "МП-20",
    pricesByLength: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: 3,
    title: "Синий",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/mp3.jpg`,
    category: "МП-20",
    pricesByLength: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: 4,
    title: "Зелёный",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/mp4.jpg`,
    category: "МП-20",
    pricesByLength: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: 5,
    title: "Графит",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/mp5.jpg`,
    category: "МП-20",
    pricesByLength: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: 6,
    title: "Белый",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/c1.jpg`,
    category: "С-8",
    pricesByLength: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: 7,
    title: "Слоновая кость",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/c2.jpg`,
    category: "С-8",
    pricesByLength: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: 8,
    title: "Коричневый",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/c3.jpg`,
    category: "С-8",
    pricesByLength: {
    '1.5м': 800,
    '1.7м': 900,
    '2м': 1000,
    },
  },
  {
    id: 9,
    title: "Морёный дуб",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/c4.jpg`,
    category: "С-8",
    pricesByLength: {
    '2м': 1800,
    },
  },
  {
    id: 10,
    title: "Камень",
    description: "Ширина 1.15м , толщина 0.35мм",
    image: `${process.env.PUBLIC_URL}/images/c5.jpg`,
    category: "С-8",
    pricesByLength: {
    '2м': 1800,
    },
  },
];
