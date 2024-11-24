import "./globals.css";
import Header from "./components/headerComponent"
import Navigation from "./components/navComponent";
import Footer from "./components/footerComponent";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Navigation/>
        <div style={{ maxWidth: '1980px', height: '100%', margin: '0 auto'}}>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
