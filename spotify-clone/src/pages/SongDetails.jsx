import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSongById } from "../api/songs";
import { usePlayer } from "../context/PlayerContext";

export default function SongDetails(){
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const { playSongNow } = usePlayer();

  useEffect(() => {
    let active = true;
    fetchSongById(id).then(s => active && setSong(s));
    return () => active = false;
  }, [id]);

  if (!song) return <div>Loading…</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex gap-6">
        <img src={song.cover || "/songs/default.jpg"} alt="" className="w-40 h-40 rounded" />
        <div>
          <h1 className="text-2xl font-bold">{song.title}</h1>
          <p className="text-gray-600">{song.artist}</p>
          <p className="mt-4">{song.album}</p>
          <div className="mt-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => playSongNow(song)}>
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
