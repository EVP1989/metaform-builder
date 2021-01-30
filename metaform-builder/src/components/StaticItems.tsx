import { Box, createStyles, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SubjectIcon from '@material-ui/icons/Subject';
import React, { useState, useRef } from 'react';
import '../styles/FormItems.css';

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

const StaticItems : React.FC = () => {

    const classes = useStyles();
    const draggingItem = useRef<number | null>(null);
    const dragOverItem = useRef<number | null>(null);

    //TODO: Generate list from static list of desired form items
    //TODO: Make mutable list of that can add/remove form items
    //TODO: Make method that writes list to json file
    const [formBlockList, setFormBlockList] = useState([
    'Block1',
    'Block2',
    'Block3'
    ]);

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

    return (
    <>
    <List>
        {formBlockList && formBlockList.map((item, index) => (
        <ListItem
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragOver={(e) => e.preventDefault()}
            key={index} draggable
            className={classes.components}
            >
            <Box border={1} display="flex" pr={2}>
                <ListItemIcon className={classes.icon}>
                    <SubjectIcon />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="h6">
                        {item}
                    </Typography>
                </ListItemText>
            </Box>
        </ListItem>
        ))}
    </List> 
    </>
    );
};
export default StaticItems;