import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const DropdownContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px 0 0 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  top: ${({ open }) => (open ? "0" : "-100vh")};
  left: 0;
  background-color: white;
  z-index: 10;
  transition: top 0.3s ease-in-out;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 65px 0 0 0;
  }
`;

export const DropdownBgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: contain;
  z-index: -1;

  @media (max-width: ${BREAKPOINT}px) {
    height: 50vh;
    object-fit: cover;
    object-position: bottom;
  }
`;

export const ActionsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 70px;
  padding-top: 100px;

  @media (max-width: ${BREAKPOINT}px) {
    justify-content: center;
    gap: 40px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ keepGap }) => (keepGap ? "20px" : "50px")};
  flex-direction: column;
  align-items: center;

  @media (max-width: ${BREAKPOINT}px) {
    gap: 20px;
  }
`;

export const LionContainer = styled.div`
  width: 482px;
  height: 296px;
  margin-bottom: -15px;

  @media (max-width: ${BREAKPOINT}px) {
    width: 273px;
    height: 163px;
  }
`;

export const LinkToSection = styled.a`
  font-size: 25px;
  color: #5550e8;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 20px;
  }
`;
