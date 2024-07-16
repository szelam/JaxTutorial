import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const Nav = styled.nav`
  top: 0px;
  left: 0px;
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f3fc 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #5550e833;
  border-radius: 0px 0px 30px 30px;
  opacity: 1;
  padding: 20px 50px;
  box-sizing: border-box;
  margin-bottom: -30px;

  @media (max-width: ${BREAKPOINT}px) {
    height: 63px;
    padding: 15px 40px;
    border-radius: 0px 0px 30px 0px;
  }
`;

export const Logo = styled.img`
  height: 100%;
`;

export const Menu = styled.img`
  height: 50%;
`;
