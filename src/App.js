import styled from "styled-components";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import UseMobile from "./components/UseMobile";

export const ContentContainer = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`;

function App() {
  return (
    <>
      <ContentContainer>
        <Navbar />
        <Header />
        <Body />
        <Footer />
      </ContentContainer>
      <UseMobile />
    </>
  );
}

export default App;
