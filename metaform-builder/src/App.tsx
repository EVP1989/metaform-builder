import React from 'react';
import FormItemsList from './components/FormItems';
import StaticItems from './components/StaticItems';
import HeaderNav from './components/generic/HeaderNav';

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <HeaderNav />
        <Grid container>
          <Grid item md={3}>
            <StaticItems />
          </Grid>
          <Grid item md={9}>
            <FormItemsList />
          </Grid>
        </Grid>
          
          <Button variant="contained" color="primary">
            Tulosta JSON
          </Button>
    </ThemeProvider>
  );
}

export default App;
