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
    <button onClick={handleAddToCart} className="z-20 hover:bg-blue-800 bg-blue-500 text-white font-bold rounded-full px-2 py-1 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none ">
      Add to Cart
    </button>
  );
};

export default CartButton;

 