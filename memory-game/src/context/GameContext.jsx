import { Children, createContext,useContext,useState } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({children}) =>{
    const [score,setScore] = useState(0);
    const [matchedCards,setMatchedCards] = useState([]);

    return(
        <GameContext.Provider value={{score,setScore,matchedCards,setMatchedCards}}>
            {children}
        </GameContext.Provider>

    );
};