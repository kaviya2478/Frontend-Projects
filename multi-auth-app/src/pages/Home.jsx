import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home({isAuthenticated}){
    const navigate = useNavigate();

    if(!isAuthenticated){
        navigate('/login');
        return null;
    }

    const user = JSON.parse(localStorage.getItem('user'));
    return(
        <div style={{padding: "20px"}}>
            <h1>Welcome, {user?.email} </h1>
            <p>This is a Home page. You are logged in.</p>
        </div>
    );

}