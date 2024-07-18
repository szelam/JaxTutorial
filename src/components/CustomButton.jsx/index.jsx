import { ButtonContainer } from "./styles";

export default function CustomButton({ text, onClick, ...props }) {
  return (
    <ButtonContainer onClick={onClick} {...props}>
      {text}
    </ButtonContainer>
  );
}
