import styled from "styled-components";

export const Container = styled.div``;

export const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.gray};
  padding: 16px;
  box-sizing: border-box;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ClearButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: underline;
  font-size: 16px;
`;

export const ToTodayButton = styled.button`
  background-color: ${({ theme }) => theme.palette.action.main};
  border-radius: 1000px;
  padding: 8px 24px;
  margin-left: 8px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 16px;
`;

export const DaySelectorContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.secondary.gray};
  padding: 16px 16px 16px 32px;
  height: 150px;
  align-items: center;
`;

export const MonthContainer = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledP = styled.p`
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || 16}px;
  text-align: ${({ textAlign }) => textAlign || "left"};
`;

export const Scroller = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 0 0 0 16px;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

export const DayItem = styled.button`
  border: 2px solid
    ${({ theme, type }) => {
      switch (type) {
        case "inactive":
          return theme.palette.secondary.inactive;
        case "today":
          return theme.palette.primary.main;
        case "selected":
          return theme.palette.primary.main;
        default:
          return theme.palette.secondary.main;
      }
    }};
  background-color: ${({ theme, type }) => {
    switch (type) {
      case "selected":
        return theme.palette.primary.main;
      case "inactive":
        return theme.palette.secondary.inactive;
      default:
        return "white";
    }
  }};
  color: ${({ theme, type }) => {
    switch (type) {
      case "selected":
        return "white";
      case "inactive":
        return "white";
      default:
        return "black";
    }
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  min-width: 59px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 1000px;
`;

export const TimeSelectorContainer = styled.div`
  padding: 8px;
`;

export const AMPMSelectorContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 16px;
  padding: 16px;
  box-sizing: border-box;
`;

export const AMPMButton = styled.div`
  background-color: ${({ theme, selected }) =>
    selected ? theme.palette.primary.main : theme.palette.secondary.main};
  color: ${({ theme, selected }) =>
    selected ? "white" : theme.palette.primary.main};
  padding: 8px 16px;
  border-radius: 1000px;
  cursor: pointer;
`;

export const TimeItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  /* grid-gap: 8px; */
  /* row-gap: 8px; */
  margin: 16px;
  box-sizing: border-box;
`;

export const TimeItem = styled.button`
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  padding: 8px 0px;
  margin: ${({ selected }) => {
    switch (selected) {
      case "start":
        return "4px 0 4px 4px";
      case "startLonely":
        return "4px 0 4px 4px";
      case "end":
        return "4px 4px 4px 0";
      case "both":
        return "4px 0 4px 0";
      default:
        return "4px";
    }
  }};
  border-radius: ${({ selected }) => {
    switch (selected) {
      case "start":
        return "1000px 0 0 1000px";
      case "end":
        return "0 1000px 1000px 0";
      case "both":
        return "0";
      default:
        return "1000px";
    }
  }};
  background-color: ${({ theme, selected }) =>
    selected === "no" ? "white" : theme.palette.primary.main};
  color: ${({ theme, selected }) => (selected === "no" ? "black" : "white")};
  cursor: pointer;
  min-width: 9%;
`;
