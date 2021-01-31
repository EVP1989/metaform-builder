import React, { useState } from 'react';
import FormComponents from './components/FormComponents';
import ListOfComponents from './components/ListOfComponents';
import HeaderNav from './components/generic/HeaderNav';
import addableComponents from './model/formComponentDustyWarehouse';
import MetaformExampleJson from './model/metaformExampleJSON';

//Material-UI components
import Button from '@material-ui/core/Button';
import { ThemeProvider } from "@material-ui/styles";

//Styles
import metaFormBuilder from "./styles/theme";
import { CssBaseline, Grid, responsiveFontSizes } from '@material-ui/core';

/**
 * Material UI's automated responsive font sizes
 */
const theme = responsiveFontSizes(metaFormBuilder);

function App() {

  let test :string[] = [];
  
  addableComponents.forEach(element => {
    test.push(element.textfield)
  });

  const [formBlockList, setFormBlockList] = useState<any>(MetaformExampleJson.sections[0].fields);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <HeaderNav />
        <Grid container>
          <Grid item md={3}>
            <ListOfComponents setFormBlockList={setFormBlockList} addableComponents={addableComponents} metaformExampleJson={formBlockList}/>
          </Grid>
          <Grid item md={9}>
            <FormComponents formBlockList={formBlockList} setFormBlockList={setFormBlockList} metaformExampleJson={MetaformExampleJson}/>
          </Grid>
        </Grid>
          
          <Button variant="contained" color="primary">
            Tulosta JSON
          </Button>
    </ThemeProvider>
  );
}

export default App;
