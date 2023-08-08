'use client'
import { useCart } from "../contexts/CartContext"

const Cart = () => {
    const { cartItems } = useCart();
  
    return (
      <div className="text-black">
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Cart;