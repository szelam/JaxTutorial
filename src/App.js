import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    console.log(navigator.userAgent);
    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <Navbar />
          <Header />
          <Body />
          <Footer />
        </>
      ) : (
        <div>Mobile</div>
      )}
    </>
  );
}

export default App;
