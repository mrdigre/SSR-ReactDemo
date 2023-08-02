import Image from "next/image";
import { getProducts } from "@/lib/prisma";
import Link from "next/link";

const StoreBanner = async () => {
  const products = await getProducts({ take: 2 });

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-32 pt-8 sm:pb-16 sm:pt-12 lg:pb-24 lg:pt-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The best tech hardware is here for you.
            </h1>
            <p className="mt-4 text-xl text-gray-900">
              This year, our tech products will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                      >
                        <Image
                          src={product.image}
                          alt=""
                          className="object-cover object-center"
                          width={300}
                          height={300}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href={`/products`}
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreBanner;
