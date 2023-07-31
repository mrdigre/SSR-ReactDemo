import Image from "next/image";
import Link from "next/link";

export default function CardComponent({
  id,
  name,
  title,
  model,
  description,
  price,
  image,
}) {
  return (
    <div key={id} className="group relative">
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
          <h3 className="text-sm text-gray-700">
            <Link href={`/products/${id}`}>
            
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            
            </Link>
          </h3>

          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
}
