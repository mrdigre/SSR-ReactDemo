'use client';
import { useCart } from '../contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
  const { cartItems, removeFromCart, totalQuantity, modifyProductQuantity } =
    useCart();
  const showMessageIfEmptyCart = totalQuantity === 0;

  return (
    <div className="flex flex-col bg-black w-full text-black mt-6 p-2">
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

      <main className="flex flex-col w-full px-4 py-8 md:px-8 bg-white mt-4">
        <section>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li className="bg-white shadow-md p-4" key={index}>
                <div className="flex flex-row w-full ">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={100}
                      className="rounded-lg bg-gray-100 mt-4"
                    />
                  </div>

                  <div className="flex items-center justify-right">
                    {/* <p className="text-gray-600 mb-2">Price: ${item.price.toFixed(2)}</p> */}

                    <button
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

                    <p className="text-gray-600">Quantity: {item.quantity}</p>

                    <button
                      onClick={() =>
                        modifyProductQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  {/* remove button */}
                  <div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 mt-2"
                    >
                      Remove
                    </button>
                  </div>
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

