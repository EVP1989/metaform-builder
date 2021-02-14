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
  }),
);

interface Props {
  formBlockList : any,
  setFormBlockList : (newFormBlockList : any) => void
}

/**
 * Renders addable components
 * @param props
 */
const ListOfComponents : React.FC<any> = (props : Props) => {

  const classes = useStyles();

  const addableComponentsList = addableComponents;

  /**
     * Add new form component to component list 
     * @param component 
     * @param index 
     */
    const addFormComponentToList = (component : any, index : number) => {

      const newFormBlockList =  [...props.formBlockList];

      let newFormBlock = JSON.parse(JSON.stringify(addableComponentsList[index]));

      newFormBlockList.push(newFormBlock);
      
      props.setFormBlockList(newFormBlockList);

    }

    /**
     * Returns icon based on rendered addable form component
     * @param title 
     */
    const renderIcon = (title : any) => {

      if (title === "Osionpohja"){

        return <ListItemIcon className={classes.icon}>
                <WebAssetIcon />
              </ListItemIcon>
      }
      if(title === "Otsikko"){

        return <ListItemIcon className={classes.icon}>
                <TextFormatIcon/>
              </ListItemIcon>
      } 
      if (title === "Tekstikenttä"){

        return <ListItemIcon className={classes.icon}>
                <SubjectIcon />
              </ListItemIcon>
      }
      if (title === "Valintanappula"){

        return <ListItemIcon className={classes.icon}>
                <RadioButtonCheckedIcon />
              </ListItemIcon>
      }
      if (title === "Muokattavateksti"){

        return <ListItemIcon className={classes.icon}>
                <CreateIcon />
              </ListItemIcon>
      }
      if (title === "Ehdollinenkenttä"){

        return <ListItemIcon className={classes.icon}>
                <LinkIcon />
              </ListItemIcon>
      }
      if (title === "Alasvetovalikko"){

        return <ListItemIcon className={classes.icon}>
                <ArrowDropDownIcon />
              </ListItemIcon>
      }
      if (title === "Valintaruutu"){

        return <ListItemIcon className={classes.icon}>
                <CheckBoxIcon />
              </ListItemIcon>
      }
      if (title === "Ehdollinenkenttä"){

        return <ListItemIcon className={classes.icon}>
                <ImageIcon />
              </ListItemIcon>
      }
    }

  return (
  <>
  <Grid container>
    <Grid item md={3}>
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
              { renderIcon(component.title) }
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
    <Grid item md={9}>
      <FormComponents formBlockList={props.formBlockList} setFormBlockList={props.setFormBlockList}/>
    </Grid>
  </Grid>
  </>
  );

};
export default ListOfComponents;