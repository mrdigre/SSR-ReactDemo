import ImageBanner from './components/ImageBanner';
import FeaturedProducts from './components/FeaturedProducts';
import StoreBanner from './components/StoreBanner';

export default function HomePage() {
  return (
    <div className="p-4">
      {<ImageBanner />}
      {/* @ts-expect-error Server Component */}
      <FeaturedProducts />
      {/* @ts-expect-error Server Component */}
      <StoreBanner />
    </div>
  );
}

