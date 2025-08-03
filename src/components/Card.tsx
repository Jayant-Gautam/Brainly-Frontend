import { ReactElement } from "react";
import ShareIcon from "./ShareIcon";
import TweetIcon from "./TweetIcon";
import DocIcon from "./DocIcon";
import VideoIcon from "./VideoIcon";
import DeleteIcon from "./DeleteIcon";
import { tagType } from "./interfaceConfig";

interface propsType {
    title: string,
    children: ReactElement,
    type: "tweet" | "doc" | "video",
    tag? : [tagType];
    date : string;
    deleteURL?: string;
}

// interface dimensionsType {
//     "video": string,
//     "doc": string,
//     "tweet": string,
// }

// let dimensions : dimensionsType = {
//         "video" : "h-60 w-83",
//         "doc": "h-90 w-70",
//         "tweet": "h-90 w-70"
//     }


export default function Card(props: propsType) {
    
    let style : string = "h-90 w-70";
    // let style : string = dimensions[props.type];
    return (
        <div className={"flex flex-col justify-around gap-3 rounded-xl bg-white shadow-xl px-3 pt-5 pb-3" + " " + style}>
            <div className="flex justify-between gap-1 px-1">
                <div className="flex pt-1">
                    {props.type == "tweet" && <TweetIcon size="lg" color="grey" />}
                    {props.type == "doc" && <DocIcon size="lg" color="grey" />}
                    {props.type == "video" && <VideoIcon size="lg" color="grey" />}
                </div>
                <div className="flex items-end text-md font-bold">
                    {props.title}
                </div>
                <div className="flex gap-3 pt-1">
                    <ShareIcon size="xl" color="grey" />
                    <DeleteIcon size="xl" color="grey" url={props.deleteURL} />
                </div>
            </div>
            <div className="overflow-y-auto h-40">
                {props.children}
            </div>
            <div className="tags">
                {props.tag && props.tag.map((tag, index) => (
                    <span key={index} className="inline-block bg-purple-200 text-purple-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{tag.title}</span>
                ))}
            </div>
            <div className="date justify-self-end">
                <p className="text-gray-500 text-sm mt-2">{new Date(props.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
        </div>
    )
}