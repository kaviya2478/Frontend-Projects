import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar({isAuthenticated, onLogout}){
    return(
        <nav style={{padding: "10px", background:"#eee"}}>
            <Link to="/" style={{marginRight: "10px"}}>Home</Link>
            {isAuthenticated ? (    
                <>
                <Link to="/login" style={{marginRight: "10px"}}>Login</Link>
                <Link to="/register">Register</Link>
                </>
    ):(
        <button onClick={onLogout} style={{marginLeft:"10px"}}>Logout</button>
    )}
    </nav>
    );
};