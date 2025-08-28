import React, { memo, useCallback } from "react";
import { usePlayer } from "../context/PlayerContext";

function SongCardBase({ song }) {
  const { playSongNow } = usePlayer();
  const onPlay = useCallback(() => playSongNow(song), [playSongNow, song]);

  return (
    <div className="p-3 border rounded hover:shadow-md flex items-center gap-3">
      <img src={song.cover || "/songs/default.jpg"} alt="" className="w-16 h-16 rounded" />
      <div className="flex-1">
        <div className="font-semibold">{song.title}</div>
        <div className="text-sm text-gray-500">{song.artist}</div>
      </div>
      <button onClick={onPlay} className="bg-blue-500 text-white px-3 py-1 rounded">Play</button>
    </div>
  );
}

export default memo(SongCardBase);
