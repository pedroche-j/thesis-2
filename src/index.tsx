import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#559a78',
    },
    secondary: {
      main: '#da6264',
    },
    background: {
      default: '#0a0a0a',
      paper: '#252525',
    },
    error: {
      main: '#da1215',
    },
    warning: {
      main: '#ee9649',
    },
    info: {
      main: '#5a9db1',
    },
    success: {
      main: '#5ab187',
    },
  },
    typography: {
      fontFamily: 'Source Sans 3',
  },
},
)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
