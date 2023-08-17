import Image from "next/image";
import Link from "next/link";

export default function CardComponent({
  id,
  name,
  title,
  description,
  price,
  image,
}) {
  return (
    <div key={id} className="group relative h-100">
      <div className="p-4 border rounded-lg overflow-hidden bg-white transform transition-all duration-200 hover:border-gray-400 hover:shadow-lg h-full">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            width={'300'}
            height={'300'}
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700 group-hover:underline ml-2">
              <Link href={`/products/${id}`}>
              
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
              
              </Link>
            </h3>

            <p className="mt-1 text-sm text-gray-500 ml-2">{description}</p>
          </div>
          <p className="text-lg font-bold text-gray-900 mr-2">${price}</p>
        </div>
      </div>
    </div>
  );
}
