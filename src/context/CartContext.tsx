import { createContext, useContext, useState } from "react";

// Типизируем элемент корзины
interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

// Типизируем содержание контекста
interface ICartContextType {
  cart: ICartItem[];
  addToCart: (product: ICartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalPrice: number; // Добавляем totalPrice
}

// 1. Создаем контекст с начальным значением undefined
export const CartContext = createContext<ICartContextType | undefined>(undefined);

// 2. Обертка для компонентов с использованием контекста
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  const addToCart = (product: ICartItem) => {
    setCart((prevCart) => {
      const productExist = prevCart.find((item) => item.id === product.id);
      if (productExist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Вычисляем общую сумму
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Хук для использования контекста
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("No such context🫣");
  }
  return context;
};