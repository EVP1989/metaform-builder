import { Box, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import MetaformTypes from '../types/metaForm';

interface Props {
    json : MetaformTypes
    formBlockList : MetaformTypes
}

/**
 * Renders preview of builded metaform
 * @param props 
 */
const Preview : React.FC<any> = (props : Props) => {

    const [metaformJson] = useState<MetaformTypes>(props.formBlockList)

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
                <h2>Metaform, lisätyt komponentit:</h2>
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