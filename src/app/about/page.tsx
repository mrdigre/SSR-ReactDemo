import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-300">
      
      <div className="lg:max-w-7xl sm:max-w-sm md:max-w-md mx-auto px-6 py-12 bg-white rounded-lg shadow-lg">
      
        {/* First Row */}
        <div className="p-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-700 py-2">The latest and
            best tech products</h2> 
          <h3 className="text-2xl text-gray-700 p-2 px-8">Our team of experts
           carefully curates the products in our store to ensure they meet the
          highest standards of quality and innovation.
          </h3>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row p-4">
          {/* Left Column */}
          <div className="flex-1 p-4 flex justify-center">
            <p className="text-gray-600 px-6 text-justify">Whether you're a tech enthusiast looking for the latest gadgets or a professional seeking cutting-edge
              solutions for your work, TechZone is your ultimate tech retail destination. We strive to offer an unbeatable
              selection of products, expert advice, and top-notch customer service to make your shopping experience
              exceptional.</p>
          </div>

          {/* Right Column */}
          <div className="flex-1 p-4 flex justify-center">
          <Image
            src="/tech.jpeg"
            width={500}
            height={500}
            alt="Image"
            className="rounded-lg bg-gray-100"
          />
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col md:flex-row p-4 py-6">
          {/* Left Column */}
          <div className="flex-1 p-4">
            <img
              className="w-full h-auto rounded-lg"
              src="/your-image.jpg"
              alt="Image"
            />
          </div>

          {/* Right Column */}
          <div className="flex-1 p-4">
            <p className="text-gray-600 px-6 text-justify">Join our growing community of tech lovers and stay connected with the latest trends and innovations in the
    world of technology. We're here to help you embrace the future of tech shopping!</p>
          </div>
        </div>

        </div>
    </div>
  );
}
