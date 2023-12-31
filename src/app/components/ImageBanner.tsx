import Image from 'next/image';

export default function ImageBanner() {
  return (
    <div className="bg-gray-100 border rounded-lg overflow-hidden">
      <div className="mx-auto max-w-xl flex flex-col justify-center items-center gap-4 px-2 py-2 sm:px-4 sm:py-6 lg:max-w-7xl lg:flex-row lg:px-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-7xl text-gray-700">
            Welcome to Tech Zone!
          </h2>
          <p className="text-justify mr-16 mt-4 sm:text-xl text-gray-400">
            We&apos;re your go-to home webstore for the latest and greatest tech
            products. Discover innovation at its finest with our carefully
            curated selection of cutting-edge gadgets and accessories. From
            smartphones to smart home devices, we&apos;ve got what you need to
            elevate your digital lifestyle. Shop now and experience the future
            with TechZone!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/banner.jpeg"
            width={1200}
            height={1200}
            alt="Image"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}

