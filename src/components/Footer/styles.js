import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const Foot = styled.footer`
  height: 146px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  background-color: #181560;
  color: white;
  margin-top: -2px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;

  @media (max-width: ${BREAKPOINT}px) {
    height: 200px;
  }
`;

export const Banner = styled.img`
  position: absolute;
  width: 560px;
  height: 210px;
  z-index: 1;
  right: 0;
  top: -190px;

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
    height: 134px;
    top: -124px;
    object-fit: contain;
  }
`;
