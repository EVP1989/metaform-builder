import React, { useState } from 'react';
import FormComponents from './components/FormComponents';
import ListOfComponents from './components/ListOfComponents';
import HeaderNav from './components/generic/HeaderNav';

//Material-UI components
import { ThemeProvider } from "@material-ui/styles";

//Styles
import metaFormBuilder from "./styles/theme";
import { Grid, responsiveFontSizes } from '@material-ui/core';

/**
 * Material UI's automated responsive font sizes
 */
const theme = responsiveFontSizes(metaFormBuilder);

function App() {

  return (
    <ThemeProvider theme={theme}>
      <HeaderNav /> 
      <ListOfComponents/>
    </ThemeProvider>
  );
}

export default App;
