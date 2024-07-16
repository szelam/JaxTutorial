import { FilledImage, FlexDiv, StyledDiv } from "../../../globalStyles";
import { LionContainer, S2 } from "../styles";
import OfferCard from "./OfferCard";

export default function Section2() {
  return (
    <S2>
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

      <FlexDiv margin="0 80px -15px 0">
        <LionContainer>
          <FilledImage src="lion01.png" />
        </LionContainer>
        {/* <div>
          <OutlinedText fontSize="40">
            每月為你帶來源源不絕嘅驚喜,獨家禮遇等住你!
          </OutlinedText>
          <br />
          <OutlinedText fontSize="30">
            獨家優惠不斷更新，請密切留意
          </OutlinedText>
        </div> */}

        <StyledDiv width="453px" height="153px">
          <FilledImage src="monthlyText.png" />
        </StyledDiv>
      </FlexDiv>
      <FlexDiv $gap="20">
        <OfferCard title="7月優惠" name="XXXX" offer="30%" />
        <OfferCard title="7月優惠" name="XXXX" offer="$100" />
        <OfferCard title="7月優惠" name="XXXX" offer="50%" />
      </FlexDiv>
    </S2>
  );
}
