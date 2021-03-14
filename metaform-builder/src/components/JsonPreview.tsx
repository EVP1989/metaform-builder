import React, { useState } from 'react';
import MetaformTypes from '../types/metaForm';
//Material-UI
import { Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

//Styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
        paddingTop: theme.spacing(0),
        textAlign: 'center',
    },
    gridItem: {
        textAlign: 'left',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper
    },
  }),
);

interface Props {
    json : MetaformTypes
    metaFormJson : MetaformTypes
}

/**
 * Renders preview of builded metaform
 * @param props 
 */
const Preview : React.FC<any> = (props : Props) => {

    const classes = useStyles();

    const [metaformJson] = useState<MetaformTypes>(props.metaFormJson)

  return (
  <>
  <Grid container className={classes.grid}>
    <Grid item md={12}>
        <Typography variant="h4" >
            Jsonin esikatselu
        </Typography> 
    </Grid>
    <Grid item md={3} >
  
    </Grid>
    <Grid item md={6} className={classes.gridItem}>
        <Box>
            <pre>
                <h2>Metaform</h2>
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