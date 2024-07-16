import styled from "styled-components";

export const S1 = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 200px;
  gap: 40px;
  position: relative;
  box-sizing: border-box;
  align-items: center;
`;

export const H2 = styled.h2`
  margin: 0px;
  font-weight: 800;
  font-size: 50px;
`;

export const Box = styled.div`
  width: ${({ big }) => (big ? "427px" : "206px")};
  height: ${({ big }) => (big ? "530px" : "250px")};
  padding: 30px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 0px 10px #a491eb80;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
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
`;

export const LionContainer = styled.div`
  height: 232px;
  min-width: 302px;
  z-index: 2;
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
`;

export const AvatarImg = styled.img`
  position: absolute;
  z-index: 1;
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
  z-index: -1;
  top: 250px;
`;

export const NFTImg = styled.img`
  width: 297px;
  height: 296px;
  margin-right: ${({ offset }) => offset || "0"};
`;

export const TimelineContainer = styled.div`
  width: 100%;
  margin: 150px 0px 150px 0px;
  padding: 0 200px;
  font-size: 30px;
  color: white;
`;

export const TImelineStamp = styled.div`
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
    height: ${({ length }) => length || "700px"};
    background-color: white;
    left: -51px;
    top: 50%;
  }
`;

export const TimelineText = styled.p`
  margin: 90px 50px 90px 70px;
  padding: 20px;
  border-radius: 30px;
`;

export const LastTimelineAccessory = styled.div`
  position: absolute;
  width: 40px;
  height: 5px;
  background-color: white;
  left: -50px;
  top: calc(50% + 15px);
`;
