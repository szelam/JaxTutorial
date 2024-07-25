import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <NavContainer>
      <BackButtonContainer>
        <IconButton
          size="small"
          onClick={() => {
            navigate("/");
          }}
        >
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
