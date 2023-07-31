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

        <div className="flex flex-col items-center justify-center sm:mx-0 md:mx-8 lg:mx-12 ">
          <div className="lg:max-w-7xl sm:max-w-sm md:max-w-md mx-auto px-6 py-12 bg-white rounded-lg shadow-lg">
        {children}
          </div>
        </div>
        
        <Footer/>

      </body>
    </html>
  );
}
