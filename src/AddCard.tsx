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
            <div className="flex items-center justify-center h-16 bg-gradient-to-r from-purple-800 to-purple-100 text-white text-2xl font-semibold">
                    Add Card
            </div>       
            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl flex flex-col gap-6"
            >
                <div className="title flex flex-col gap-1">
                    <label htmlFor="title" className="font-semibold text-gray-800 mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitle}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-base bg-gray-50 focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="type flex flex-col gap-1">
                    <label htmlFor="type" className="font-semibold text-gray-800 mb-1">
                        Type
                    </label>
                    <select
                        name="type"
                        id="type"
                        onChange={handleType}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-base bg-gray-50 focus:outline-none focus:border-indigo-500"
                        value={type}
                    >
                        <option value="" disabled>
                            Select Type
                        </option>
                        <option value="doc">Doc</option>
                        <option value="tweet">Tweet</option>
                        <option value="video">Video</option>
                    </select>
                </div>
                {type == 'tweet' && <TweetInput data={data} setData={setData} />}
                {type === 'doc' && <DocInput data={data} setData={setData} />}
                {type === 'video' && <VideoInput data={data} setData={setData} />}
                <div className="tags flex flex-col gap-1">
                    <label htmlFor="tags" className="font-semibold text-gray-800 mb-1">
                        Tags
                    </label>
                    <input
                        value={tags}
                        onChange={handleTags}
                        type="text"
                        id="tags"
                        placeholder="Add tags separated by commas"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-base bg-gray-50 focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <Button
                    onClick={() => {}}
                    type="submit"
                    variant="Secondary"
                    size="lg"
                    text="Add Card"
                    // className="bg-gradient-to-r from-indigo-500 to-blue-400 text-white rounded-md py-3 text-lg font-semibold hover:from-indigo-700 hover:to-blue-600 mt-3"
                />
            </form>
        </>
    )}
            // <form onSubmit={
            //     handleSubmit
            // } >
            //     <div className="title">
            //         <label htmlFor="title">Title</label>
            //         <input type="text" id="title" value={title} onChange={handleTitle} className="border-1" />
            //     </div>
            //     <div className="type">
            //         <label htmlFor="type">Type</label>
            //         <select name="type" id="type" onChange={handleType} className="border-1">
            //             <option value="" disabled selected>Select Type</option>
            //             <option value="doc">Doc</option>
            //             <option value="tweet">Tweet</option>
            //             <option value="video">Video</option>
            //         </select>
            //     </div>
            //     {type == 'tweet' && <TweetInput data={data} setData={setData}/>}
            //     {type === 'doc' && <DocInput data={data} setData={setData}/>}
            //     {type === 'video' && <VideoInput data={data} setData={setData}/>}
            //     <div className="tags">
            //         <label htmlFor="tags">Tags</label>
            //         <input value={tags} onChange={handleTags} type="text" id="tags" placeholder="Add tags separated by commas" />
            //     </div>
            //     <Button onClick={() => {}} type="submit" variant="Secondary" size="lg" text="Add Card" />
            // </form> 
    //     </>
    // )
// }

function TweetInput(props: { data: string, setData: React.Dispatch<React.SetStateAction<string>> }) {
    function handleData(event: React.ChangeEvent<HTMLInputElement>): void {
        props.setData(event.target.value);
    }

    return (

        <div className="flex flex-col gap-2 ">
            <label className='font-semibold text-gray-800 mb-1' htmlFor="video">Video Link</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md text-base bg-gray-50 focus:outline-none focus:border-indigo-500" onChange={handleData} value={props.data} type="text" id="video" />
        </div>
    )
}

function VideoInput(props: { data: string, setData: React.Dispatch<React.SetStateAction<string>> }) {
    function handleData(event: React.ChangeEvent<HTMLInputElement>): void {
        props.setData(event.target.value);
    }

    return (
        <div className="flex flex-col gap-2 ">
            <label className='font-semibold text-gray-800 mb-1' htmlFor="video">Video Link</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md text-base bg-gray-50 focus:outline-none focus:border-indigo-500" onChange={handleData} value={props.data} type="text" id="video" />
        </div>
    )
}