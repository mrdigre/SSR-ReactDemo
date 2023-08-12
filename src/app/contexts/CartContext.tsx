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

  console.log("CartProvider - cartItems:", cartItems);

  return (
    <CartContext.Provider value={cartValue}>
      {children} 
    </CartContext.Provider>
  );
};
