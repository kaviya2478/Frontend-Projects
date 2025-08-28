import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import { use } from "react";

const PlayerContext = createContext();

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }) => {
    const audioRef = useRef(new Audio());
    const [queue, setQueue] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const[playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0.8);

    useEffect(() =>{
        const audio = audioRef.current;
        audio.volume = volume;
    }, [volume]);

    useEffect(() => {
        const audio = audioRef.current;
        const onTime = () => setProgress(audio.currentTime);
        const onEnded = () => handleNext();

        audio.addEventListener("timeupdate", onTime);
        audio.addEventListener("ended", onEnded);
        return () => {
            audio.removeEventListener("timeupdate", onTime);
            audio.removeEventListener("ended", onEnded);
        };
    },[]);

    const loadAndPlay = useCallback((song) => {
        const audio = audioRef.current;
        if(!song) return;
        audio.src = song.file;
        audio.load();
        audio.play();
        setPlaying(true);
    }, []);

    const playIndex = useCallback((idx) => {
        if(idx < 0 || idx >= queue.length) return;
        setCurrentIndex(idx);
        loadAndPlay(queue[idx]);
    }, [queue, loadAndPlay]);

    const togglePlay = useCallback(() => {
        const audio = audioRef.current;
        if(!audio.src) return;
        if(playing) {
            audio.pause();
            setPlaying(false);
        } else {
            audio.play();
            setPlaying(true);
        }
    },[playing]);

    const handleNext = useCallback(() => {
    if (queue.length === 0) return;
    const next = (currentIndex + 1) % queue.length;
    setCurrentIndex(next);
    loadAndPlay(queue[next]);
  }, [queue, currentIndex, loadAndPlay]);

  const handlePrev = useCallback(() => {
    if (queue.length === 0) return;
    const prev = (currentIndex - 1 + queue.length) % queue.length;
    setCurrentIndex(prev);
    loadAndPlay(queue[prev]);
  }, [queue, currentIndex, loadAndPlay]);

  const playSongNow = useCallback((song) => {
    setQueue((q) => {
      const idx = q.findIndex(s => s.id === song.id);
      if (idx !== -1) {
        // already in queue — play that index
        setCurrentIndex(idx);
        loadAndPlay(q[idx]);
        return q;
      } else {
        const newQ = [...q, song];
        setCurrentIndex(newQ.length - 1);
        loadAndPlay(song);
        return newQ;
      }
    });
  }, [loadAndPlay]);

  const seek = useCallback((time) => {
    const audio = audioRef.current;
    audio.currentTime = time;
    setProgress(time);
  }, []);

  // persist volume
  useEffect(() => {
    const saved = localStorage.getItem("playerVolume");
    if (saved) setVolume(Number(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem("playerVolume", String(volume));
    audioRef.current.volume = volume;
  }, [volume]);

  return (
    <PlayerContext.Provider value={{
      audioRef,
      queue,
      currentIndex,
      playing,
      progress,
      volume,
      setVolume,
      setQueue,
      playIndex,
      togglePlay,
      handleNext,
      handlePrev,
      playSongNow,
      seek
    }}>
      {children}
    </PlayerContext.Provider>
  );
};

