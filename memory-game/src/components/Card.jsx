import React from "react";

const Card = ({id, content,flipped, onClick}) =>{
    return(
        <div className={`w-24 h-32 flex items-center justify-center border-2 rounded-md text-white font-bold cursor-pointer transition-all duration-300 ${flipped ? 'bg-blue-600' : 'bg-gray-400'}`} onClick={() => onClick(id)}>
            {flipped ? content : '?'}
        </div>
    );
};

export default Card;