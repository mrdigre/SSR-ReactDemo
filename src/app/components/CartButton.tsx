'use client'
import React from 'react';
import { useCart } from '@/app/contexts/CartContext';

const CartButton = ({ products }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(products);
  };

  return (
    <button onClick={handleAddToCart} className="border hover:bg-gray-800 bg-gray-500 text-white">
      ADD TO CART
    </button>
  );
};

export default CartButton;