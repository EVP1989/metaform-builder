import React, { useRef } from 'react';
//Material-UI
import { createStyles, List, ListItem, ListItemText, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Delete } from '@material-ui/icons';

//DnD items based on github repo: https://github.com/Gaurav2048/React-DnD-Adv

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
  setMetaFormJson : (newMetaFormJson : any) => void
  metaFormJson : any,
}

/**
 * Renders form according to given component list
 * @param props 
 */
const FormComponents : React.FC<any> = (props : Props) => {

  const classes = useStyles();

  const draggingItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleDragStart = (e : any, position :number) => {
      draggingItem.current = position;
  };

  const handleDragEnter = (e : any, position : number) => {
      dragOverItem.current = position;
      const newFormJson = {...props.metaFormJson};
      const newFormBlockList = [...newFormJson.sections[0].fields];
      if(draggingItem.current != null) {
          const draggingItemContent = newFormBlockList[draggingItem.current];
          newFormBlockList.splice(draggingItem.current, 1);
          newFormBlockList.splice(dragOverItem.current, 0, draggingItemContent);
      }
      draggingItem.current = dragOverItem.current;
      dragOverItem.current = null;
      newFormJson.sections[0].fields = newFormBlockList;
      props.setMetaFormJson(newFormJson);
  };

/**
   * Updates form input data
   * 
   * @param input 
   * @param index   
*/   
  const handleInputChange = (input : any, index : number) => {

      let title  = input.target.value;

      const newFormJson = {...props.metaFormJson};

      const newFormBlockList = [...newFormJson.sections[0].fields];

      newFormBlockList[index].title = title;

      newFormJson.sections[0].fields = newFormBlockList;

      props.setMetaFormJson(newFormJson);
  }

  /**
   * Deletes form component from list
   * @param index 
   */
  const deleteFormComponent = (index : number) : void => {

    const newFormJson = {...props.metaFormJson};

    const newFormBlockList = [...newFormJson.sections[0].fields];

    newFormBlockList.splice(index,1);

    newFormJson.sections[0].fields = newFormBlockList;

    props.setMetaFormJson(newFormJson);

  }

  //TODO: Use methods to return needed elements
  return (
  <>
  <Grid item md={12}>
    <Typography variant="h2" >
      Uusi Lomake
    </Typography>
    <List className={classes.root}>
        {props.metaFormJson.sections[0].fields.map((item : any, index : number) => (
        <ListItem
          onDragStart={(e) => handleDragStart(e, index)}
          onDragEnter={(e) => handleDragEnter(e, index)}
          onDragOver={(e) => e.preventDefault()}
          key={index} draggable
          className={classes.components}
          >
          <ListItemText>
          <Delete color="primary" onClick={(e) => deleteFormComponent(index)}/>
            <TextField variant="outlined" value={item.title} onChange={(input) => handleInputChange(input, index) }/>
          </ListItemText>
        </ListItem>
        ))}
    </List> 
  </Grid>
  </>
  );

};

export default FormComponents;