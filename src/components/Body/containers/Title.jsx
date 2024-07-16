import { FilledImage, FlexDiv, StyledSpan } from "../../../globalStyles";
import { TitleStars } from "../styles";

export default function Title({ children }) {
  return (
    <FlexDiv $gap="20" margin="120px 0 0 0" style={{ width: "max-content" }}>
      <TitleStars>
        <FilledImage src="star1.png" />
      </TitleStars>
      <StyledSpan color="#544635" fontSize="100" sx={{ fontSize: "50" }}>
        {children}
      </StyledSpan>
      <TitleStars>
        <FilledImage src="star1.png" />
      </TitleStars>
    </FlexDiv>
  );
}
