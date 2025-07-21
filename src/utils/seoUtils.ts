import { MenuItemProps } from "../components/MenuItem/MenuItem";

export type SEOData = {
  title: string;
  description: string;
  h1: string;
  canonicalUrl: string;
  schema: string;
};

export function generateSEO(product: MenuItemProps): SEOData {
  const { title, description, mainCategory, subCategory, pricesBySize, price, isWeight } = product;

  // Определим минимальную цену
  const minPrice = pricesBySize
    ? Math.min(...Object.values(pricesBySize))
    : price
      ? price
      : 0;

  // Если товар весовой — добавим "от" в описание
  const priceText = isWeight ? `от ${minPrice} руб/кг` : `от ${minPrice} руб`;

  // Генерируем заголовок (title)
  const seoTitle = `${title} | Купить в Астрахани за ${priceText} — СтройДом`;

  // Генерируем meta description
  const seoDescription = `${description || ''} ${mainCategory ? `| ${mainCategory}` : ''} ${subCategory ? `| ${subCategory}` : ''}. ${priceText}. Купить в Астрахани. Заказать доставка по Астрахани.`;

  // Генерируем slug для URL
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]/g, '');

  const canonicalUrl = `https://example.com/product/ ${slug}`;

  // Schema.org разметка
  const schema = {
    '@context': 'https://schema.org ',
    '@type': 'Product',
    name: title,
    description: description || 'Товар от производителя',
    image: product.image || 'https://example.com/images/no-image.jpg ',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'RUB',
      price: minPrice,
      availability: 'https://schema.org/InStock ',
    },
    url: canonicalUrl,
  };

  return {
    title: seoTitle,
    description: seoDescription,
    h1: title,
    canonicalUrl,
    schema: JSON.stringify(schema),
  };
}