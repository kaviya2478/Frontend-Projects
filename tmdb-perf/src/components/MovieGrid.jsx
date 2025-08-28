import { useMemo } from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  // Heavy derived computation (example: stable sort by popularity)
  const sorted = useMemo(() => {
    return [...movies].sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  }, [movies]);

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
      {sorted.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}
