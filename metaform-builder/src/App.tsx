import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderNav from './components/generic/HeaderNav';
//Material-UI
import { ThemeProvider } from "@material-ui/styles";
//Styles
import metaFormBuilder from "./styles/theme";
import { responsiveFontSizes } from '@material-ui/core';

/**
 * Material UI's automated responsive font sizes
 */
const theme = responsiveFontSizes(metaFormBuilder);

function App() {

  /**
   * Initialize form
   * TODO: check local storige for existing one
   */
  const [formBlockList, setFormBlockList] = useState<any[]>([]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <HeaderNav setFormBlockList={setFormBlockList} formBlockList={formBlockList}/> 
      </ThemeProvider>
    </Router>
  );
}

export default App;
