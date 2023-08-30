
import { getProduct } from "@/lib/prisma";
import Image from "next/image";
import CartButton from "@/app/components/CartButton";


const ProductPage = async ({ params, product }) => {
  const fetchedProduct = await getProduct( params.id );
  
   return(
    

   
        <div className="mt-4 bg-gray-200 w-full">
            <div className="flex flex-col h-2/3 md:flex-row -mx-4 mt-6 p-6">
                <div className="flex justify-center items-center md:flex-1 bg-white shadow-lg rounded-lg">
                    
                    <div className="flex items-center justify-center p-4 rounded-lg ">
                        <Image
                            src={fetchedProduct.image}
                            alt={fetchedProduct.name}
                            width={"300"}
                            height={"300"}
                        />
                    </div>
                    
                </div>
                
                <div className="md:flex-1 px-4 mt-4">
                    <h2 className="text-2xl text-gray-600 font-bold mb-2">{fetchedProduct?.name}</h2>
                    <p className="text-gray-600 text-sm mb-4"> {fetchedProduct?.description} </p>
                        <div className="flex mt-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700">Price:</span>
                                <span className="text-gray-600"> ${fetchedProduct?.price} </span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700">Stock:</span>
                                <span className="text-gray-600"> {fetchedProduct?.stock} </span>
                            </div>
                        </div>
                
                
                
                        <div>
                            <span className="font-bold text-gray-700 mt-2">Product Description:</span>
                            <p className="text-gray-600 text-sm mt-2"> {fetchedProduct?.description} </p>
                        </div>
                <div className="flex -mx-2 mb-4 mt-4">
                        <div className="w-1/2">
                            <CartButton product={fetchedProduct} />
                        </div>
                        {/*   ADD TO WISH LIST BTN?   */}
                        {/* <div className="w-1/2 px-2">
                            <button className="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">Add to Wishlist</button>
                        </div> */}
                </div>
            </div>


                                
            </div>
        </div>
   
    
  );
};
export default ProductPage;