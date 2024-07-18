import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const ButtonContainer = styled.button`
  width: 386px;
  height: 90px;
  font-size: 25px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: white;
  border: none;
  color: #fff;
  font-weight: 500;
  border: 1px solid #5550e8;
  color: #5550e8;
  border-radius: 66px;

  ${(responsive) =>
    responsive !== false &&
    `
    @media (max-width: ${BREAKPOINT}px) {
      width: 206px;
      height: 47px;
      font-size: 15px;
    }
  `}
`;
