'use client'
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantityMap, setQuantityMap] = useState({});

  const addToCart = (product, quantity=1) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prevItems => [...prevItems, { ...product, quantity }]);
    }
  
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };
  
  const getQuantity = (productId) => {
    return quantityMap[productId] || 1; // Default to 1 if quantity is not set
  };

  const setQuantity = (productId, quantity) => {
    setQuantityMap({ ...quantityMap, [productId]: quantity });
  };
  
  const cartValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getQuantity,
    setQuantity,
  };

  console.log("CartProvider - cartItems:", cartItems);

  return (
    <CartContext.Provider value={cartValue}>
      {children} 
    </CartContext.Provider>
  );

};
