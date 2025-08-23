import MovieCard from "./components/MovieCard";


function App(){
  const sampleMovie = {
    title: "Inception",
    image: "https://tse3.mm.bing.net/th/id/OIP.Jjl1dG11nMhE_r-IbsEfawHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    rating: 8.8
  };

  return(
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <MovieCard movie={sampleMovie}/>
    </div>
  );
};

export default App;