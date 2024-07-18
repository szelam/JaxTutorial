import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const ButtonContainer = styled.button`
  width: ${({ responsive }) => (responsive === false ? "206px" : "386px")};
  height: ${({ responsive }) => (responsive === false ? "47px" : "90px")};
  font-size: ${({ responsive }) => (responsive === false ? "15px" : "25px")};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #5550e8;
  border: none;
  color: #fff;
  font-weight: 500;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
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
