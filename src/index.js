import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./constants/themes";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const MUI_theme = createTheme(theme);

root.render(
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <MUIThemeProvider theme={MUI_theme}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MUIThemeProvider>
  </LocalizationProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
