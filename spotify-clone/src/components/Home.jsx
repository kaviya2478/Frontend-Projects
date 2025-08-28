import React from "react";
import SongList from "./SongList";

export default function Home(){
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Discover</h1>
      <SongList />
    </div>
  );
}
