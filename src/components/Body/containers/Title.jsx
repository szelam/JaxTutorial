import { FilledImage, FlexDiv, StyledSpan } from "../../../globalStyles";
import { TitleStars } from "../styles";

export default function Title({ children, ...props }) {
  return (
    <FlexDiv
      {...props}
      $gap="20"
      margin="120px 0 0 0"
      style={{ width: "max-content" }}
      sx={{ margin: "60px 0 0 0" }}
    >
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
