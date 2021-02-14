import React from 'react';
import addableComponents from '../model/formComponentDustyWarehouse';
import FormComponents from './FormComponents';
//Material-UI
import { Box, createStyles, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SubjectIcon from '@material-ui/icons/Subject';

//Styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 250,
    },
    components: {
      backgroundColor: theme.palette.background.default,
        
    },
    icon: {
      margin: theme.spacing(1, 2, 1),
    },
  }),
);

interface Props {
  metaFormJson : any,
  setMetaFormJson : (newMetaFormJson : any) => void
}

/**
 * Renders addable components
 * @param props
 */
const ListOfComponents : React.FC<any> = (props : Props) => {

  const classes = useStyles();

  const addableComponentsList = addableComponents;

  /**
   * Add new form component to component list & update json
   * @param component 
   * @param index 
   */
    const addFormComponentToList = (component : any, index : number) => {

      const newFormJson = {...props.metaFormJson};

      const newFormBlockList =  [...props.metaFormJson.sections[0].fields];

      let newFormBlock = JSON.parse(JSON.stringify(addableComponentsList[index]));

      newFormBlockList.push(newFormBlock);

      newFormJson.sections[0].fields = newFormBlockList;
      
      props.setMetaFormJson(newFormJson);

    }

  return (
  <>
  <Grid container>
    <Grid item md={3}>
      <List>
        <Typography variant="h5">
          Komponentit
        </Typography>
        {addableComponentsList.map((component, index) => (
          <ListItem
            key={index} draggable
            className={classes.components}
            onClick={(e) => addFormComponentToList(component, index)}
            >
            <Box border={1} display="flex" pr={3}>
              <ListItemIcon className={classes.icon}>
                <SubjectIcon />
              </ListItemIcon>
              <ListItemText >
                <Typography variant="h6" >
                  {component.title}
                </Typography>
              </ListItemText>
            </Box>
          </ListItem>
        ))}
      </List> 
    </Grid>
    <Grid item md={9}>
      <FormComponents metaFormJson={props.metaFormJson} setMetaFormJson={props.setMetaFormJson}/>
    </Grid>
  </Grid>
  </>
  );

};
export default ListOfComponents;