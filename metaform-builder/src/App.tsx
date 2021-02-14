import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderNav from './components/generic/HeaderNav';
import MetaformJSON from './model/metaformJSON';
import { v4 as uuidv4 } from 'uuid';
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
  const [metaFormJson, setMetaFormJson] = useState<any>(MetaformJSON);

  /**
   * Generate unique id for the form
   */
  useEffect(() => {

    const newFormJson = {...metaFormJson};

    let newId = uuidv4();

    newFormJson.id = newId;
    
    setMetaFormJson(newFormJson);

  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <HeaderNav setMetaFormJson={setMetaFormJson} metaFormJson={metaFormJson}/> 
      </ThemeProvider>
    </Router>
  );
}

export default App;
