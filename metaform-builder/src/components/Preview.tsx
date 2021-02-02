import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import '../styles/FormItems.css';

interface Props {

}

/**
 * Renders preview of builded metaform
 * @param props 
 */
const Preview : React.FC<any> = (props : Props) => {

  return (
  <>
  <Grid item md={12}>
    <Typography variant="h4" >
      Lomakkeen esikatselu
    </Typography> 
  </Grid>
  </>
  );

};

export default Preview;