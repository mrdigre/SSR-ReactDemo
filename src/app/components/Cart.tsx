'use client'
import { useCart } from "../contexts/CartContext"

const Cart = () => {
    const { cartItems } = useCart();
  
    return (
        <div className="flex flex-col w-2/3 bg-gray-100 text-gray-800">
            <header className="bg-white py-4 shadow">
                <h1 className="text-2xl font-bold text-center">Shopping Cart</h1>
            </header>
            
            <main className="flex-1 px-4 py-8 md:px-8">
                <section className="max-w-3xl mx-auto">
                    <ul className="space-y-4">
                       {cartItems.map((item, index) => (
                            <li className="bg-white shadow-md p-4 flex" key={index}>
                                <img className="w-20 h-20 object-cover mr-4" src={item.image} alt={item.name} />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <p className="text-gray-600 mb-2">Price: ${item.price.toFixed(2)}</p>
                                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                                        <button className="text-red-500 mt-2">Remove</button>
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
