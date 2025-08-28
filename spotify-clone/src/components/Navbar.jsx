import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="bg-white shadow p-3 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">TuneBox</Link>
        <div className="flex gap-3">
          <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
        </div>
      </div>
    </nav>
  );
}
