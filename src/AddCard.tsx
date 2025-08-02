import { useState } from "react"
import React from "react";
import DocInput from "./components/DocInput";
import Button from "./components/Button";
import { url } from "./components/config";
import { useNavigate } from "react-router-dom";

export default function addCard() {
    const [title, setTitle] = useState<string>("");
    const [data, setData] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [tags, setTags] = useState<any>(null);
    const navigate = useNavigate();

    function handleTitle(e: React.ChangeEvent<HTMLInputElement>) : void {
        setTitle(e.target.value);
    }
    
    function handleType(e: React.ChangeEvent<HTMLSelectElement>) : void {
        setType(e.target.value);
    }

    function handleTags(e: React.ChangeEvent<HTMLInputElement>): void {
        setTags(e.target.value.split(",").map((tag: string) => tag.trim()));
    }

    async function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let jsonToken = localStorage.getItem("jsontoken");
        if(!jsonToken) {
            alert("Please log in to add a card.");
            navigate("/login");
            return;
        }
        if (!title || !data || !type) {
            alert("Please fill in all fields.");
            return;
        }
        let res = await fetch(url+ "content", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "jsontoken": jsonToken || ""
            },
            body: JSON.stringify({
                title: title,
                data: data,
                type: type,
                tag: tags
            }),
        });
        if (!res.ok) {
            if (res.status === 401) {
                await res.json().then(r => {
                    alert(r.message);
                });
                return;
            }
            alert(`Error: ${res.status}`);
            return;
        }
        let response = await res.json();
        alert(response.message);
        setTitle("");
        setData("");
        setType("");
        setTags("");
        navigate('/home')
    }

    return (
        <>
            <form onSubmit={
                handleSubmit
            } >
                <div className="title">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} onChange={handleTitle} className="border-1" />
                </div>
                <div className="type">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" onChange={handleType} className="border-1">
                        <option value="" disabled selected>Select Type</option>
                        <option value="doc">Doc</option>
                        <option value="tweet">Tweet</option>
                        <option value="video">Video</option>
                    </select>
                </div>
                {type == 'tweet' && <TweetInput data={data} setData={setData}/>}
                {type === 'doc' && <DocInput data={data} setData={setData}/>}
                {type === 'video' && <VideoInput data={data} setData={setData}/>}
                <div className="tags">
                    <label htmlFor="tags">Tags</label>
                    <input value={tags} onChange={handleTags} type="text" id="tags" placeholder="Add tags separated by commas" />
                </div>
                <Button onClick={() => {}} type="submit" variant="Secondary" size="lg" text="Add Card" />
            </form> 
        </>
    )
}

function TweetInput(props: { data: string, setData: React.Dispatch<React.SetStateAction<string>> }) {
    function handleData(event: React.ChangeEvent<HTMLTextAreaElement>): void {
        props.setData(event.target.value);
    }

    return (
        <div>
            <label htmlFor="tweet">Document</label>
            <textarea onChange={handleData} value={props.data} name="data" id="tweet"></textarea>
        </div>
    )
}

function VideoInput(props: { data: string, setData: React.Dispatch<React.SetStateAction<string>> }) {
    function handleData(event: React.ChangeEvent<HTMLInputElement>): void {
        props.setData(event.target.value);
    }

    return (
        <div>
            <label htmlFor="video">Video Link</label>
            <input onChange={handleData} value={props.data} type="text" id="video" />
        </div>
    )
}