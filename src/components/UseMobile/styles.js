import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const Container = styled.div`
  height: 100vh;
  display: none;

  @media (min-width: ${BREAKPOINT}px) {
    display: block;
  }
`;
