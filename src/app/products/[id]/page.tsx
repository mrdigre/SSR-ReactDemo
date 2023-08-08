"use client"
import { getProduct } from "@/lib/prisma";
import Image from "next/image";

const Page = async ({ params }) => {
  const products = await getProduct( params.id );

  
    const handleClick = () => {
      // This function will be executed when the button is clicked
      alert('Button clicked!'); // Replace this with your desired functionality
    }

  return(
    <div className="bg-gray-100 flex w-full border rounded-lg items-center justify-evenly relative mt-6 sm:flex-cols-1 lg:flex-cols-2 xl:gap-x-8">
      
      <div className="w-1/3 bg-gray-100 justify-center drop-shadow-md">
        
        <div className="text-zinc-900 bg-white border rounded-lg flex justify-center w-full items-center">
          <h1 className="text-4xl font-bold mb-2 text-center">
            {products.name} 
          </h1>
        </div>  
        <div className="text-zinc-700">
          <h2 className="font-semibold text-2xl p-2"> 
            {products.model} 
          </h2>
          <h3 className="text-2xl p-2">
            {products.description} 
          </h3>
          <div className="text-2xl font-bold text-left p-2 mt-4">
            ${products.price}
          </div>
          <div className="text-lg underline italic p-2 text-blue-400 flex justify-center">
            <p>Join us to get a 10% discount</p>
          </div>
        </div>

        <div>
          
          /* ADD TO CART BUTTON */

          <div className="flex flex-cols-2 text-zinc-700 ">
            <div className="p-4">
              <button onClick={handleClick} className="border hover:bg-gray-800 bg-gray-500  text-white">ADD TO CART</button>
            </div>
            <div className="p-2 text-right">
              QUANTITY
              <input type="number" className="border rounded-lg px-2 py-2 w-1/4 ml-4">
              </input>
            </div>
          </div>
        </div>

        <div className="text-black text-center">
          <h1>CART</h1>
          <li>
            /* Cart List */
          </li>
        </div>
      </div>
      
      <div className="w-1/3 min-h-[50%] bg-white flex justify-center items-center border border-2 rounded-lg drop-shadow-md">
        <div className="p-6">
          <Image
            src={products.image}
            alt={products.name}
            className="object-center"
            width={'500'}
            height={'500'}
          />
        </div>
      </div>
    </div>
    
  );
};
export default Page;