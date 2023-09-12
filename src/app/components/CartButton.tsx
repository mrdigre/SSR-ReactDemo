'use client'
import React, { useState } from 'react';
import { useCart } from '@/app/contexts/CartContext';

const CartButton = ({ product }) => {
  const { addToCart } = useCart(); // Context
  const [quantity, setQuantity] = useState(1); // State to track quantity

  const handleAddToCart = () => {
    addToCart(product, quantity); 
    
  };

  return (
    <div className="flex flex-col w-1/2 p-1">
      <div className="flex text-gray-800 items-center mb-2 text-xs"> Select Quantity </div>
      <div className="flex flex-row w-full items-center">
        <button
          className="z-10 rounded-l-lg font-bold bg-blue-500 hover:bg-blue-600 text-white border-gray-400 w-20 flex focus:outline-none cursor-pointer px-2 py-1"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1); // Decrease quantity
            }
          }}
        >
          <span className="m-auto">-</span>
        </button>

        <input
          className="z-10 md:p-2 text-xs w-1/2 md:text-base border-gray-400 focus:outline-none text-center text-gray-600 px-2 py-1"
          name="custom-input-number"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => {
            const newQuantity = parseInt(e.target.value, 10);
            if (!isNaN(newQuantity) && newQuantity >= 1) {
              setQuantity(newQuantity); // Update the quantity state
            }
          }}
          
          
        />

        <button
          className="z-10 rounded-r-lg font-bold bg-blue-500 hover:bg-blue-600 text-white border-gray-400 w-20 flex focus:outline-none cursor-pointer px-2 py-1"
          onClick={() => {
            setQuantity(quantity + 1); // Increase quantity
          }}
        >
          <span className="m-auto">+</span>
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-2 w-full z-20 hover:bg-blue-600 bg-blue-500 text-white font-bold rounded-lg px-2 py-1 transition duration-300 ease-in-out transform hover:scale-103 focus:outline-none"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
