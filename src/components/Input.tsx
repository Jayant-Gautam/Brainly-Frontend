import { ReactElement } from "react"

interface propsType {
    value: string,
    placeholder: string,
    type: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
    position?: "start" | "end",
    Icon?: ReactElement,
    name : string,

}


export default function Input(props: propsType){
    return (
        <>
        {props.position == "end" ? 
        <div className="relative w-70">
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">{props.Icon}</div>
            <input name={props.name} onChange={props.onChange} className="pr-10 pl-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={props.placeholder} value={props.value} type={props.type} />
        </div> 
        : 
        <div className="relative w-70">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">{props.Icon}</div>
            <input name={props.name} onChange={props.onChange} className="pr-4 pl-10 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={props.placeholder} value={props.value} type={props.type} />
        </div>
        }
        </>
    )
}