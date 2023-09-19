import ImageBanner from './components/ImageBanner';
import FeaturedProducts from './components/FeaturedProducts';
import StoreBanner from './components/StoreBanner';

type HomePageProps = {};

export default function HomePage({}: HomePageProps) {
  return (
    <div className="p-4">
      {<ImageBanner />}
      {/* @ts-expect-error Server Component */}
      <FeaturedProducts />
      <StoreBanner />
    </div>
  );
}

