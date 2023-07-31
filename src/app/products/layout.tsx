import ProductSearch from "./ProductSearch";

export default function ProductsLayout({ children }) {
  return (
    <>
      <div>
        <ProductSearch/> 
        {children}
        
      </div>
    </>
  );
}
