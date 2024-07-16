import {
  FilledImage,
  FlexDiv,
  StyledDiv,
  StyledSpan,
} from "../../globalStyles";
import { ActionButton, Banner, Foot } from "./styles";

export default function Footer() {
  return (
    <Foot>
      <Banner src="banner_02.png" />
      <FlexDiv>
        <StyledSpan fontSize="20" margin=" 0 25px 0 0">
          成為Chaingate會員，尊享
          <StyledSpan color="#EA7500" $fontWeight="600">
            無盡優惠
          </StyledSpan>
        </StyledSpan>
        <ActionButton>
          <StyledDiv width="42px" height="33px">
            <FilledImage src="whiteicon.png" />
          </StyledDiv>
          成為會員
        </ActionButton>
      </FlexDiv>
      <StyledSpan fontSize="12">
        | <a>條款及細則</a> | <a>私隱政策</a> | <a>聯絡我們: xxxx xxxx</a> |
      </StyledSpan>
      <StyledSpan fontSize="9">Copyright© owned by Chaingate</StyledSpan>
    </Foot>
  );
}
