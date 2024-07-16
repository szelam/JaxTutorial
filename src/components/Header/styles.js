import styled from "styled-components";

export const Head = styled.header`
  width: 100%;
  position: relative;
  padding: 90px 95px;
  margin-top: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  margin: 0;
  text-shadow: 0px 0px 6px #71717121;
  font-size: 70px;
`;

export const BgImg = styled.img`
  width: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
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
`;

export const Coin = styled.img`
  position: absolute;
  right: -69px;
  top: -25px;
`;
