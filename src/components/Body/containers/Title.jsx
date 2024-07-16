import {
  FilledImage,
  FlexDiv,
  StyledDiv,
  StyledSpan,
} from "../../../globalStyles";

export default function Title({ children }) {
  return (
    <FlexDiv $gap="20" margin="120px 0 0 0">
      <StyledDiv width="50px" height="66px">
        <FilledImage src="star1.png" />
      </StyledDiv>
      <StyledSpan color="#544635" fontSize="100">
        {children}
      </StyledSpan>
      <StyledDiv width="50px" height="66px">
        <FilledImage src="star1.png" />
      </StyledDiv>
    </FlexDiv>
  );
}
