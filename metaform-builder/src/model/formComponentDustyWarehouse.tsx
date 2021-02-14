import {AddableComponents} from '../types/addableComponents'

/**
 * List of components that can be added to the form
 */
const addableComponents : AddableComponents[] = [

    {
        "visibleIf": null,
        "permissionContexts": null,
        "name": "html-field-1",
        "type": "html",
        "title": "Otsikko",
        "required": null,
        "contexts": [],
        "flags": null,
        "placeholder": "Otsikko 1",
        "_class": null,
        "readonly": null,
        "help": null,
        "_default": null,
        "min": null,
        "max": null,
        "step": null,
        "checked": null,
        "printable": null,
        "options": null,
        "sourceUrl": null,
        "uploadUrl": null,
        "singleFile": null,
        "onlyImages": null,
        "maxFileSize": null,
        "addRows": null,
        "draggable": null,
        "columns": [],
        "src": null,
        "text": null,
        "html": "<h3>Otsikko 1</h3>"
      },
      {
        "visibleIf": null,
        "permissionContexts": null,
        "name": "text-field-1",
        "type": "text",
        "title": "Tekstikenttä",
        "required": null,
        "contexts": [],
        "flags": null,
        "placeholder": "Tekstikenttä 1",
        "_class": null,
        "readonly": null,
        "help": null,
        "_default": null,
        "min": null,
        "max": null,
        "step": null,
        "checked": null,
        "printable": null,
        "options": null,
        "sourceUrl": null,
        "uploadUrl": null,
        "singleFile": null,
        "onlyImages": null,
        "maxFileSize": null,
        "addRows": null,
        "draggable": null,
        "columns": [],
        "src": null,
        "text": null,
        "html": null
      },
      {
        "visibleIf": null,
        "permissionContexts": null,
        "name": "status",
        "type": "radio",
        "title": "Valintanappula",//Tila
        "required": null,
        "contexts": [
          "MANAGEMENT_LIST",
          "MANAGEMENT"
        ],
        "flags": {
          "managementEditable": true
        },
        "placeholder": null,
        "_class": null,
        "readonly": null,
        "help": null,
        "_default": null,
        "min": null,
        "max": null,
        "step": null,
        "checked": null,
        "printable": null,
        "options": [
          {
            "name": null,
            "text": null,
            "checked": true,
            "selected": null
          }
        ]
      }
]

export default addableComponents;