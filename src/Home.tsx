import { useEffect, useState } from "react";
import Button from "./components/Button";
import PlusIcon from "./components/PlusIcon";
import ShareIcon from "./components/ShareIcon";
import { useNavigate } from "react-router-dom";
import { url } from "./components/config";
import DisplayCards from "./DisplayCards";
import Logo from "./components/Logo";
import LogoutIcon from "./components/LogoutIcon";

export default function Home() {
    const navigate = useNavigate();
    const [cards, setCards] = useState<any[]>([{}]);
    const [Data, setData] = useState<any[]>([{}]);
    const [shareHash, setShareHash] = useState<string>("");
    const [filter, setFilter] = useState({ type: "" });
    // const navigate = useNavigate();

    async function logout() {
        // let jsonToken = localStorage.getItem("jsontoken");
        localStorage.removeItem('jsontoken');
        navigate('/');
    }

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
            <div className="home flex flex-row h-full w-full relative z-20 ">
                <div className="sidebar hidden md:flex lg:flex flex-col h-screen w-1/6 bg-gradient-to-b from-purple-800 to-purple-100 text-white p-5 sticky top-0 left-0">
                    {/* Title */}
                    <div className="title mb-8">
                        <h1 className="text-3xl font-extrabold tracking-wide text-center text-purple-200">
                            Brainly
                        </h1>
                    </div>

                    {/* Filters */}
                    <div className="filters">
                        <h2 className="text-lg font-semibold mb-4 text-purple-200 uppercase tracking-wide">
                            Filters
                        </h2>

                        <div className="flex flex-col gap-3">
                            {[
                                { id: "all", label: "All Types", value: "" },
                                { id: "doc", label: "Document", value: "doc" },
                                { id: "video", label: "Video", value: "video" },
                                { id: "tweet", label: "Tweet", value: "tweet" },
                            ].map((option) => (
                                <label
                                    key={option.id}
                                    htmlFor={option.id}
                                    className={`
            flex items-center justify-center px-4 py-2 rounded-lg font-medium cursor-pointer transition-all duration-200
            ${filter.type === option.value
                                            ? "bg-white text-purple-800 shadow-lg scale-105"
                                            : "bg-purple-600/50 hover:bg-purple-500 hover:scale-105"
                                        }
          `}
                                >
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name="contentType"
                                        value={option.value}
                                        checked={filter.type === option.value}
                                        onChange={handleFilterChange}
                                        className="hidden"
                                    />
                                    {option.label}
                                </label>
                            ))}
                        </div>

                    </div>
                    <div className="flex items-end h-full m-10">
                        <Button startIcon={<LogoutIcon color="black" size="md" />} variant="Secondary" size="md" onClick={logout} text="Log Out" />
                    </div>
                </div>


                <div className="content flex flex-col w-5/6 sm:w-full bg-white p-5">
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
                    <div className="overflow-y-auto">
                        <DisplayCards cards={cards} setCards={setCards} />
                    </div>
                </div>
            </div>
        </>
    )
};