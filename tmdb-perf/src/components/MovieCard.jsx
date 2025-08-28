import { memo } from "react";
import { Link } from "react-router-dom";
import { posterUrl } from "../api/tmdb";

function MovieCardBase({ movie }) {
  const { id, title, vote_average, poster_path, release_date } = movie;
  return (
    <Link
      to={`/movie/${id}`}
      className="rounded-lg border hover:shadow-md transition block"
    >
      <img
        src={posterUrl(poster_path)}
        alt={title}
        className="w-full h-64 object-cover rounded-t-lg"
        loading="lazy"
      />
      <div className="p-3">
        <h3 className="font-semibold line-clamp-2">{title}</h3>
        <div className="text-sm text-gray-600 flex justify-between mt-1">
          <span>⭐ {vote_average?.toFixed?.(1) ?? "N/A"}</span>
          <span>{release_date?.slice(0, 4) ?? "-"}</span>
        </div>
      </div>
    </Link>
  );
}

// Memoize by shallow props equality
const MovieCard = memo(MovieCardBase);
export default MovieCard;
