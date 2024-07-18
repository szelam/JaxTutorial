import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const HomeContainer = styled.section`
  width: 100%;
  position: relative;
  padding: 90px 95px 150px 95px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 40px 0 150px 0;
    align-items: center;
  }
`;

export const H1 = styled.h1`
  margin: 0;
  text-shadow: 0px 0px 6px #71717121;
  font-size: 70px;
`;

export const TermsContainer = styled.span`
  color: #5550e8;
  margin: 150px 0 0 0;
  font-size: 12px;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 8px;
    margin: 35px 35px 0 35px;
  }
`;

export const BgImg = styled.img`
  width: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  @media (max-width: ${BREAKPOINT}px) {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: bottom;
  }
`;

export const ActionButton = styled.button`
  width: 206px;
  text-align: left;
  padding-left: 40px;
  height: 68px;
  background: #5550e8;
  border: none;
  font-size: 24px;
  color: #fff;
  font-weight: 500;
  box-shadow: 0px 0px 20px #766dc64d;
  border-radius: 66px;
  opacity: 1;
  position: relative;
  margin-right: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    width: 256px;
    font-size: 29px;
    padding-left: 60px;
    margin-top: 20px;
  }
`;

export const Coin = styled.img`
  position: absolute;
  right: -69px;
  top: -25px;
`;
