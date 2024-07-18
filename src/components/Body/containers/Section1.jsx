import {
  FilledImage,
  FlexDiv,
  StyledDiv,
  StyledSpan,
} from "../../../globalStyles";
import {
  BigCardContainer,
  Box,
  CardsContainer,
  S1,
  S1BgImg,
  S1InfinityImg,
} from "../styles";
import DisplayCard from "./DisplayCard";

export default function Section1() {
  return (
    <S1 id="about">
      <S1BgImg src="top_bg-1.png" />
      <FlexDiv $gap="20" sx={{ flexDirection: "column" }}>
        <StyledDiv height="113px" sx={{ height: "197px" }} margin=" 0 0 20px 0">
          <FilledImage src="circleIcon.png" />
        </StyledDiv>
        <StyledDiv width="460px" sx={{ width: "100%" }} height="127">
          <FilledImage src="circleIconText.png" />
        </StyledDiv>
        {/* <H2>
          <StyledSpan color="#5550E8">
            初嘗<StyledSpan color="#EA7500">元宇宙</StyledSpan>,
            <br />
            啓動<StyledSpan color="#EA7500">去中心化</StyledSpan>之旅！
          </StyledSpan>
        </H2> */}
      </FlexDiv>
      <StyledSpan fontSize="20" color="#181560" $fontWeight="300">
        Chaingate 作為首個本地食·玩·賞Web3
        平台APP，不但帶你初嘗元宇宙虛擬新世界，同時連接現實世界，等你同時穿梭兩個世界食·玩·賞不分界限，一
        APP 在手，完成任務，玩遊戲，抽NFT，著數優惠無限大！
      </StyledSpan>
      <BigCardContainer>
        <Box big>
          <StyledDiv margin="0 0 10px 0">
            <FilledImage src="nft.png" />
          </StyledDiv>
          <StyledSpan fontSize="35">NFT=無限優惠</StyledSpan>
          <StyledSpan
            fontSize="22"
            $textDecoration="underline"
            margin="0 0 5px 0"
          >
            Chaingate
          </StyledSpan>
          <StyledSpan fontSize="20" color="#5550E8">
            2.4 ETH
          </StyledSpan>
        </Box>
        <StyledDiv sx={{ display: "none" }}>
          <DisplayCard text="獨家獎賞" image="gift.png" />
        </StyledDiv>
        <S1InfinityImg src="top_bg02.png" />
      </BigCardContainer>
      <CardsContainer>
        <StyledDiv sx={{ display: "block" }} display="none">
          <DisplayCard text="獨家獎賞" image="gift.png" />
        </StyledDiv>
        <DisplayCard text="VIP通行" image="vip.png" />
        <DisplayCard text="現金回贈" image="money.png" />
        <DisplayCard text="折扣優惠" image="discount.png" />
      </CardsContainer>
    </S1>
  );
}
