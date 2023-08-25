
import { getProduct } from "@/lib/prisma";
import Image from "next/image";
import CartButton from "@/app/components/CartButton";


const ProductPage = async ({ params, product }) => {
  const fetchedProduct = await getProduct( params.id );
  
   return(
    <div className="bg-white flex w-full items-center sm:flex-cols-1 lg:flex-cols-2 xl:gap-x-8">
      
      <div className="w-1/3 justify-center">
        
        <div className="text-zinc-900 bg-white flex w-full">
          <h1 className="text-4xl font-bold mt-2 ">
            {fetchedProduct.name} 
          </h1>
        </div>  

        <div className="text-zinc-700">
          <h2 className="font-semibold text-2xl p-2"> 
            {fetchedProduct.model} 
          </h2>
          <h3 className="text-2xl p-2">
            {fetchedProduct.description} 
          </h3>
          <div className="text-2xl font-bold text-left p-2 mt-4">
            ${fetchedProduct.price}
          </div>
          <div className="text-lg underline italic p-2 text-blue-400 flex justify-center">
            <p>Join us to get a 10% discount</p>
          </div>
        </div>

        <div>
          
          {/* ADD TO CART BUTTON */}

          <div className="flex flex-cols-2 text-zinc-700 ">
            <div className="p-4">
             <CartButton product={fetchedProduct} />
            </div>
            <div className="p-2 text-right">
              QUANTITY
              <input type="number" className="border rounded-lg px-2 py-2 w-1/4 ml-4">
              </input>
            </div>
          </div>
        </div>  
      </div>
      
      <div className="w-1/3 min-h-[50%] bg-white flex justify-center items-center border border-2 rounded-lg drop-shadow-md">
        <div className="p-6">
          <Image
            src={fetchedProduct.image}
            alt={fetchedProduct.name}
            className="object-center"
            width={'500'}
            height={'500'}
          />
        </div>
      </div>
    </div>
    
  );
};
export default ProductPage;