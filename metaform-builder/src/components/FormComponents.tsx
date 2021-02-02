import { createStyles, List, ListItem, ListItemText, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Delete, Home } from '@material-ui/icons';
import React, { useRef } from 'react';
import '../styles/FormItems.css';

//TODO: Make mutable list of that can add/remove form items
//TODO: Make method that writes list to json file

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
  setFormBlockList : (newFormBlockList : any[]) => void
  formBlockList : any[],
}

/**
 * Renders form according to given component list
 * @param props 
 */
const FormComponents : React.FC<any> = (props : Props) => {

  const formBlockList = props.formBlockList;

  const classes = useStyles();

  const draggingItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleDragStart = (e : any, position :number) => {
      draggingItem.current = position;
  };

  const handleDragEnter = (e : any, position : number) => {
      dragOverItem.current = position;
      const newFormBlockList = [...formBlockList];
      if(draggingItem.current != null) {
          const draggingItemContent = newFormBlockList[draggingItem.current];
          newFormBlockList.splice(draggingItem.current, 1);
          newFormBlockList.splice(dragOverItem.current, 0, draggingItemContent);
      }
      draggingItem.current = dragOverItem.current;
      dragOverItem.current = null;
      props.setFormBlockList(newFormBlockList);
  };

  /**
   * Updates form input data (TESTING)
   * 
   * @param input 
   * @param index 
   */
  const handleInputChange = (input : any, index : number) => {

      let placeholder  = input.target.value;

      const newFormBlockList = [...formBlockList];

      newFormBlockList[index].placeholder = placeholder;

      props.setFormBlockList(newFormBlockList);

  }

  /**
   * Deletes form component from list
   * @param index 
   */
  const deleteFormComponent = (index : number) : void => {

    const newFormBlockList = [...formBlockList];

    newFormBlockList.splice(index,1);

    props.setFormBlockList(newFormBlockList);

  }

  //TODO: Use methods to return needed elements
  return (
  <>
  <Grid item md={12}>
    <Typography variant="h2" >
      Uusi Lomake
    </Typography>
    <List className={classes.root}>
        {props.formBlockList.map((item : any, index : number) => (
        <ListItem
          onDragStart={(e) => handleDragStart(e, index)}
          onDragEnter={(e) => handleDragEnter(e, index)}
          onDragOver={(e) => e.preventDefault()}
          key={index} draggable
          className={classes.components}
          >
          <ListItemText>
          <Delete color="primary" onClick={(e) => deleteFormComponent(index)}/>
            <TextField label={index} variant="outlined" value={item.placeholder} onChange={(input) => handleInputChange(input, index) }/>
          </ListItemText>
        </ListItem>
        ))}
    </List> 
  </Grid>
  </>
  );

};

export default FormComponents;