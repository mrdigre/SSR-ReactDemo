
import { getProducts } from "@/lib/prisma";
import CardComponent from "@/app/components/CardComponent";
import { GetStaticProps, GetStaticPaths } from "next";

const ProductPage = async () => {
  const products = await getProducts(  );

  
  return (
    
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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

  )
}

export default ProductPage;


    // <div>Product page</div>


    // <div className="bg-white">
    //   <div className="pt-6">
    //     {/* Image gallery */}
    //     <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
    //       <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
    //         <Image
    //           src={products.image}
    //           alt={products.name}
    //           className="h-full w-full object-cover object-center"
    //           width={'900'}
    //           height={'900'}
    //         />
          
    //     </div>

    //     {/* Product info */}
    //     <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
    //       <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
    //         <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{products.name}</h1>
    //       </div>

    //       {/* Options */}
    //       <div className="mt-4 lg:row-span-3 lg:mt-0">
    //         <h2 className="sr-only">{products.model}</h2>
    //         <p className="text-3xl tracking-tight text-gray-900">{products.price}</p>

    //         <form className="mt-10">
                            

    //           <button
    //             type="submit"
    //             className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    //           >
    //             Add to bag
    //           </button>
    //         </form>
    //       </div>

    //       <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
    //         {/* Description and details */}
    //         <div>
    //           <h3 className="sr-only">Description</h3>

    //           <div className="space-y-6">
    //             <p className="text-base text-gray-900">{products.description}</p>
    //           </div>
    //         </div>

            
            
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
  








