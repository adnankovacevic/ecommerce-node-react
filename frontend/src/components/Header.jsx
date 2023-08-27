import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Your Logo</Link>
      </div>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        {/* Add more links here */}
      </div>
    </header>
  );
}

export default Header;
