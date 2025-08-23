import {motion} from "framer-motion";

const MovieCard = ({movie}) =>{
    const ratingColor = movie.rating >=7?'text-green-500' : 'text-red-500';
    return(
       <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs hover:scale-105 transition-transform duration-300" whileHover={{scale: 1.05}}>
            <img src={movie.image} alt={movie.title}  className="w-full h-60 object-cover"/>
            <div className="p-4">
                <h2 className="text-xl font-bold">{movie.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{movie.description}</p>
                <p className={`mt-3 font-semibold ${ratingColor}`}>Rating:{movie.rating}</p>
                <button mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600>Watch Now</button>
            </div>
       </motion.div>
    );
};

export default MovieCard;