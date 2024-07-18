import { FilledImage, StyledDiv } from "../../globalStyles";
import { ButtonContainer } from "./styles";

export default function MemberButton({ ...props }) {
  return (
    <ButtonContainer {...props}>
      <StyledDiv width="42px" height="33px">
        <FilledImage src="whiteicon.png" />
      </StyledDiv>
      成為會員
    </ButtonContainer>
  );
}
