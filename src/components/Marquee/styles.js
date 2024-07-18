import styled, { keyframes } from "styled-components";
import { BREAKPOINT } from "../../constants";

export const MarqueeContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: ${BREAKPOINT}px) {
    margin-top: 15px;
  }
`;

export const MarqueeContent = styled.div`
  display: inline-block;
  animation: ${(props) => marqueeAnimation(props.direction, props.speed)}
    ${(props) => props.duration}s linear infinite;
`;

export const marqueeAnimation = (direction) => keyframes`
  from {
    transform: translateX(${direction === "left" ? "0" : "-100%"});
  }
  to {
    transform: translateX(${direction === "left" ? "-100%" : "0"});
  }
`;
