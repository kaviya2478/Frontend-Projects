import React, {useState, useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() =>{
    const user = localStorage.getItem("user");
    if(user){
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () =>{
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route 
          path="/login" 
           element={<Login setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route 
          path="/register" 
         element={<Register />}
        />
      </Routes>
    </div>
  );
};