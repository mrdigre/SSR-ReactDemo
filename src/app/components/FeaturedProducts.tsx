// fetch

import { getProducts } from "@/lib/prisma";
import CardComponent from "./CardComponent";

const FeaturedProducts = async () => {
  const products = await getProducts({ take: 4 });

  console.log(products);
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 h-full">

      {products.map((product) => (
        <CardComponent
          id={product.id}
          key={product.id}
          name={product.name}
          title={product.title}
          model={product.model}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}

    </div>
  );
};

export default FeaturedProducts;
