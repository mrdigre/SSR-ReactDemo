import { getProduct } from "@/lib/prisma";
import Image from "next/image";

const Page = async ({ params }) => {
  const products = await getProduct( params.id );

  return(
    <div className="text-black bg-gray-100 flex w-full border rounded-lg items-center justify-evenly relative mt-6 sm:flex-cols-1 lg:flex-cols-2 xl:gap-x-8">
      
      <div className="w-1/3 bg-white justify-center border border-2 rounded-lg">
        
        <div className="text-black bg-gray-100 flex w-full items-center">
          <h1 className="text-3xl font-semibold mb-2 text-center">
            {products.name} 
          </h1>
        </div>  

      <div>
        <h2> 
          {products.model} 
        </h2>
        <h3>
          {products.description} 
        </h3>
        <div className="text-xl font-bold text-right">
          ${products.price}
        </div>
      </div>

      <div>
        <div className="flex flex-cols-2">
          <div className="p-4">
            <button>ADD TO CART</button>
          </div>
          <div className="p-4">
            QUANTITY
          </div>
        </div>
      </div>
</div>
      <div className="w-1/3 min-h-[50%] bg-white flex justify-center items-center border border-2 rounded-lg">
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