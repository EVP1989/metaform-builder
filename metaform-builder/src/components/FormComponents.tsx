import { createStyles, List, ListItem, ListItemText, makeStyles, TextField, Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
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
  metaformExampleJson : any;
  setFormBlockList : (newFormBlockList : any[]) => void
  formBlockList : any[]
}

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
   * Updates form data (TESTING)
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

  //When rendering, use methods to return needed elements
  return (
  <>
  <Grid item md={12}>
    <List className={classes.root}>
        {formBlockList && formBlockList.map((item : any, index : number) => (
        <ListItem
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragOver={(e) => e.preventDefault()}
            key={index} draggable
            className={classes.components}
            >
            <ListItemText>
                <TextField label="Tekstikenttä" variant="outlined" value={item.placeholder} onChange={(input) => handleInputChange(input, index) }/>
            </ListItemText>
        </ListItem>
        ))}
    </List> 
  </Grid>
  </>
  );

};

export default FormComponents;