import React from 'react';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';

const Login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const user = storedUsers.find(user => user.username === username && user.password === password);
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            alert('Đăng nhập thành công!');
            navigate('/home');
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không đúng!');
        }
    }

    return (
        <div className="auth-container">
            <Logo />
            <h2 className="auth-title">Login</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                <label className="auth-label">Username:</label>
                <input className="auth-input" type="text" required
                    value={username} onChange={(e) => setUsername(e.target.value)} />
                <label className="auth-label">Password:</label>
                <input className="auth-input" type="password" required
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="auth-button" type="submit">Login</button>
            </form>
            <div className="auth-link-container">
                <span>Don't have an account? </span>
                <a href="/register" className="auth-link">Register here</a>
            </div>
        </div>
    );
};

export default Login;