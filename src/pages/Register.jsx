import React from 'react';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';

const Register = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.some(user => user.email === email);
    if (!userExists) {
      const newUser = { username, email, password };
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      alert('Đăng ký thành công!');
      navigate('/login');
    } else {
      alert('Email đã được sử dụng!');
    }
  }
  return (
    <div className="auth-container">
      <Logo />
      <h2 className="auth-title">Register</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="auth-label">Username:</label>
        <input className="auth-input" type="text" required
          value={username} onChange={(e) => setUsername(e.target.value)} />
        <label className="auth-label" >Email:</label>
        <input className="auth-input" type="email" required
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="auth-label">Password:</label>
        <input className="auth-input" type="password" required
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="auth-button" type="submit">Register</button>
      </form>
      <div className="auth-link-container">
        <span>Already have an account? </span>
        <a href="/login" className="auth-link">Login here</a>
      </div>
    </div>
  );
};

export default Register;