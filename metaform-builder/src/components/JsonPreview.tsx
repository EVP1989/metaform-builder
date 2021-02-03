import { Box, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import MetaformTypes from '../types/metaForm';
import metaformExampleJson from '../model/metaformExampleJSON';

interface Props {
    json : MetaformTypes
}

/**
 * Renders preview of builded metaform
 * @param props 
 */
const Preview : React.FC<any> = (props : Props) => {

    const [metaformJson, setMetaformJson] = useState<any>(metaformExampleJson)

  return (
  <>
  <Grid container >
    <Grid item md={12}>
        <Typography variant="h4" >
            Jsonin esikatselu, lataus ja mahdollinen käpistely(?)
        </Typography> 
    </Grid>
    <Grid item md={3} >
  
    </Grid>
    <Grid item md={6}>
        <Box>
            <pre style={{backgroundColor: '#eee'}}>
                <h2>Esimerkki Json:</h2>
                <code>
                    {JSON.stringify(metaformJson, null, 2)}
                </code>
            </pre>
        </Box>
    </Grid>
    <Grid item md={3} >
 
    </Grid>
  </Grid>
  
  </>
  );

};

export default Preview;