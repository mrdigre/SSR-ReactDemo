import { getProduct } from "@/lib/prisma";
import Image from "next/image";

const Page = async ({ params }) => {
  const products = await getProduct( params.id );

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
          <div className="flex flex-cols-2 text-zinc-700">
            <div className="p-4">
              <button>ADD TO CART</button>
            </div>
            <div className="p-4">
              QUANTITY
            </div>
          </div>
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