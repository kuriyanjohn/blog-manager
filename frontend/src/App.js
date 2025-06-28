import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import BlogPage from './pages/BlogPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [username, setUsername] = useState(localStorage.getItem('username'));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken} setUsername={setUsername} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/blog" element={
          <PrivateRoute>
            <BlogPage token={token} username={username} />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;