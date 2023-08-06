import { getProduct } from "@/lib/prisma";
import Image from "next/image";

const Page = async ({ params }) => {
  const products = await getProduct( params.id );
  
  return(
    <div className="bg-black mt-6 flex flex-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      
      <div>
        <div>
          {products.name}
        </div>
        <div>
          {products.model}
        </div>
        <div>
          {products.description}
        </div>
        <div>
          {products.price}
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
      
      <div>
        <Image
          src={products.image}
          alt={products.name}
          className="object-center"
          width={'100'}
          height={'100'}
        />
      </div>

    </div>
  );
};
export default Page;

