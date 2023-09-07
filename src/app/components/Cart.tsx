'use client'
import { useCart } from "../contexts/CartContext"
import Image from "next/image";

const Cart = () => {
    const { cartItems,removeFromCart } = useCart();
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const showMessageIfEmptyCart = totalQuantity === 0

        
    
  
    return (

        <div className="flex flex-col w-4/5 bg-white text-gray-800">
            <header className="bg-white py-4">
                <h1 className="text-2xl font-bold text-left py-4">Cart ({totalQuantity} products)</h1>
                {showMessageIfEmptyCart && <p>No items currently in cart</p>}
            </header>
            
            <main className="flex-1 px-4 py-8 md:px-8">
                <section className="max-w-3xl mx-auto">
                    <ul className="space-y-4">
                        {cartItems.reduce((aggregatedItems, item) => {
                            const existingItem = aggregatedItems.find(uniqueItem => uniqueItem.id === item.id);

                            if (existingItem) {
                            existingItem.quantity += item.quantity;
                            } else {
                                aggregatedItems.push({ ...item });
                        
                            }

                            return aggregatedItems;

                        }, []).map((item, index) => (

                            <li className="bg-white shadow-md p-4 flex" key={index}>
                                <Image 
                                src={item.image}
                                alt={item.name}
                                width={100}
                                height={(200 * 3) / 4}
                                className="rounded-lg bg-gray-100" />
                    
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    {/* <p className="text-gray-600 mb-2">Price: ${item.price.toFixed(2)}</p> */}
                                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                                    <button onClick={() => removeFromCart(item.id)} 
                                        className="text-red-500 mt-2">
                                            Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>  
    );
};
  
export default Cart;
