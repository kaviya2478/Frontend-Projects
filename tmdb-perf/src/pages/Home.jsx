import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {getPopular,searchMovies} from "../api/tmdb";
import SearchBar from "../components/SearchBar";
import useDebounce from "../hooks/useDebounce";
import MovieGrid from "../components/MovieGrid";
import SkeletonCard from "../components/SkeletonCard";
import { use } from "react";

export default function Home() {
    const [query, setQuery] = useState("");
    const debounced = useDebounce(query,400);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const pageRef = useRef(1);
    const lastQueryRef = useRef("");

    const showSkeletons = loading && movies.length === 0;

    const fetchPopular = useCallback(async () => {
        setLoading(true);
        try{
            const data = await getPopular(1);
            setMovies(data.results || []);
            pageRef.current = 1;
            lastQueryRef.current = "";
        }finally{
            setLoading(false);
        }
    },[]);

    const fetchSearch = useCallback(
    async (q, page = 1) => {
      if (!q.trim()) return fetchPopular();
      setLoading(true);
      try {
        const data = await searchMovies(q, page);
        setMovies(page === 1 ? data.results || [] : [...movies, ...(data.results || [])]);
        pageRef.current = page;
        lastQueryRef.current = q;
      } finally {
        setLoading(false);
      }
    },
    [movies, fetchPopular]
  );

  // initial load
  useEffect(() => {
    fetchPopular();
  }, [fetchPopular]);

  // debounced search
  useEffect(() => {
    if (debounced !== lastQueryRef.current) {
      fetchSearch(debounced, 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  const headerText = useMemo(() =>{
    return lastQueryRef.current ? `Search: ${lastQueryRef.current}` : "Popular Movies";
  }, [movies]);

  const loadMore = async () => {
    const nextPage = pageRef.current + 1;
    await fetchSearch(lastQueryRef.current || "", nextPage);
  };
return (
    <div className="max-w-6xl mx-auto p-4">
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSubmit={() => fetchSearch(query, 1)}
        loading={loading}
      />

      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">{headerText}</h2>
        {movies.length > 0 && (
          <button
            onClick={loadMore}
            className="px-3 py-1 rounded border hover:bg-gray-50"
            disabled={loading}
          >
            {loading ? "Loading…" : "Load More"}
          </button>
        )}
      </div>

      {showSkeletons ? (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
          {Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : (
        <MovieGrid movies={movies} />
      )}
    </div>
  );
}