import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ListOfComponents from './components/ListOfComponents';
import HeaderNav from './components/generic/HeaderNav';

//Material-UI components
import { ThemeProvider } from "@material-ui/styles";

//Styles
import metaFormBuilder from "./styles/theme";
import { responsiveFontSizes } from '@material-ui/core';
import HeaderNavTest from './components/generic/HeaderNavTest';

/**
 * Material UI's automated responsive font sizes
 */
const theme = responsiveFontSizes(metaFormBuilder);

function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <HeaderNavTest /> 
  
      </ThemeProvider>
    </Router>
  );
}

export default App;
