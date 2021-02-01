import { Box, createStyles, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SubjectIcon from '@material-ui/icons/Subject';
import React from 'react';
//import addableComponents from '../model/formComponentDustyWarehouse';

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
  formBlockList : any,
  addableComponents : any[],
  metaformExampleJson? : any,
  setFormBlockList : (newFormBlockList : any) => void
}

const ListOfComponents : React.FC<any> = (props : Props) => {

  const classes = useStyles();

  const formBlockList = props.metaformExampleJson;

  /**
     * Add new form component to component list 
     * @param component 
     * @param index 
     */
    const addFormComponentToList = (component : any, index : number) => {

      const newFormBlockList =  [...formBlockList];

      let newFormBlock = props.addableComponents[index];

      newFormBlockList.push(newFormBlock);
      console.log(newFormBlockList)
      props.setFormBlockList(newFormBlockList);
    
    }

  return (
  <>
    <List>
      {props.addableComponents.map((component, index) => (
        <ListItem
          key={index} draggable
          className={classes.components}
          
          onClick={(component) => addFormComponentToList(component, index)}
          >
          <Box border={1} display="flex" pr={2}>
            <ListItemIcon className={classes.icon}>
                <SubjectIcon />
            </ListItemIcon>
            <ListItemText >
                <Typography variant="h6" >
                    {component.placeholder}
                </Typography>
            </ListItemText>
          </Box>
        </ListItem>
      ))}
    </List> 
  </>
  );

};
export default ListOfComponents;