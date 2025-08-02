import { ReactElement } from "react"
// import { userDataType } from "./interfaceConfig"

type propsType = {
    variant : "Primary" | "Secondary",
    onClick : (()=>void),
    size : "sm" | "md" | "lg",
    startIcon? : ReactElement | string,
    endIcon? : ReactElement | string,
    text: string
    type?: 'submit' | 'reset' | undefined,
}


export default function Button(props: propsType){
    let variantStyles = {
        "Primary" : "bg-purple-800 text-white active:bg-purple-700 focus:bg-purple-800 hover:shadow-xl",
        "Secondary" : "bg-purple-100 text-purple-800 active:bg-purple-200 focus:bg-purple-100 hover:shadow-lg"
    }
    let sizeType = {
        "sm" : "w-20 h-6 text-xs",
        "md" : "w-30 h-8 text-md font-bold",
        "lg" : "w-40 h-10 text-lg font-bold",
    }
    return (
        <>
        <button onClick={props.onClick} type={props.type} className={` flex gap-3 item-center ${sizeType[props.size]} ${variantStyles[props.variant]} rounded-md duration-80 ease-in transition-all justify-center`}>
            
        {props.startIcon && <div className="flex items-center">{props.startIcon}</div>}
        <div className="flex items-center">
            {props.text}
        </div>
        {props.endIcon && <div className="flex items-center">{props.endIcon}</div>}
        </button>
        </>
    )
}