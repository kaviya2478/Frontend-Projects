import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import { PlayerProvider } from "./context/PlayerContext";

const Home = lazy(() => import("./components/Home")); // Song list home
const SongDetails = lazy(() => import("./pages/SongDetails"));

export default function App(){
  return (
    <BrowserRouter>
      <PlayerProvider>
        <Navbar />
        <main className="pt-6 pb-32">
          <Suspense fallback={<div className="p-4">Loading page…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/song/:id" element={<SongDetails />} />
            </Routes>
          </Suspense>
        </main>
        <Player />
      </PlayerProvider>
    </BrowserRouter>
  );
}
