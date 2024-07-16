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

export const ActionButton = styled.button`
  width: 206px;
  text-align: center;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #5550e8;
  border: none;
  font-size: 15px;
  color: #fff;
  font-weight: 500;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 66px;
`;
