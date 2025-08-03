import { useEffect, useState } from "react";
import Button from "./components/Button";
import PlusIcon from "./components/PlusIcon";
import ShareIcon from "./components/ShareIcon";
import { useNavigate } from "react-router-dom";
import { url } from "./components/config";
import DisplayCards from "./DisplayCards";

export default function Home() {
    const navigate = useNavigate();
    const [cards, setCards] = useState<any[]>([{}]);
    const [shareHash, setShareHash] = useState<string>("");

    async function handleShareBrain() {
        let jsonToken = localStorage.getItem("jsontoken");
        if (!jsonToken) {
            alert("Please log in to share your brain.");
            navigate("/login");
            return;
        }
        let res = await fetch(url + "share", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "jsontoken": jsonToken || ""
            },
        });
        if (res.ok) {
            let data = await res.json();
            console.log(data);
            setShareHash(data.shareHash);
        } else {
            alert(`Error sharing brain: ${res.status}`);
        }
    }

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
            {shareHash &&
                <div className="shareLinkPrompt flex flex-col items-center justify-center h-screen backdrop-blur-sm absolute top-0 left-0 w-full z-50">
                    <div className="container flex flex-col justify-center align-middle bg-white p-5 rounded-lg shadow-lg relative h-1/3 w-1/3">
                        <button onClick={() => setShareHash("")} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl hover:cursor-pointer">
                            &times;
                        </button>
                        <h1 className="text-2xl font-bold text-center">Share your Brain with others!</h1>
                        <p className="text-center">Share the link below with your friends to let them view your notes.</p>
                        <div className="flex justify-center mt-4">
                            <input type="text" className="border border-gray-300 rounded-lg p-2 w-1/2" value={`${window.location.origin}/share/${shareHash}`} readOnly />
                            <Button onClick={() => navigator.clipboard.writeText(`${window.location.origin}/share/${shareHash}`)} variant="Primary" size="md" text="Copy Link" />
                        </div>
                    </div>
                </div>
            }
            <div className="home flex flex-row h-screen w-screen bg-red-100 relative z-20">
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
                            <Button onClick={() => {
                                handleShareBrain();
                            }} startIcon={<ShareIcon color="grey" size="lg" />} variant="Secondary" size="lg" text="Share Brain" />
                            <Button onClick={() => {
                                navigate("/addCard");
                            }} startIcon={<PlusIcon color="white" size="lg" />} variant="Primary" size="lg" text="Add Content" />
                        </div>
                    </div>
                    <DisplayCards cards={cards} setCards={setCards} />
                </div>
            </div>
        </>
    )
};