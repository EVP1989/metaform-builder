import { createStyles, Input, List, ListItem, ListItemText, makeStyles, TextField, Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { useState, useRef } from 'react';
import Metaform from '../model/metaformExampleJSON';
import '../styles/FormItems.css';

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

const metaformExampleJson = Metaform;

const FormItemsList : React.FC = () => {

    const classes = useStyles();
    const draggingItem = useRef<number | null>(null);
    const dragOverItem = useRef<number | null>(null);

    //TODO: Generate list from static list of desired form items
    //TODO: Make mutable list of that can add/remove form items
    //TODO: Make method that writes list to json file
    const [formBlockList, setFormBlockList] = useState<any>(metaformExampleJson.sections[0].fields);

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
        setFormBlockList(newFormBlockList);
    };

    /**
     * Updates form data (TESTING)
     * 
     * @param e 
     * @param index 
     */
    const handleInputChange = (e : any, index : number) => {

        let placeholder  = e.target.value;
 
        const newFormBlockList = [...formBlockList];

        newFormBlockList[index].placeholder = placeholder;

        setFormBlockList(newFormBlockList);

    }

    //When rendering, use methods to return needed elements
    return (
    <>
    <h1>{ metaformExampleJson.title }</h1>
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
                    <TextField value={item.placeholder} onChange={(e) => handleInputChange(e, index) }/>
                </ListItemText>
            </ListItem>
            ))}
        </List> 
    </Grid>
    </>
    );


};
export default FormItemsList;