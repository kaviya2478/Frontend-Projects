import { useCallback } from "react";

export default function SearchBar({ query, setQuery, onSubmit, loading }) {
  const handleChange = useCallback((e) => setQuery(e.target.value), [setQuery]);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSubmit();
  }, [onSubmit]);

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={query}
        onChange={handleChange}
        placeholder="Search movies…"
        className="flex-1 border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Searching…" : "Search"}
      </button>
    </form>
  );
}
