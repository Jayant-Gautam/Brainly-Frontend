import { useEffect, useState } from "react";
import Button from "./components/Button";
import PlusIcon from "./components/PlusIcon";
import ShareIcon from "./components/ShareIcon";
import { useNavigate } from "react-router-dom";
import { url } from "./components/config";
import Content from "./components/Content";

export default function Home() {
    const navigate = useNavigate();
    const [cards, setCards] = useState<any[]>([{}]);

    useEffect(() => {
        async function fetchCards() {   
            let jsonToken = localStorage.getItem("jsontoken");
            if (!jsonToken) {
                alert("Please log in to view cards.");
                navigate("/login");
                return;
            }
            let res = await fetch(url + "content", {
                method: "GET",
                headers: {
                    "jsontoken": jsonToken || ""
                }
            });
            if (res.ok) {
                let data = await res.json();
                setCards(data);
            } else {
                alert(`Error fetching cards: ${res.status}`);
            }
        }
        fetchCards();
    }, [navigate]);

    return (
        <>
            <div className="home flex flex-row h-screen w-screen bg-red-100">
                <div className="sidebar flex flex-col w-1/4 bg-purple-800 text-black p-5 ">
                    <div className="title">
                        <h1 className="text-3xl font-bold">Brainly</h1>
                    </div>
                    
                    <div className="filters ">
                        <ul className="flex flex-col gap-3 mt-5 ">
                            <li className="text-lg hover:text-purple-300 cursor-pointer">All Notes</li>
                            <li className="text-lg hover:text-purple-300 cursor-pointer">My Notes</li>
                            <li className="text-lg hover:text-purple-300 cursor-pointer">Shared Notes</li>
                            <li className="text-lg hover:text-purple-300 cursor-pointer">Settings</li>
                        </ul>
                    </div>
                </div>
                <div className="content flex flex-col w-3/4 bg-white p-5">
                    <div className="topBar flex justify-between items-center mb-5">
                        <div className="title">
                            <h1 className="text-3xl font-bold text-purple-800">All Notes</h1>
                        </div>
                        <div className="buttons flex gap-3">
                            <Button onClick={()=>{
                                navigate("/addCard");
                            }} startIcon={<ShareIcon color="grey" size="lg"/>} variant="Secondary" size="lg" text="Share Brain" />
                            <Button onClick={()=>{}} startIcon={<PlusIcon color="white" size="lg"/>} variant="Primary" size="lg" text="Add Content"/>
                        </div>
                    </div>
                    <div className="cards grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 h-full justify-center align-middle overflow-y-auto">
                        {cards.map((card, index) => (
                            <Content key={index} title={card.title} data={card.data} type={card.type} tag={card.tag} date={card.date}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};