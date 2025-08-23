import React from "react";
import { useGame } from "../context/GameContext";

const ScoreBoard = () =>{
    const {score} = useGame();
    return(
        <div className="text-lg font-semibold text-gray-800 mb-4">
            Score: {score}
        </div>
    );
};

export default ScoreBoard;