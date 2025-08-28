import React from "react";
import { usePlayer } from "../context/PlayerContext";
import { formatTime } from "../utils/format";

export default function Player() {
  const {
    queue, currentIndex, playing, progress, togglePlay, handleNext, handlePrev, volume, setVolume, audioRef, seek
  } = usePlayer();

  const currentSong = queue[currentIndex];

  const onSeek = (e) => {
    const t = Number(e.target.value);
    seek(t);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-inner p-3 flex items-center gap-4 z-30">
      <div className="flex items-center gap-3 min-w-[240px]">
        {currentSong ? (
          <>
            <img src={currentSong.cover || "/songs/default.jpg"} alt="" className="w-12 h-12 rounded" />
            <div>
              <div className="font-semibold">{currentSong.title}</div>
              <div className="text-sm text-gray-500">{currentSong.artist}</div>
            </div>
          </>
        ) : <div className="text-sm text-gray-500">Not playing</div>}
      </div>

      <div className="flex-1 px-4">
        <div className="flex items-center gap-3 justify-center">
          <button onClick={handlePrev} className="p-2">⏮️</button>
          <button onClick={togglePlay} className="p-2">
            {playing ? "⏸️" : "▶️"}
          </button>
          <button onClick={handleNext} className="p-2">⏭️</button>

          <div className="flex items-center gap-2 w-full max-w-xl">
            <input
              type="range"
              min={0}
              max={currentSong?.duration || 0}
              value={Math.floor(progress)}
              onChange={onSeek}
              className="w-full"
            />
          </div>

          <div className="text-xs text-gray-600">
            {formatTime(progress)} / {formatTime(currentSong?.duration || 0)}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 min-w-[150px]">
        <input type="range" min={0} max={1} step={0.01} value={volume} onChange={e => setVolume(Number(e.target.value))} />
      </div>
    </div>
  );
}
