import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage({ setToken, setUsername }) {
  const [username, setUsernameInput] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', username);
      setToken(res.data.token);
      setUsername(username);
      navigate('/blog');
    } catch {
      alert('Invalid login');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={login}>
        <input className="form-control mb-2" placeholder="Username" onChange={e => setUsernameInput(e.target.value)} />
        <input className="form-control mb-2" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-primary">Login</button>
      </form>
      <p className="mt-3">Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default LoginPage;