import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UseMobile from "./components/UseMobile";
import { ContentContainer } from "./globalStyles";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= window.innerHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <ContentContainer>
            <Navbar open={open} setOpen={setOpen} />
            <Dropdown open={open} setOpen={setOpen} />
            <Home />
            <Body />
            <Footer />
          </ContentContainer>
        </>
      ) : (
        <UseMobile />
      )}
    </>
  );
}

export default App;
