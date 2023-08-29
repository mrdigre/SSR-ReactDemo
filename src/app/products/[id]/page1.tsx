
import { getProduct } from "@/lib/prisma";
import Image from "next/image";
import CartButton from "@/app/components/CartButton";


const ProductPage = async ({ params, product }) => {
  const fetchedProduct = await getProduct( params.id );
  
   return(
    <div className="border flex bg-gray-200 w-full items-center mt-6 sm:flex-cols-1 lg:flex-cols-2 ">
      
      <div className="h-[50%] justify-center bg-gray-200">
        
        <div className="w-full items-start mt-2">
          <h1 className="text-zinc-900 text-4xl font-bold">
            {fetchedProduct.name} 
          </h1>
        </div>  

        <div className="text-zinc-700 mt-4">
          <h2 className="font-semibold text-2xl mt-4"> 
            {fetchedProduct.model} 
          </h2>
          <h3 className="text-xl mt-8">
            {fetchedProduct.description} 
          </h3>
          <div className="text-xl mt-8">
            Price: ${fetchedProduct.price}
          </div>
          <div className="text-lg underline italic mt-6 text-blue-400">
            <p>Join us to get a 10% discount</p>
          </div>
        </div>

        <div>
          
          {/* ADD TO CART BUTTON */}

          <div className="flex flex-cols-2 text-zinc-700 mt-8 items-center">
            <div className="mt-4">
             <CartButton product={fetchedProduct} />
            </div>
            <div className="mt-4 text-right">
              Select Quantity
              <input type="number" className="border rounded-lg px-2 py-2 w-1/4 ml-4">
              </input>
            </div>
          </div>
        </div>  
      </div>
      
      <div className="w-1/2 flex bg-gray-200 justify-center">
        <div className="h-[40%] p-6 bg-white flex justify-center items-center border border-2 rounded-lg shadow-lg">
          
          <Image
            src={fetchedProduct.image}
            alt={fetchedProduct.name}
            width={'500'}
            height={'500'}
          />

        </div>  
      </div>
      

    </div>
    
  );
};
export default ProductPage;