import React from "react";
import "./Navbar.css";

const Navbar = () => {
  document.addEventListener("scroll", () => {
    if (window.pageYOffset > 580) {
    } else {
    }
    if (window.pageYOffset > 5) {
      document.getElementById("navbar").style.backgroundColor = "#f9f9f9";

      document.getElementById("navbar").style.boxShadow = `0px 2px 6px #5f43bd`;

      document.getElementById("c").style.color = "#000";

      document.getElementById("nav-ele1").style.color = "#000";
      document.getElementById("nav-ele2").style.color = "#000";
      document.getElementById("nav-ele3").style.color = "#000";
      document.getElementById("nav-ele4").style.color = "#000";

      document.getElementById("nav-ele5").style.backgroundColor = "#5f43bd";
      document.getElementById("nav-ele5").style.color = "#fff";
    } else {
      document.getElementById("navbar").style.backgroundColor =
        "rgba(0, 0, 0, 0.09)";

      document.getElementById("c").style.color = "#fff";

      document.getElementById("navbar").style.boxShadow = null;

      document.getElementById("nav-ele1").style.color = "#fff";
      document.getElementById("nav-ele2").style.color = "#fff";
      document.getElementById("nav-ele3").style.color = "#fff";
      document.getElementById("nav-ele4").style.color = "#fff";

      document.getElementById("nav-ele5").style.backgroundColor = "#fff";
      document.getElementById("nav-ele5").style.color = "#000";
    }
  });

  return (
    <div>
      <a href="Home" />
      <nav id="navbar" className="navbar">
        <span className="header-text" id="c">
          Student Portal
        </span>
        <ul className="options">
          <li className="ind-options">
            <a id="nav-ele1" href="#Home">
              Home
            </a>
          </li>
          <li className="ind-options">
            <a id="nav-ele2" href="#Home">
              About
            </a>
          </li>
          <li className="ind-options">
            <a id="nav-ele3" href="#Features">
              Features
            </a>
          </li>
          <li className="ind-options">
            <a id="nav-ele4" href="#Home">
              Contact Us
            </a>
          </li>
          <li className="ind-options">
            <button id="nav-ele5" className="signup_btn">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
