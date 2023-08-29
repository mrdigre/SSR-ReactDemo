
import { getProduct } from "@/lib/prisma";
import Image from "next/image";
import CartButton from "@/app/components/CartButton";


const ProductPage = async ({ params, product }) => {
  const fetchedProduct = await getProduct( params.id );
  
   return(


    <div className="bg-gray-100 mt-6 w-full"> 
        <div className="max-w-6xl sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4 p-2 shadow-lg items-center">
                <div className="md:flex-1">
                    <div className="ml-2 shadow-lg rounded-lg bg-white mb-4">
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
                
                {/* <div className="mb-4">
                    <span className="font-bold text-gray-700">Select Size:</span>
                    <div className="flex items-center mt-2">
                        <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">S</button>
                        <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">M</button>
                        <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">L</button>
                        <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">XL</button>
                        <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">XXL</button>
                    </div>
                </div> */}
                
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
    </div>
    
  );
};
export default ProductPage;