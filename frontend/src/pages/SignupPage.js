import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', { username, password });
      alert('Signup successful. Please login.');
      navigate('/');
    } catch (err) {
      alert('Signup failed. Username may already exist.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={signup}>
        <input className="form-control mb-2" placeholder="Username" onChange={e => setUsername(e.target.value)} />
        <input className="form-control mb-2" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-success">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;