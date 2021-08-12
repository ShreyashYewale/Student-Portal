import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { Link, BrowserRouter } from "react-router-dom";
const Navbar = () => {
  document.addEventListener("scroll", () => {
    if (window.pageYOffset > 5) {
      document.getElementById("navbar").style.backgroundColor = "#f9f9f9";

      document.getElementById("navbar").style.boxShadow = `0px 2px 6px #5f43bd`;
      document.getElementById("font1").style.color = "#000";
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
      document.getElementById("font1").style.color = "#fff";
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
          <FontAwesomeIcon
            id="font1"
            icon={faChalkboardTeacher}
            style={{
              color: "#fff",
              fontWeight: 600,
              fontSize: `40px`,
              marginRight: "20px",
            }}
          />
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
            <a id="nav-ele4" href="#Contact Us">
              Contact Us
            </a>
          </li>
          <li className="ind-options">
            <Link to="/signup">
              <button id="nav-ele5" className="signup_btn">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
