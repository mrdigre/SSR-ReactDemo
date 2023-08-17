'use client'
import React from 'react';
import { useCart } from '@/app/contexts/CartContext';

const CartButton = ({ product }) => {
  const { addToCart } = useCart(); //context

  const handleAddToCart = () => {
    addToCart(product);
    window.alert("Product added succesfully")
  };

    
  return (
    <button onClick={handleAddToCart} className="border hover:bg-gray-800 bg-gray-500 text-white">
      ADD TO CART
    </button>
  );
};

export default CartButton;