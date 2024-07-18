import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const S1 = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 200px;
  gap: 40px;
  position: relative;
  box-sizing: border-box;
  align-items: center;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 0px 40px;
    gap: 20px;
  }
`;

export const H2 = styled.h2`
  margin: 0px;
  font-weight: 800;
  font-size: 50px;
`;

export const Box = styled.div`
  width: ${({ big }) => (big ? "442px" : "206px")};
  height: ${({ big }) => (big ? "530px" : "250px")};
  padding: 30px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 0px 10px #a491eb80;
  border-radius: 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
    height: auto;
    padding: 20px;
    /* flex-basis: calc(50% - 30px); */
  }
`;

export const BigCardContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: end;
  position: relative;
  margin: 0;

  @media (max-width: ${BREAKPOINT}px) {
    margin: 50px 0 0 0;
    width: 100%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  margin-bottom: 150px;
  gap: 30px;

  @media (max-width: ${BREAKPOINT}px) {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const S1BgImg = styled.img`
  width: 100%;
  object-fit: contain;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const S1InfinityImg = styled.img`
  right: -110px;
  top: 120px;
  z-index: -1;
  width: 441px;
  height: 190px;
  position: absolute;

  @media (max-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const S2 = styled.section`
  position: relative;
  background-color: #ff7e50;
  height: 437px;
  padding: 20px 100px 0 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${BREAKPOINT}px) {
    height: auto;
  }
`;

export const OutlinedText = styled.span`
  color: #7c432f;
  font-size: ${({ fontSize }) => fontSize && `${fontSize}px`};
  font-weight: 800;
  -webkit-text-stroke-color: #fff;
  -webkit-text-stroke-width: 6px;
  paint-order: stroke fill;
`;

export const OfferBox = styled.div`
  width: 251px;
  background-color: #fff;
  box-shadow: 0px 0px 10px #fff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  font-size: 20px;
  font-weight: 800;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: ${({ last }) => (last ? "-30px " : "0")};
    padding-bottom: ${({ last }) => (last ? "30px" : "0")};
  }
`;

export const LionContainer = styled.div`
  height: 232px;
  min-width: 302px;
  z-index: 2;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: -15px;
  }
`;

export const S3 = styled.section`
  position: relative;
`;

export const S3Section = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  padding: ${({ padding }) => padding || "0 100px"};
  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 40px;
  }
`;

export const CharacterBottomGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column-reverse;
  }
`;
export const CharacterButtonsContainer = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: ${BREAKPOINT}px) {
    transform: scale(0.7);
  }
`;

export const CharacterBox = styled.div`
  width: 100%;
  display: flex;
  border: 10px solid #7c432f;
  border-radius: 38px;
  align-items: ${({ big }) => (big ? "center" : "flex-start")};
  justify-content: center;
  padding: ${({ padding }) => padding || "10px"};
  box-sizing: border-box;
  background-color: white;
  height: ${({ big }) => (big ? "451px" : "auto")};
  position: relative;
  font-size: 18px;
  gap: 20px;

  @media (max-width: ${BREAKPOINT}px) {
    border-width: 5px;
    flex-direction: column;
    padding: 20px;
  }
`;

export const AvatarImg = styled.img`
  position: absolute;
  z-index: 1;

  @media (max-width: ${BREAKPOINT}px) {
    height: 105%;
  }
`;

export const AvatarBg = styled.div`
  opacity: 0.5;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  transform: translate(8px, 8px);
`;

export const S3BgImg = styled.img`
  position: absolute;
  top: 500px;
  width: 100%;
  opacity: 0.5;
  z-index: -1;
`;

export const S3TimelineBgImg = styled.img`
  position: absolute;
  width: 100%;
  height: calc(100% - 250px);
  z-index: -1;
  top: 250px;

  @media (max-width: ${BREAKPOINT}px) {
    top: 200px;
    height: calc(100% - 200px);
    object-fit: cover;
  }
`;

export const NFTImg = styled.img`
  width: 297px;
  height: 296px;
  margin-right: 30px;

  @media (max-width: ${BREAKPOINT}px) {
    width: 150px;
    height: 150px;
    margin-right: 15px;
  }
`;

export const TimelineContainer = styled.div`
  width: 100%;
  padding: 150px 200px;
  font-size: 30px;
  color: white;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 15px;
  }
`;

export const TimelineStamp = styled.div`
  border: 5px solid white;
  border-radius: 999px;
  padding: 35px;
  color: white;
  font-size: 40px;
  text-align: center;
  background-color: #ffffff80;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 5px;
    background-color: white;
    left: -50px;
    top: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    width: 5px;
    height: ${({ length }) => length};
    background-color: white;
    left: -51px;
    top: 50%;
  }

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 20px;
    padding: 20px;

    &::before {
      width: 20px;
      left: -20px;
    }

    &::after {
      left: -21px;
      height: ${({ length }) => length};
    }
  }
`;

export const TimelineText = styled.p`
  margin: 0 50px 0 70px;
  padding: 110px 20px;
  border-radius: 30px;

  @media (max-width: ${BREAKPOINT}px) {
    margin: 0 25px 0 35px;
    padding: 42.5px 20px;
  }
`;

export const TitleStars = styled.div`
  width: 50px;
  height: 66px;

  @media (max-width: ${BREAKPOINT}px) {
    width: 30px;
    height: 38px;
  }
`;
