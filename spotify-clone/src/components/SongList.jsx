import React, { useEffect, useState } from "react";
import { fetchAllSongs } from "../api/songs";
import SongCard from "./SongCard";

export default function SongList() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchAllSongs().then(data => {
      if (!mounted) return;
      setSongs(data);
      setLoading(false);
    });
    return () => { mounted = false; };
  }, []);

  if (loading) return <div>Loading songs…</div>;

  return (
    <div className="grid gap-4">
      {songs.map(s => <SongCard key={s.id} song={s} />)}
    </div>
  );
}
