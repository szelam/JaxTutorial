import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import UseMobile from "./components/UseMobile";

function App() {
  const [winW, setWinW] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWinW(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {winW <= 1200 ? (
        <>
          <Navbar winW={winW} />
          <Header winW={winW} />
          <Body winW={winW} />
          <Footer winW={winW} />
        </>
      ) : (
        <UseMobile />
      )}
    </>
  );
}

export default App;
