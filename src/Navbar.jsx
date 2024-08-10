// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo w-8 h-2">
          <img src="C:\Users\Admin\Downloads\CODE Poster" alt="poster" />
          </div>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#services" className="nav-link">Services</a>
        </div>
        <div className="navbar-right">
          <a href="#contact" className="contact-button">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
