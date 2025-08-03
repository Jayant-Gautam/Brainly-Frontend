import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayCards from './DisplayCards';
import { url } from './components/config';

export default function SharedBrain() {
    const navigate = useNavigate();
    const [cards, setCards] = useState<any[]>([{}]);

    useEffect(() => {
        async function fetchSharedContent() {
            let hash = window.location.pathname.split("/").pop();
            let res = await fetch(url + 'share/' + hash, {
                method: "GET",
            });
            let data = await res.json();
            console.log(data);
            setCards(data);
        }
        fetchSharedContent();
    }, [navigate]);

    return (
        <>
            <div className="content flex flex-col w-3/4 bg-white p-5">
                <div className="topBar flex justify-between items-center mb-5">
                    <div className="title">
                        <h1 className="text-3xl font-bold text-purple-800">Shared Brain</h1>
                    </div>
                </div>
            </div>

        <DisplayCards cards={cards} setCards={setCards} />
        </>
    )
}
