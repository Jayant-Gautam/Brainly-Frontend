import { useEffect, useState } from "react";
import Button from "./components/Button";
import PlusIcon from "./components/PlusIcon";
import ShareIcon from "./components/ShareIcon";
import { useNavigate } from "react-router-dom";
import { url } from "./components/config";
import DisplayCards from "./DisplayCards";
import Logo from "./components/Logo";

export default function Home() {
    const navigate = useNavigate();
    const [cards, setCards] = useState<any[]>([{}]);
    const [Data, setData] = useState<any[]>([{}]);
    const [shareHash, setShareHash] = useState<string>("");
    const [filter, setFilter] = useState({ type: "" });

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
            setData(data);
        } else {
            alert(`Error fetching cards: ${res.status}`);
        }
    }

    const handleFilterChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter({ type: e.target.value });
        if (e.target.value !== '') {
            let tempCards: any[] = [];
            Data.forEach(element => {
                if (element.type === e.target.value) {
                    tempCards.push(element);
                }
            });
            setCards(tempCards);
        } else {
            setCards(Data);
        }
    };

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
            // console.log(data);
            setShareHash(data.shareHash);
        } else {
            alert(`Error sharing brain: ${res.status}`);
        }
    }

    useEffect(() => {
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
            <div className="home flex flex-row h-full w-full bg-red-100 relative z-20">
                <div className="sidebar flex hidden md:block lg:block flex-col w-1/4 bg-purple-800 text-black p-5 ">
                    <div className="title">
                        <h1 className="text-3xl font-bold">Brainly</h1>
                    </div>

                    <div className="filters">
                        <h2 className="text-xl font-semibold mb-2">Filters</h2>
                        <div className="flex flex-col gap-2 mb-3">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="all"
                                    name="contentType"
                                    value=""
                                    checked={filter.type === ""}
                                    onChange={handleFilterChange}
                                />
                                <label htmlFor="all" className="ml-2">All Types</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="doc"
                                    name="contentType"
                                    value="doc"
                                    checked={filter.type === "doc"}
                                    onChange={handleFilterChange}
                                />
                                <label htmlFor="doc" className="ml-2">Document</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="video"
                                    name="contentType"
                                    value="video"
                                    checked={filter.type === "video"}
                                    onChange={handleFilterChange}
                                />
                                <label htmlFor="video" className="ml-2">Video</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="tweet"
                                    name="contentType"
                                    value="tweet"
                                    checked={filter.type === "tweet"}
                                    onChange={handleFilterChange}
                                />
                                <label htmlFor="tweet" className="ml-2">Tweet</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content flex flex-col w-3/4 sm:w-full bg-white p-5">
                    <div className="topBar flex justify-between items-center mb-5">
                        <div className="title flex justify-center items-center gap-1">
                           <Logo className="hidden md:flex lg:flex" size="xl" theme="dark" />
                            <Logo variant="icon" className="flex md:hidden lg:hidden" size="xl" theme="dark" />
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