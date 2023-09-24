'use client';
import { useCart } from '../contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
  const { cartItems, removeFromCart, totalQuantity, modifyProductQuantity } =
    useCart();
  const showMessageIfEmptyCart = totalQuantity === 0;

  return (
    <div className="flex flex-col bg-white w-full text-black mt-6 p-2">
      <header className="bg-white rounded-md border-gray-500">
        <h1 className="text-3xl font-bold text-left py-4">
          {totalQuantity} products currently in Cart!
        </h1>
        {showMessageIfEmptyCart && (
          <p className="text-2xl text-bold py-4 text-neutral-600">
            No items currently in cart!
          </p>
        )}
        {showMessageIfEmptyCart && (
          <p className="text-md mt-4 italic text-neutral-600">
            Go to the{' '}
            <Link href="/products" className="font-bold hover:text-black">
              Products
            </Link>{' '}
            section to add products
          </p>
        )}
      </header>

      <main className="flex flex-col w-full px-4 py-2 md:px-8 bg-white mt-4">
        <section>
          <ul className="space-y-2">
            {cartItems.map((item, index) => (
              <li className="bg-white shadow-md p-4 rounded-md" key={index}>
                <div className="flex flex-row w-full ">
                  <div className="flex flex-col items-center justify-center w-1/4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={50}
                      className="rounded-lg bg-gray-100 mt-4"
                    />
                  </div>

                  <div className="flex flex-col justify-left w-1/3">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-gray-600 mb-2 font-bold">
                      Price: ${item.price.toFixed(2)}
                    </p>

                    <div className="flex flex-row text-gray-600">
                      <p className="pr-2">Quantity:</p>
                      <button
                        className="px-2 font-bold bg-gray-400 border-gray-200 rounded-md hover:bg-sky-300 text-white items-center"
                        onClick={() => {
                          if (item.quantity > 1) {
                            modifyProductQuantity(item.id, item.quantity - 1);
                          } else {
                            removeFromCart(item.id);
                          }
                        }}
                      >
                        -
                      </button>
                      <p className="font-bold px-2">{item.quantity}</p>
                      <button
                        className="px-2 font-bold bg-gray-400 border-gray-200 rounded-md hover:bg-sky-300 text-white items-center"
                        onClick={() =>
                          modifyProductQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 ml-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <div className="flex w-3/4 justify-end text-bold">Subtotal:</div>
    </div>
  );
};

export default Cart;

