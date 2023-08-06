import { getProduct } from "@/lib/prisma";
import Image from "next/image";

const Page = async ({ params }) => {
  const products = await getProduct( params.id );
  
  return(
    <div className="text-black bg-gray-200 w-full items-center relative mt-6 flex gap-x-6 gap-y-10 sm:flex-cols-1 lg:flex-cols-2 xl:gap-x-8">
      
      <div className="w-full sm:w-1/2 bg-white">
        <h1 className="text-3xl font-semibold mb-2 text-center"> {products.name} </h1>
        <h2> {products.model} </h2>
        <h3> {products.description} </h3>
        <div className="text-xl font-bold text-right">
          ${products.price}
        </div>
        <div className="flex flex-cols-2">
          <div className="p-4">
            <button>ADD TO CART</button>
          </div>
          <div className="p-4">
            QUANTITY
          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-center">
        <div className="w-full sm:w-1/2">
          <Image
            src={products.image}
            alt={products.name}
            className="object-center"
            width={'300'}
            height={'300'}
          />
        </div>
      </div>
    
    </div>
  );
};
export default Page;

