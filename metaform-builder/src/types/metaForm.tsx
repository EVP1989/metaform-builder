/**
 * Describing Metaform types
 * TODO: actual types and basic structure
 *
 **/ 
 export default interface Metaform {
    "id": string,
    "replyStrategy"?: null,
    "exportThemeId": string,
    "allowAnonymous"?: true,
    "allowDrafts"?: null,
    "title"?: string,
    "sections"?: [
      {
        "title"?: null,
        "visibleIf"?: null,
        "fields": any[
        ]
      }
    ],
    "filters"?: [
      {
        "id"?: "default",
        "name"?: string,
        "fields"?: any[
          "status^done"
        ]
      }
    ],
    "scripts"?: null
 }