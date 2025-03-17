import React from 'react';
import '../styles/logo.css';
import logo from '../assets/logo.svg';

const Logo = () => {
  return (
    <a href="/" className="logo-container">
      <img src={logo} className="logo" alt="logo" />
    </a>
  );
};

export default Logo;