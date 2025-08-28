// small in-memory "API" for demo
const songs = [
  {
    id: "1",
    title: "Sunrise Drive",
    artist: "Neon Wave",
    album: "Morning Mood",
    duration: 210, // seconds
    file: "/songs/song1.mp3",
    cover: "/songs/song1.jpg" // optional cover images in public/songs/
  },
  {
    id: "2",
    title: "Late Night Code",
    artist: "Byte Beats",
    album: "Syntax",
    duration: 185,
    file: "/songs/song2.mp3",
    cover: "/songs/song2.jpg"
  },
  // add more...
];

export function fetchAllSongs() {
  // emulates async API
  return new Promise((res) => setTimeout(() => res(songs), 200));
}

export function fetchSongById(id) {
  return new Promise((res) => setTimeout(() => res(songs.find(s => s.id === id)), 150));
}
