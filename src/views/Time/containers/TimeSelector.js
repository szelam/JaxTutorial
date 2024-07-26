import { useContext, useState } from "react";
import {
  AMPMButton,
  AMPMSelectorContainer,
  TimeItem,
  TimeItemsContainer,
} from "../styles";
import TimeViewModel from "../viewModel";

export default function TimeSelector() {
  const { viewDate, baseItem, handleSelectPeriod, getTimeState } = useContext(
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
      {viewDate ? (
        <TimeItemsContainer>
          {baseItem.timeSlots[ap].map((timeSlot, index) => {
            const state = getTimeState(timeSlot);
            return (
              <TimeItem
                key={index}
                state={state}
                onClick={() => {
                  if (state !== "inactive") {
                    handleSelectPeriod(timeSlot, state);
                  }
                }}
              >
                {timeSlot.str}
              </TimeItem>
            );
          })}
        </TimeItemsContainer>
      ) : (
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          Select date!
        </div>
      )}
    </>
  );
}
