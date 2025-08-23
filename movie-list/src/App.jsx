import React, {useState} from "react";
import MovieCard from "./components/MovieCard";
import movies from "./data/movies";

const App = () =>{
  const[Movies, setMovies] = useState(movies);

  const addMovie = () =>{
    const newMovie = {
      id:Movies.length+1,
      title: `New Movie ${Movies.length+1}`,
      rating: Math.round(Math.random() *10),

    };

    setMovies([...Movies, newMovie]);
  };


  return(
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Movie List
      </h1>
      <div className="flex justify-center mb-4">
        <button onClick={addMovie} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Random Movie</button>
      </div>
      <div className="flex flex-wrap justify-center gap-4">{Movies.map((movie) =>(
        <MovieCard key={movie.id} title={movie.title} rating={movie.rating} />
      ))}
      </div>
    </div>
  );

};

export default App