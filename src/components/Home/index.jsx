import { useEffect, useState } from "react";
import { BREAKPOINT } from "../../constants";
import { FilledImage, StyledDiv } from "../../globalStyles";
import {
  ActionButton,
  BgImg,
  Coin,
  HomeContainer,
  TermsContainer,
} from "./styles";

export default function Home() {
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
    <HomeContainer>
      <BgImg
        src={`HomePromoteBanner${winW <= BREAKPOINT ? "mobile" : ""}.png`}
      />
      {winW <= BREAKPOINT ? (
        <>
          <FilledImage src="Web3TextMobile.png" />
        </>
      ) : (
        <StyledDiv margin="0 40vw 0 0">
          <StyledDiv width="100%" height="15vh" margin="0 0 15px 0">
            <FilledImage src="web3Text.png" objectPosition="left" />
          </StyledDiv>
        </StyledDiv>
      )}
      <ActionButton>
        開始遊戲
        <Coin src="image.svg" />
      </ActionButton>
      <TermsContainer>
        條款及細則： - Chaingate保留最終決定權。
        <br />
        -
        Chaingate保留權利可隨時修改本條款及細則、更改或終止獎賞活動而毋須預先通知。
        <br />
        - Chaingate現階段只提供網頁版試用版， Chaingate
        App將會於2023年第4季度推出。
        <br />
        -
        Chaingate會員得到NFT白名單資格後，請自行以加密貨幣錢包確認其NFT擁有權。
        <br />
        *只首5,000 名完成登記之會員，送完即止。
      </TermsContainer>
    </HomeContainer>
  );
}
