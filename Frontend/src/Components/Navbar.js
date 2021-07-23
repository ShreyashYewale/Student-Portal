import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <span class="header-text">Student Portal</span>
        <ul className="options">
          <li className="ind-options">Home</li>
          <li className="ind-options">About</li>
          <li className="ind-options">Features</li>
          <li className="ind-options">Contact Us</li>
          <li className="ind-options">
            <button className="signup_btn">Sign Up</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
