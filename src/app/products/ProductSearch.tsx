"use client";
import { useState, useEffect } from "react";
import CardComponent from "@/app/components/CardComponent";
import { clearTimeout } from "timers";

export default function ProductSearch() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean >(false)
  

  const onSearch = async (e: React.FormEvent) => {
   // e.preventDefault();
    setIsLoading(true);
    const url = "http://localhost:3000/api/products";
    try {
      let response = await fetch(`${url}?q=${encodeURIComponent(search)}`);
      const data = await response.json();
      const filteredProducts = data.data; // ya estaba definida esta variable en el useState?
      setFilteredProducts(filteredProducts);
      setIsLoading(false);
    } catch (e) {
      console.log("error");
      setFilteredProducts([]);
      setIsLoading(false);
    } 
  };

  // por que aca si se puede usar el async await?

  useEffect(() => {
    // TO DO: Debounce search handler 
    onSearch();
    
    
  // Cleanup  
  }, [search]);

  return (
    <div className="search-bar">
      <div>
        <input
          className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
          type="text"
          placeholder="What are you looking for?"
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      
      <div>-----</div>

      {isLoading && (<div className="flex justify-center my-4"><span>Loading...</span></div>)}
      {(!isLoading && filteredProducts.length === 0) && <span>No products found</span>}

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {/* Render all products when searchCompleted is true */}
        {!isLoading && 
          filteredProducts.map((product) => (
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
    </div>
  );
}



// Actualizar valor de input -- ok
// Como pasar ese valor de búsqueda a la api -- ok
// Crer la api que obtenga esa búsqueda y devuelva valor --- ok
// Cómo

/**
 * TODO:
 * - Loading: mostrar cuando la api está cargando
 * - Error: Si hay un error de la api mostrar algún mensaje al usuario
 */
