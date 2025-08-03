export interface iconPropsType {
    size : "sm" | "md" | "lg" | "xl",
    color : string,
    url? : string,
}

interface sizeType {
    "height" : number,
    "width" : number,
}

interface iconStyleType {
    "sm" : sizeType,
    "md" : sizeType,
    "lg" : sizeType,
    "xl" : sizeType,
}

export let iconStyle: iconStyleType = {
    "sm" : {
        "height" : 10,
        "width" : 10,
    },
    "md" : {
        "height" : 15,
        "width" : 15,
    },
    "lg" : {
        "height" : 20,
        "width" : 20,
    },
    "xl" : {
        "height" : 25,
        "width" : 25,
    },
}