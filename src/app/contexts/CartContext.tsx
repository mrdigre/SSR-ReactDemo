'use client';
import React, { createContext, useContext, useState } from 'react';
import { Product } from '@prisma/client';

interface CartProduct extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartProduct[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  totalQuantity: number;
  modifyProductQuantity: (productId: string, quantity?: number) => void;
  cartSubtotal: (ProductPrice: number, quantity: number) => number;
}

const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  const addToCart = (product: Product, quantity = 1) => {
    const existingItemIndex = cartItems.findIndex(
      item => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prevItems => [...prevItems, { ...product, quantity }]);
    }
    window.alert('Product added successfully');
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const modifyProductQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const cartSubtotal = cartItems.reduce(
    (subtotal, item) => subtotal + item.price * item.quantity,
    0
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartValue = {
    cartItems,
    addToCart,
    removeFromCart,
    totalQuantity,
    modifyProductQuantity,
    cartSubtotal,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

