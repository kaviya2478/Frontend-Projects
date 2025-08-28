import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails, posterUrl } from "../api/tmdb";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    let active = true;
    (async () => {
      const data = await getMovieDetails(id);
      if (active) setMovie(data);
    })();
    return () => { active = false; }; // unmount cleanup
  }, [id]);

  if (!movie) return <div className="p-4">Loading…</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link to="/" className="text-blue-600">← Back</Link>
      <div className="mt-4 grid md:grid-cols-3 gap-6">
        <img
          src={posterUrl(movie.poster_path, "w500")}
          alt={movie.title}
          className="w-full rounded"
        />
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold">{movie.title}</h1>
          <p className="text-gray-600 mt-1">{movie.release_date} • ⭐ {movie.vote_average}</p>
          <p className="mt-4">{movie.overview}</p>
          {movie.genres?.length ? (
            <div className="mt-3 text-sm text-gray-700">
              Genres: {movie.genres.map(g => g.name).join(", ")}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
