import { Divider, StyledSpan } from "../../../globalStyles";
import { OfferBox } from "../styles";

export default function OfferCard({ title, name, offer }) {
  return (
    <OfferBox>
      <StyledSpan color="#544635">{title}</StyledSpan>
      <Divider color="#544635" height="4px" />
      <StyledSpan color="#FF6B36">{name}折扣優惠高達</StyledSpan>
      <StyledSpan
        color="#FF6B36"
        fontSize="110"
        $fontWeight="400"
        margin="-10px 0 20px 0"
      >
        {offer}
      </StyledSpan>
    </OfferBox>
  );
}
