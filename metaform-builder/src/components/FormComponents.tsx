import React, { useRef } from 'react';
//React-Quill
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
//Material-UI
import { Checkbox, createStyles, FormControl, InputLabel, List, ListItem, ListItemText, makeStyles, MenuItem, Radio, Select, TextField, Theme, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Delete } from '@material-ui/icons';
//Html Parser
import { parse } from 'node-html-parser';

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
    gridItem: {
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor: theme.palette.background.paper
    },
  }),
);

interface Props {
  setMetaFormJson : (newMetaFormJson : any) => void
  metaFormJson : any,
}

//Slugify
let slugify = require('slugify')

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
   * Creates slugified string to be used as name
   * @param content 
   */
  const createSlugifiedName = (content : string) => {

    let slugifiedContent = "";

    content = content.toString();

    slugifiedContent = slugify(content);

    return slugifiedContent.slice(0,21);
  }

  /**
   * Updates form components TITLE 
   * 
   * @param input 
   * @param index   
  */   
  const handleInputChange = (input : any, index : number) => {

      let title  = input.target.value;

      let newName = createSlugifiedName(title.toLowerCase());
      
      const newFormJson = {...props.metaFormJson};

      const newFormBlockList = [...newFormJson.sections[0].fields];

      newFormBlockList[index].title = title;

      newFormBlockList[index].name = newName;

      newFormJson.sections[0].fields = newFormBlockList;

      props.setMetaFormJson(newFormJson);
  }

  /**
   * Updates form components PLACEHOLDER
   * 
   * @param input 
   * @param index   
  */   
 const handlePlaceholderChange = (input : any, index : number) => {

  let placeholder  = input.target.value;
  
  const newFormJson = {...props.metaFormJson};

  const newFormBlockList = [...newFormJson.sections[0].fields];

  newFormBlockList[index].placeholder = placeholder;

  newFormJson.sections[0].fields = newFormBlockList;

  props.setMetaFormJson(newFormJson);
}

/**
   * Updates form components NAME 
   * 
   * @param input 
   * @param index   
  */   
 const handleNameChange = (input : any, index : number) => {

  let name  = input.target.value;
  
  const newFormJson = {...props.metaFormJson};

  const newFormBlockList = [...newFormJson.sections[0].fields];

  newFormBlockList[index].name = name;

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

    //parses html tagged content to be slugified
    let parsedHtml = parse(newHtml);

    let newName = createSlugifiedName(parsedHtml.rawText.toLowerCase());

    const newFormJson = {...props.metaFormJson};

    const newFormBlockList = [...newFormJson.sections[0].fields];

    newFormBlockList[index].html = newHtml;

    newFormBlockList[index].name = newName;

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

  //TODO: Quill elements acting weird when drag&drop, resolve.
  return (
  <>
  <Grid item md={12} className={classes.gridItem}>
    <Typography variant="h3" >
      <TextField fullWidth label="Lomakkeen pääotsikko" variant="outlined"  value={props.metaFormJson.title} onChange={(input) => handleFormHeaderChange(input) }/>
    </Typography>
    <List className={classes.gridItem}>
        {props.metaFormJson.sections[0].fields.map((item : any, index : number) => (
        <ListItem
          onDragStart={(e) => handleDragStart(e, index)}
          onDragEnter={(e) => handleDragEnter(e, index)}
          onDragOver={(e) => e.preventDefault()}
          key={index} 
          draggable
          className={classes.components}
          >
          <ListItemText>
            <Delete color="primary" onClick={(e) => deleteFormComponent(index)}/>
              {item.type === "html" ?
              <ReactQuill value={item.html} modules={modules} formats={formats} onChange={(input) => handleHtmlChange(input, index) }/>
              :
              ""
              }
              {item.type === "text" ?
              <FormControl >
                <h6>Testi input field</h6>
                <TextField label="placeholder" variant="outlined" placeholder={item.placeholder} onChange={(input) => handlePlaceholderChange(input, index) }/>
                <TextField label="title" variant="outlined" placeholder="Otsikko" onChange={(input) => handleInputChange(input, index) }/>
                <TextField label="name" variant="outlined" placeholder="Esim. info-1" onChange={(input) => handleNameChange(input, index) }/>
              </FormControl>
              :
              ""
              }
              {item.type === "radio" ?
              <Radio value="Test"/>
              :
              ""
              }
              {item.type === "boolean" ?
              <p>Boolean</p>
              :
              ""
              }
              {item.type === "select" ?
              <FormControl >
              <InputLabel>Testi</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="10"
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
              <p>memo</p>
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