/**
 * Interface describing addable components properties
 * TODO: Check & correct the actual types of properties
 */
export interface AddableComponents {
        "visibleIf"?: null,
        "permissionContexts"?: null,
        "name"?: string | null,
        "type"?: string | null,
        "title"?: string | null,
        "required"?: null,
        "contexts"?: any[],
        "flags"?: {} | null,
        "placeholder"?: string | null,
        "_class"?: null,
        "readonly"?: null,
        "help"?: null,
        "_default"?: null,
        "min"?: null,
        "max"?: null,
        "step"?: null,
        "checked"?: null,
        "printable"?: null,
        "options"?: [
                {
                "name"?: string | null,
                "text"?: string | null,
                "checked"?: boolean | null,
                "selected"?: boolean | null
                }
        ] | null | any,
        "sourceUrl"?: null,
        "uploadUrl"?: null,
        "singleFile"?: null,
        "onlyImages"?: null,
        "maxFileSize"?: null,
        "addRows"?: null,
        "draggable"?: null,
        "columns"?: any[],
        "src"?: null,
        "text"?: null,
        "html"?: string | null
}
