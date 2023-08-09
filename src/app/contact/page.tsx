export default function Contact() {
    return( 
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="bg-white py-4 shadow">
            <h1 className="text-2xl font-bold text-center">Shopping Cart</h1>
            </header>
            <main className="flex-1 px-4 py-8 md:px-8">
            <section className="max-w-3xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                <ul className="space-y-4">
                <li className="bg-white shadow-md p-4 flex">
                    <img className="w-20 h-20 object-cover mr-4" src="product1.jpg" alt="Product 1" />
                    <div className="flex-1">
                    <h3 className="text-lg font-semibold">Product Name</h3>
                    <p className="text-gray-600 mb-2">Price: $XX.XX</p>
                    <p className="text-gray-600">Quantity: 2</p>
                    <button className="text-red-500 mt-2">Remove</button>
        </div>
                </li>
                 {/* Add more cart items as needed */}
                </ul>
            </section>
            <section className="max-w-3xl mx-auto mt-8">
                <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
                <p className="text-gray-600 mb-2">Total Items: 5</p>
                <p className="text-gray-600">Total Price: $XX.XX</p>
                <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded">Checkout</button>
            </section>
            </main>
                <footer className="bg-gray-200 py-2 text-center">
                   <p className="text-gray-600">&copy; 2023 Your Store</p>
                </footer>
        </div>
    );  
};
        
        
        

        
