import { useContext, useState } from "react";
import {
  AMPMButton,
  AMPMSelectorContainer,
  TimeItem,
  TimeItemsContainer,
} from "../styles";
import TimeViewModel from "../viewModel";

export default function TimeSelector() {
  const { time, timeItem, handleSelectTime, compareTime } = useContext(
    TimeViewModel.Context
  );
  const [ap, setAP] = useState("AM");

  return (
    <>
      <AMPMSelectorContainer>
        <AMPMButton selected={ap === "AM"} onClick={() => setAP("AM")}>
          AM
        </AMPMButton>
        <AMPMButton selected={ap === "PM"} onClick={() => setAP("PM")}>
          PM
        </AMPMButton>
      </AMPMSelectorContainer>
      <TimeItemsContainer>
        {timeItem.map((item, index) => {
          const apTime = time[ap];
          const select = compareTime(apTime, item);
          return (
            <TimeItem
              key={index}
              selected={select}
              onClick={() => {
                handleSelectTime(item, ap);
              }}
            >
              {item}
            </TimeItem>
          );
        })}
      </TimeItemsContainer>
    </>
  );
}
