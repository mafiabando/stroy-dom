import { createContext, useState, useEffect } from 'react';
import { ICartItem } from '../types';

interface CartContextValue {
  cartItems: ICartItem[];
  addToCart: (item: Omit<ICartItem, 'key'> & { quantity: number }) => void;
  updateQuantity: (key: string, quantity: number) => void;
  removeFromCart: (key: string) => void;
  clearCart: () => void
}

export const CartContext = createContext<CartContextValue>({
  cartItems: [],
  addToCart: () => {},
  updateQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    const storedItems = localStorage.getItem('cart');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

const addToCart = (item: Omit<ICartItem, 'key'> & { quantity: number }) => {
  const itemKey = `${item.id}-${item.size}`;
  console.log(item)

  setCartItems((prev) => {
    const existingIndex = prev.findIndex(i => i.key === itemKey);

    if (existingIndex > -1) {
      const updatedCart = [...prev];
      updatedCart[existingIndex].quantity += item.quantity;
      return updatedCart;
    }

    return [...prev, { ...item, key: itemKey }];
  });
};

  const updateQuantity = (key: string, quantity: number) => {
  setCartItems(prev =>
    prev.map(item => (item.key === key ? { ...item, quantity } : item))
  );
};

const removeFromCart = (key: string) => {
  setCartItems(prev => prev.filter(item => item.key !== key));
};

const clearCart = () => {
  localStorage.removeItem('cart');
  setCartItems([]);
}

  // Эффект для сохранения в localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};