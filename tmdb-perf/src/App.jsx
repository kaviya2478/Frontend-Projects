import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const Home = lazy(() => import("./pages/Home"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense
        fallback={
          <div className="max-w-6xl mx-auto p-4">Loading page…</div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
