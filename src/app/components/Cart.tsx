'use client'
import { useCart } from "../contexts/CartContext"

const Cart = () => {
    const { cartItems } = useCart();
  
    return (
      <div className="text-black">
        
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item && item.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Cart;