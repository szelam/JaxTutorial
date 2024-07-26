import { useContext } from "react";
import {
  DayItem,
  DaySelectorContainer,
  MonthContainer,
  Scroller,
  StyledP,
} from "../styles";
import TimeViewModel from "../viewModel";

export default function DaySelector() {
  const { baseItem, viewMonth, handleSelectDate, getDateState } = useContext(
    TimeViewModel.Context
  );

  return (
    <DaySelectorContainer>
      <MonthContainer>
        <StyledP $textAlign="center" fontSize="24">
          {viewMonth}
        </StyledP>
        <StyledP $textAlign="center" fontSize="20">
          {baseItem.year}
        </StyledP>
      </MonthContainer>
      <Scroller id="scrollContainer">
        {baseItem.displayDays.map((item, index) => {
          const state = getDateState(item);
          return (
            <DayItem
              key={index}
              state={state}
              onClick={() => {
                handleSelectDate(state, item.date);
              }}
            >
              <StyledP fontSize="24">{item.date}</StyledP>
              <StyledP fontSize="12">{item.dotw}</StyledP>
            </DayItem>
          );
        })}
      </Scroller>
    </DaySelectorContainer>
  );
}
