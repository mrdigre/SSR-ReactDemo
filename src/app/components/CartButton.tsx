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
    
    <div className="flex flex-col w-1/2 p-1">
      <div className="flex text-gray-800 items-center mb-2 text-xs"> Select Quantity </div>
      <div className="flex flex-row w-full items-center">
            
            <button 
                className="z-10 rounded-l-lg font-bold bg-blue-500 hover:bg-blue-600 text-white border-gray-400 w-20 flex focus:outline-none cursor-pointer px-2 py-1"
                >
                <span className="m-auto">-</span>
            </button>
            
            <input
                type="hidden"
                className="z-20 md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
                name="custom-input-number"
                />
            <div
                className="px-2 py-1 bg-white w-24 text-xs text-gray-800 md:text-base flex items-center justify-center cursor-default"
                >
                <span>2</span>
            </div>
    
            <button
                className="z-20 rounded-r-lg font-bold border-l bg-blue-500 hover:bg-blue-600 text-white border-gray-400 h-full w-20 flex focus:outline-none cursor-pointer"
                >
                <span className="m-auto">+</span>
            </button>
                
      </div>
      
    <button onClick={handleAddToCart} className="mt-2 w-full z-20 hover:bg-blue-600 bg-blue-500 text-white font-bold rounded-lg px-2 py-1 transition duration-300 ease-in-out transform hover:scale-103 focus:outline-none ">
      Add to Cart
    </button>
    
    </div>
  );
};

export default CartButton;

 