import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const handleDeleteAccount = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const storedUsers = JSON.parse(localStorage.getItem('users'));
        const updatedUsers = storedUsers.filter(u => u.email !== user.email);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.removeItem('user');
        navigate('/login');
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || "null");
        if (!user) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div className="home-container">
            <h1>Welcome, {JSON.parse(localStorage.getItem('user') || '{}').username}!</h1>
            <button className="logout-button" onClick={handleLogout}>Đăng xuất</button>
            <button className="delete-button" onClick={handleDeleteAccount}>Xóa tài khoản</button>
        </div>
    );
};

export default Home;