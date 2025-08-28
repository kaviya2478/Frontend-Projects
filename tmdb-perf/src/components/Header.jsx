import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"}`;
  return (
    <header className="p-4 border-b bg-white sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">🎬 TMDB Perf</Link>
        <nav className="flex gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
        </nav>
      </div>
    </header>
  );
}
