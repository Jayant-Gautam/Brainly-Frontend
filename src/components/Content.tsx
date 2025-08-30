// import { ReactElement } from "react";
import Card from "./Card";
import { tagType } from "./interfaceConfig";
import Tweet from "./TweetEmbedding"

interface propsType {
    title : string;
    data : string;
    type : 'video' | 'doc' | 'tweet';
    tag : [tagType];
    date : string;
    id : string;
}

export default function Content(props : propsType) {
    return (
        <>
            {props.type == "video" && video(props)}
            {props.type == "doc" && doc(props)}
            {props.type == "tweet" && tweet(props)}
        </>
    )
}


function video(props : propsType) {
    let url : string = "https://www.youtube.com/embed/";
    let tempLink : string = "";

    for(let i = props.data.length - 1; i >= 0; i--) {
        if(props.data[i] == "/") {
            break;
        }
        tempLink = props.data[i] + tempLink;
    }
    url += tempLink;

    return (
        <>
        <Card title={props.title} children={
        <div className="mt-10">
          <iframe className="w-full rounded-xl" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      } type={props.type} tag={props.tag} date={props.date} deleteURL={`content/${props.id}`}/>
        </>
    )
}


function doc(props : propsType) {

    return (
        <>
        <Card title={props.title} children={
        <>
          <div dangerouslySetInnerHTML={{ __html: props.data }}></div> 
        </>
      } type={props.type} tag={props.tag} date={props.date} deleteURL={`content/${props.id}`}/>
        </>
    )
}


function tweet(props : propsType) {

    return (
        <>
       <Card title={props.title} children={
        <>
          <Tweet link={props.data}/>
        </>
      } type={props.type} tag={props.tag} date={props.date} deleteURL={`content/${props.id}`}/>
        </>
    )
}