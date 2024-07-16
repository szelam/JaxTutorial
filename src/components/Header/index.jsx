import { BREAKPOINT } from "../../constants";
import { FilledImage, StyledDiv, StyledSpan } from "../../globalStyles";
import { ActionButton, BgImg, Coin, Head } from "./styles";

export default function Header({ winW }) {
  return (
    <Head>
      <BgImg
        src={`HomePromoteBanner${winW <= BREAKPOINT ? "mobile" : ""}.png`}
      />
      {winW <= BREAKPOINT ? (
        <>
          <FilledImage src="Web3TextMobile.png" />
        </>
      ) : (
        <StyledDiv margin="0 420px 0 0">
          <StyledDiv width="100%" height="210px" margin="0 0 15px 0">
            <FilledImage src="web3Text.png" />
          </StyledDiv>
        </StyledDiv>
      )}
      <ActionButton>
        開始遊戲
        <Coin src="image.svg" />
      </ActionButton>
      <StyledSpan
        color="#5550E8"
        margin={winW <= BREAKPOINT ? "35px 35px 160px 35px" : `150px 0 0 0`}
        fontSize={winW <= BREAKPOINT ? "9" : "12"}
      >
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
      </StyledSpan>
    </Head>
  );
}
