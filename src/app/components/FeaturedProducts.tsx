// fetch

import { getProducts } from "@/lib/prisma";
import CardComponent from "./CardComponent";

const FeaturedProducts = async () => {
  const products = await getProducts({ take: 4 });

  console.log(products);
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 h-100">

      {products.map((product) => (
        <CardComponent
          product={product}
        />
      ))}

    </div>
  );
};

export default FeaturedProducts;
