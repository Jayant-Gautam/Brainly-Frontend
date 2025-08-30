import Content from './components/Content';

interface propsType {
    cards : any[];
    setCards : (cards: any[]) => void;
}

export default function DisplayCards(props : propsType) {

    return (
            <div className="cards grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 h-full pb-10 justify-center align-middle overflow-y-auto">
                {props.cards.map((card, index) => (
                    <Content key={index} title={card.title} data={card.data} type={card.type} tag={card.tag} date={card.date} id={card._id} />
                ))}
            </div>
    );
}
