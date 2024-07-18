import styled from "styled-components";
import { BREAKPOINT } from "./constants";

export const StyledSpan = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize && `${fontSize}px`};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  margin: ${({ margin }) => margin};
  text-decoration: ${({ $textDecoration }) => $textDecoration};
  width: ${({ width }) => width};
  text-align: ${({ textAlign }) => textAlign};

  @media (max-width: ${BREAKPOINT}px) {
    font-size: ${({ sx }) => `${sx?.fontSize}px`};
    margin: ${({ sx }) => sx?.margin};
    text-align: ${({ sx }) => sx?.textAlign};
  }
`;

export const StyledDiv = styled.div`
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  flex-basis: ${({ flexBasis }) => flexBasis};
  opacity: ${({ opacity }) => opacity};
  display: ${({ display }) => display};

  @media (max-width: ${BREAKPOINT}px) {
    width: ${({ sx }) => sx?.width};
    height: ${({ sx }) => sx?.height};
    margin: ${({ sx }) => sx?.margin};
    position: ${({ sx }) => sx?.position};
    top: ${({ sx }) => sx?.top};
    left: ${({ sx }) => sx?.left};
    right: ${({ sx }) => sx?.right};
    bottom: ${({ sx }) => sx?.bottom};
    flex-basis: ${({ sx }) => sx?.flexBasis};
    opacity: ${({ sx }) => sx?.opacity};
    display: ${({ sx }) => sx?.display};
  }
`;

export const FilledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit || "contain"};
  object-position: ${({ objectPosition }) => objectPosition || "center"};
  position: ${({ absolute }) => (absolute ? "absolute" : "static")};
`;

export const FlexDiv = styled.div`
  display: flex;
  position: ${({ relative }) => (relative ? "relative" : "static")};
  flex-direction: ${({ direction }) => direction};
  margin: ${({ margin }) => margin};
  padding: ${({ $padding }) => $padding};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  gap: ${({ $gap }) => $gap && `${$gap}px`};

  @media (max-width: ${BREAKPOINT}px) {
    font-size: ${({ sx }) => sx?.fontSize};
    margin: ${({ sx }) => sx?.margin};
    padding: ${({ sx }) => sx?.padding};
    justify-content: ${({ sx }) => sx?.justifyContent};
    align-items: ${({ sx }) => sx?.alignItems};
    flex-direction: ${({ sx }) => sx?.flexDirection};
    flex-wrap: ${({ sx }) => sx?.flexWrap};
  }
`;

export const Divider = styled.div`
  background-color: ${({ color }) => color};
  width: 100%;
  height: ${({ height }) => height || "1px"};
  margin: ${({ margin = "10px 0" }) => margin};
`;

export const ContentContainer = styled.div`
  padding-top: 70px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-top: 40px;
  }
`;
