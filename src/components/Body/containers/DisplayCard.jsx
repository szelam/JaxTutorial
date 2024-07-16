import { FilledImage, StyledDiv, StyledSpan } from "../../../globalStyles";
import { Box } from "../styles";

export default function DisplayCard({ text, image }) {
  return (
    <Box>
      <StyledDiv margin="0 0 15px 0" height="100%">
        <FilledImage src={image} />
      </StyledDiv>
      <StyledSpan
        fontSize="30"
        color="#181560"
        $fontWeight="600"
        width="100%"
        textAlign="center"
      >
        {text}
      </StyledSpan>
    </Box>
  );
}
