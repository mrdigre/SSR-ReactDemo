'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import CardComponent from '@/app/components/CardComponent';

// default debounce function:
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default function ProductSearch() {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debouncedSearch = useDebounce(search, 500);

  // case sensitive "tolowercase" not working correctly

  const onSearch = async () => {
    setIsLoading(true);
    const url = 'http://localhost:3000/api/products';
    try {
      let response = await fetch(`${url}?q=${encodeURIComponent(search)}`);
      const data = await response.json();

      const searchQuery = search.toLowerCase();

      const filteredProducts = data.data.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
      );

      setFilteredProducts(filteredProducts);
      setIsLoading(false);
    } catch (e) {
      setFilteredProducts([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedSearch || search === '') {
      onSearch();
    }
  }, [debouncedSearch, search]); // eslint-disable-line

  return (
    <div className="bg-gray-200 w-full">
      <div className="mt-6 relative w-full">
        <input
          className="mt-4 px-5 py-2 w-full sm:px-5 sm:py-3 text-zinc-200 bg-zinc-600 focus:bg-zinc-800 rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-500"
          type="text"
          placeholder="What are you looking for?"
          value={search || ''}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {isLoading && (
        <div className="mt-2 flex justify-center my-4 text-gray-800">
          <span>Loading...</span>
        </div>
      )}
      {!isLoading && filteredProducts.length === 0 && (
        <div className="mt-2 flex justify-center my-4 text-gray-800">
          <span>No products found</span>
        </div>
      )}

      <div className="w-full mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {/* Render all products when searchCompleted is true */}
        {!isLoading &&
          filteredProducts.map(product => (
            <CardComponent key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

