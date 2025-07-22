import { MenuItemProps } from "../components/MenuItem/MenuItem";

export type SEOData = {
  [x: string]: string | undefined;
  title: string;
  description: string;
  h1: string;
  canonicalUrl: string;
  schema: string;
};

export function generateSEO(product: MenuItemProps): SEOData {
  const { title, description, mainCategory, subCategory, pricesBySize, price, isWeight, image } = product;

  // Определим минимальную цену
  const minPrice = pricesBySize && Object.keys(pricesBySize).length > 0
    ? Math.min(...Object.values(pricesBySize))
    : price ?? 0;

  // Формируем цену с "от", если товар весовой
  const priceText = isWeight ? `от ${minPrice} руб/кг` : `от ${minPrice} руб`;

  // Генерируем title и description на основе данных
  const seoTitle = `${title} | Купить в Астрахани ${priceText} — СтройДом`;
  const seoDescription = `${description} ${mainCategory ? `| ${mainCategory}` : ''} ${subCategory ? `| ${subCategory}` : ''}. Купить ${title} в Астрахани или заказать в Астрахань с доставкой. ${priceText}.`;
  // Генерируем slug
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]/g, '');

  const canonicalUrl = `https://stroydom30.ru/product/${slug}`;

  // Schema.org
  const schema = {
    "@context": "https://schema.org ",
    "@type": "Product",
    name: title,
    description: `${description} ${mainCategory ? `| ${mainCategory}` : ''} ${subCategory ? `| ${subCategory}` : ''}. Купите ${title} в Астрахани или в Астрахань с доставкой. ${priceText}.`,
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: minPrice,
      availability: "https://schema.org/InStock ",
      areaServed: {
        "@type": "City",
        name: "Астрахань"
      }
    },
    image: image,
    url: canonicalUrl,
    brand: {
      "@type": "Organization",
      name: "СтройДом"
    },
    availableAtOrFrom: {
      "@type": "Organization",
      name: "СтройДом",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Астрахань",
        addressRegion: "Астраханская область",
        addressCountry: "Россия"
      }
    }
  };

  return {
    title: seoTitle,
    description: seoDescription,
    h1: title,
    canonicalUrl,
    schema: JSON.stringify(schema),
  };
}

