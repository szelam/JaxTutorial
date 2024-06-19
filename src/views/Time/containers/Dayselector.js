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
  const { dayItem, viewMonth, dates, handleSelectDay, day } = useContext(
    TimeViewModel.Context
  );

  return (
    <DaySelectorContainer>
      <MonthContainer>
        <StyledP textAlign="center" fontSize="24">
          {viewMonth}
        </StyledP>
        <StyledP textAlign="center" fontSize="20">
          {dates.year}
        </StyledP>
      </MonthContainer>
      <Scroller id="scrollContainer">
        {dayItem.map((item, index) => (
          <DayItem
            key={index}
            type={item.day === day ? "selected" : item.type}
            onClick={() => {
              handleSelectDay(item.type);
            }}
          >
            <StyledP fontSize="24">{item.day}</StyledP>
            <StyledP fontSize="12">{item.dotw}</StyledP>
          </DayItem>
        ))}
      </Scroller>
    </DaySelectorContainer>
  );
}
