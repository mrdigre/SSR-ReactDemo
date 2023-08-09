// "use client";

import ImageBanner from "./components/ImageBanner";
import "./globals.css";
import FeaturedProducts from "./components/FeaturedProducts";
import StoreBanner from "./components/StoreBanner";



export default function HomePage({  }) {
  return (
    <div className="p-4">
      {<ImageBanner />}
      {/* @ts-expect-error Server Component */}
      
      
      <FeaturedProducts />
      <StoreBanner />
      
      
      
    </div>
  );
}

// Usar https://www.firstleaf.club/ de inspiración..
