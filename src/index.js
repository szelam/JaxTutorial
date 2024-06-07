import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material';
import theme from './constants/themes';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers';

const root = ReactDOM.createRoot(document.getElementById('root'));

const MUI_theme = createTheme(theme);

root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MUIThemeProvider theme={MUI_theme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MUIThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
