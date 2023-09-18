import Image from "next/image";
import Link from "next/link";
import CartButton from "./CartButton";
import { Product } from "@prisma/client";

interface CardComponentProps {
  product: Product;
}

export default function CardComponent({ product }: CardComponentProps) {
  const { id, image, name, title, description, price } = product;

  return (
    <div key={id} className="group relative h-100 z-0">
      <div className="p-3 border rounded-lg overflow-hidden bg-white transform transition-all duration-200 hover:border-gray-400 hover:shadow-lg h-full">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            width={'300'}
            height={'300'}
          />
        </div>
        <h3 className="text-md mt-2 font-bold text-gray-700 group-hover:underline ">
              <Link href={`/products/${id}`}>
              
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
              
              </Link>
        </h3>
        
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        
        <div className="flex justify-between">
        <p className="mt-1 text-md font-bold text-gray-900 ">${price}</p>
        <CartButton product={product}/>
        </div>

      </div>
    </div>
  );
}
