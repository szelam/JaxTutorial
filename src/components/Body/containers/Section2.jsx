import { BREAKPOINT } from "../../../constants";
import { FilledImage, FlexDiv, StyledDiv } from "../../../globalStyles";
import { LionContainer, S2 } from "../styles";
import OfferCard from "./OfferCard";

export default function Section2({ winW }) {
  return (
    <S2>
      {winW > BREAKPOINT && (
        <>
          <StyledDiv
            width="76px"
            height="113px"
            position="absolute"
            top="-40px"
            left="20px"
          >
            <FilledImage src="star1.png " />
          </StyledDiv>
          <StyledDiv
            width="43px"
            height="73px"
            position="absolute"
            right="60px"
            bottom="90px"
          >
            <FilledImage src="star3.png " />
          </StyledDiv>
          <StyledDiv
            width="65px"
            height="135px"
            position="absolute"
            right="0px"
            bottom="-50px"
          >
            <FilledImage src="star2.png " />
          </StyledDiv>
        </>
      )}

      <FlexDiv margin={winW <= BREAKPOINT ? "0" : "0 80px -15px 0"}>
        <LionContainer>
          <FilledImage src="lion01.png" />
        </LionContainer>
        {winW > BREAKPOINT && (
          <StyledDiv width="453px" height="153px">
            <FilledImage src="monthlyText.png" />
          </StyledDiv>
        )}
      </FlexDiv>
      <FlexDiv $gap="20" sx={{ flexDirection: "column" }}>
        <OfferCard title="7月優惠" name="XXXX" offer="30%" />
        <OfferCard title="7月優惠" name="XXXX" offer="$100" />
        <OfferCard title="7月優惠" name="XXXX" offer="50%" last />
      </FlexDiv>
    </S2>
  );
}
