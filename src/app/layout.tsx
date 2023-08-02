import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>TechZone</title>
      </head>
      <body>

        <div className="fixed top-0 left-0 w-full z-50">
        <ResponsiveAppBar/> 
        </div>

        <div className="flex flex-col items-stretch justify-center bg-gray-200 mt-14">
          <div className="container lg:max-w-7xl sm:max-w-sm md:max-w-md mx-auto flex flex-wrap justify-center items-stretch min-h-screen p-6 bg-white rounded-lg shadow-lg">
                          
        {children}
          </div>
        </div>

        <div className="w-full z-50">
        <Footer/> 
        </div>
        

      </body>
    </html>
  );
}
