import React, {useEffect,useState} from "react";
import Card from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";
import { GameProvider, useGame } from "./context/GameContext";

const cardsArray = ['🍎', '🍌', '🍇', '🍉', '🍎', '🍌', '🍇', '🍉'];

const shuffleArray = () => cardsArray.sort(() => 0.5 -Math.random()).map((content, index) => ({
    id: index, content,
    flipped: false
}));

const Game = () =>{
    const [cards,setCards] = useState([]);
    const [flippedCards,setFlippedCards] = useState([]);
    const {score,setScore,matchedCards,setMatchedCards} = useGame();

    useEffect(() =>{
        setCards(shuffleArray());
    }, []);

    useEffect(() =>{
        if(flippedCards.length === 2){
            const [first, second] = flippedCards;
            if(cards[first].content === cards[second].content){
                setMatchedCards([...matchedCards, cards[first].content]);
                setScore(score + 1);
                setFlippedCards([]);
            }else{
            setTimeout(() =>{
                setCards((prev) => prev.map((card, idx) => idx=== first || idx===second ? {...card, flipped: false} : card));
                setFlippedCards([]);
            }, 1000);
        }
    }
  }, [flippedCards]);

  const handleCardClick = (index) =>{
    if(flippedCards.length ===2 || cards[index].flipped) return;

    const updatedCards = [...cards];
    updatedCards[index].flipped = true;
    setCards(updatedCards);
    setFlippedCards([...flippedCards, index]);
  };

  return(
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Memory Game</h1>
      <ScoreBoard />
      <div className="grid grid-cols-4 gap-4 justify-center items-center">
        {cards.map((card, index) => (
            <Card key={index} id={index} content={card.content} flipped={card.flipped || matchedCards.includes(card.content)} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );

};

const App = () =>{
    return(
        <GameProvider>
            <Game />
        </GameProvider>
    );
};

export default App;
