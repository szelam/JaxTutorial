import { useContext, useState } from "react";
import {
  AMPMButton,
  AMPMSelectorContainer,
  TimeItem,
  TimeItemsContainer,
} from "../styles";
import TimeViewModel from "../viewModel";

export default function TimeSelector() {
  const { timeItem } = useContext(TimeViewModel.Context);
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
        {timeItem[ap].map((item, index) => (
          <TimeItem key={index}>{item}</TimeItem>
        ))}
      </TimeItemsContainer>
    </>
  );
}
