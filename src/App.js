import React from "react";
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./routes";
import { useSelector } from "react-redux";
import ErrorBoundary from './utils/ErrorBoundary'
import './css/globalcss.css';


const App = () => {

  return (
    <ErrorBoundary>
      <ThemeProvider theme={Theme}>
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  )
};

export default App;
