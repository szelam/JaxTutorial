import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import {
  ActionButtonsContainer,
  BackButtonContainer,
  ClearButton,
  NavContainer,
  ToTodayButton,
} from "../styles";
import TimeViewModel from "../viewModel";

export default function TitleBar() {
  const { handleToToday, handleClear } = useContext(TimeViewModel.Context);
  return (
    <NavContainer>
      <BackButtonContainer>
        <IconButton size="small">
          <KeyboardArrowLeftIcon color="primary" fontSize="large" />
        </IconButton>
        Back to booking
      </BackButtonContainer>
      <ActionButtonsContainer>
        <ClearButton
          onClick={() => {
            handleClear();
          }}
        >
          Clear
        </ClearButton>
        <ToTodayButton
          onClick={() => {
            handleToToday();
          }}
        >
          To today
        </ToTodayButton>
      </ActionButtonsContainer>
    </NavContainer>
  );
}
