import React, { useRef } from 'react';
//React-Quill
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
//Material-UI
import { Checkbox, createStyles, FormControl, InputLabel, List, ListItem, ListItemText, ListSubheader, makeStyles, MenuItem, Radio, Select, TextField, Theme, Typography } from '@material-ui/core';
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
 * Renders form according to given json
 * @param props 
 */
const FormComponents : React.FC<any> = (props : Props) => {

  //Guill configuration for html options
  //TODO: Customize for headers/paragraphs (separate modules?)
  //TODO: Empty string should either delete component or cause warning. 
  const modules = {
    toolbar: [
      //[{ header: "1" }, { header: "4" }, { font: [] }],
      //[{ size: [] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      /*[
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],*/
      //["link", "image", "video"],
      //["clean"]
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: true
    }
  };
  //Guill formats
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
  ];

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
   * Updates form components TITLE 
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
   * Updates metaforms main header (TITLE)
   * @param input 
   */
  const handleFormHeaderChange = (input : any) => {

    let title  = input.target.value;

    const newFormJson = {...props.metaFormJson};

    newFormJson.title = title;

    props.setMetaFormJson(newFormJson);
  }

  /**
   * Updates form component HTML data
   * @param input 
   * @param index 
   */
  const handleHtmlChange = (input : any, index : number) => {

    let newHtml  = input;

    const newFormJson = {...props.metaFormJson};

    const newFormBlockList = [...newFormJson.sections[0].fields];

    newFormBlockList[index].html = newHtml;

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

  /**
   * Returns label for form component
   * @param title 
   */
  const renderLabel = (title : string) => {

    if (title === "Osionpohja"){

      return "Osion pohja"
    }
    if(title === "Otsikko"){

      return "Väliotsikko"
    } 
    if (title === "Tekstikenttä"){

      return "Tekstikenttä"
    }
    if (title === "Valintanappula"){

      return "Valintanappula"
    }
    if (title === "Muokattavateksti"){

      return "Muokattava teksti"
    }
    if (title === "Ehdollinenkenttä"){

      return "Ehdollinen kenttä"
    }
    if (title === "Alasvetovalikko"){

      return "Alasvetovalikko"
    }
    if (title === "Valintaruutu"){

      return "Valintaruutu"
    }
  }



  //TODO: Use methods to return needed elements
  return (
  <>
  <Grid item md={12}>
    <Typography variant="h3" >
      <TextField label="Lomakkeen pääotsikko" variant="outlined" value={props.metaFormJson.title} onChange={(input) => handleFormHeaderChange(input) }/>
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
          <ListItemText >
            <Delete color="primary" onClick={(e) => deleteFormComponent(index)}/>
              {item.type === "html" ?
              <ReactQuill value={item.html} modules={modules} formats={formats} onChange={(input) => handleHtmlChange(input, index) }/>
              :
              ""
              }
              {item.type === "text" ?
              <TextField label={ renderLabel(item.title) } variant="outlined" value={item.title} onChange={(input) => handleInputChange(input, index) }/>
              :
              ""
              }
              {item.type === "radio" ?
              <Radio value="Test"/>
              :
              ""
              }
              {item.type === "boolean" ?
              <TextField label={ renderLabel(item.title) } variant="outlined" value={item.title} onChange={(input) => handleInputChange(input, index) }/>
              :
              ""
              }
              {item.type === "select" ?
              <FormControl >
              <InputLabel>Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="Testi"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
              :
              ""
              }
              {item.type === "memo" ?
              <TextField label={ renderLabel(item.title) } variant="outlined" value={item.title} onChange={(input) => handleInputChange(input, index) }/>
              :
              ""
              }
              {item.type === "checklist" ?
              <Checkbox></Checkbox>
              :
              ""
              }
          </ListItemText>
        </ListItem>
        ))}
    </List> 
  </Grid>
  </>
  );

};

export default FormComponents;