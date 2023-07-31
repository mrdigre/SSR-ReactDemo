import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>TechZone</title>
      </head>
      <body>
        <ResponsiveAppBar/> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
