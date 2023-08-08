'use client'
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const cartValue = {
    cartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {children} // como se pasan estas props a todos los demas componentes?
    </CartContext.Provider>
  );
};
