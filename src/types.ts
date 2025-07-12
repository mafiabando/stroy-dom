export interface ICartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    size?: string;
    key: string;
    isWeight?: boolean;
    quantityStep?: number;
    minQuantity?: number;
  }

