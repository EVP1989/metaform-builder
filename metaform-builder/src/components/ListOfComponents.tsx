import React from 'react';
import addableComponents from '../model/formComponentDustyWarehouse';
import FormComponents from './FormComponents';
//Material-UI
import { Box, createStyles, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SubjectIcon from '@material-ui/icons/Subject';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import CreateIcon from '@material-ui/icons/Create';
import LinkIcon from '@material-ui/icons/Link';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ImageIcon from '@material-ui/icons/Image';

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
      margin: theme.spacing(1, 1, 1),
    },
    grid: {
      paddingTop: theme.spacing(0),
      textAlign: 'center',
    },
    gridItem: {
      padding: theme.spacing(1),
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

    /**
     * Returns icon based on rendered addable form component
     * @param type 
     */
    const renderIcon = (type : any, html? : string | null) => {

      if (type === "test"){

        return <ListItemIcon className={classes.icon}>
                <WebAssetIcon />
              </ListItemIcon>
      }
      if(type === "html" && html === "<h1>Väliotsikko</h1>"){

        return <ListItemIcon className={classes.icon}>
                <TextFormatIcon/>
              </ListItemIcon>
      } 
      if (type === "html" && html === "<p>Tekstikenttä</p>"){

        return <ListItemIcon className={classes.icon}>
                <SubjectIcon />
              </ListItemIcon>
      }
      if (type === "radio"){

        return <ListItemIcon className={classes.icon}>
                <RadioButtonCheckedIcon />
              </ListItemIcon>
      }
      if (type === "text"){

        return <ListItemIcon className={classes.icon}>
                <CreateIcon />
              </ListItemIcon>
      }
      if (type === "test"){

        return <ListItemIcon className={classes.icon}>
                <LinkIcon />
              </ListItemIcon>
      }
      if (type === "select"){

        return <ListItemIcon className={classes.icon}>
                <ArrowDropDownIcon />
              </ListItemIcon>
      }
      if (type === "checklist"){

        return <ListItemIcon className={classes.icon}>
                <CheckBoxIcon />
              </ListItemIcon>
      }
      if (type === "boolean"){

        return <ListItemIcon className={classes.icon}>
                <ImageIcon />
              </ListItemIcon>
      }
    }

  return (
  <>
  <Grid container spacing={2} className={classes.grid}>
    <Grid item xs={3}>
      <List>
        <Typography variant="h5">
          Palikat
        </Typography>
        {addableComponentsList.map((component, index) => (
          <ListItem
            key={index} draggable
            className={classes.components}
            onClick={(e) => addFormComponentToList(component, index)}
            >
            <Box border={1} display="flex" alignItems="flex-start" width={4/4} pr={3}>
              { renderIcon(component.type, component.html) }
              <ListItemText >
                <Typography >
                  {component.title}
                </Typography>
              </ListItemText>
            </Box>
          </ListItem>
        ))}
      </List> 
    </Grid>
    <Grid item xs={6} >
      <FormComponents metaFormJson={props.metaFormJson} setMetaFormJson={props.setMetaFormJson}/>
    </Grid>
    <Grid item xs={3}>
      Linkit
    </Grid>
  </Grid>
  </>
  );

};
export default ListOfComponents;