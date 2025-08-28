import React, { useState } from 'react';
import axios from 'axios';  

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (!validateEmail(email)) {
            setMessage('Invalid email format.');
            return;
        }
        if (password.trim() === "") {
            setMessage('Password cannot be empty.');
            return;
        }

        setLoading(true);
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts", { email, password });
            if(res.status === 201) {
                setMessage('Login successful!');
            }
        } catch(error) {
            setMessage('Login failed. Please try again.');
        }finally{
            setLoading(false);
        }
    };

    return(
        <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
            <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label className='block text-gray-700'>Email</label>
                    <input
            type="email"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
                </div>
                <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

                <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

            </form>

            {message && <p className="mt-4 text-center">{message}</p>}
        </div>
    );
}
