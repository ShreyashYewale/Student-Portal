import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark py-3 fixed-top"
      style={{ color: "#fff", backgroundColor: "#4e5fb6" }}
    >
      <div className="container-fluid px-3">
        <a href="#icon" className="navbar-brand">
          <span>
            <FontAwesomeIcon
              id="font1"
              icon={faChalkboardTeacher}
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: `25px`,
                marginRight: "20px",
              }}
            />
            Student Portal
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav-menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#questions" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#contactus" className="nav-link">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <Link to="/signin">
                <button type="button" className="btn btn-outline-light">
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
