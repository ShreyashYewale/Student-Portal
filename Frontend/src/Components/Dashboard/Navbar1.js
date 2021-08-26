import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from 'react-avatar';
import {
  faUserCircle,
  faBars,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { AppContext } from "../../Context/Context";

const Navbar1 = () => {
  const { currentUser } = useContext(AppContext);

  const [currentHeight, setCurrentHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCurrentHeight(window.document.body.offsetWidth);
  }, []);

  window.addEventListener("resize", (e) => {
    if (window.document.body.offsetWidth <= 840 && currentHeight > 840) {
      setCurrentHeight(window.document.body.offsetWidth);
    } else if (currentHeight <= 840) {
      setCurrentHeight(window.document.body.offsetWidth);
    }
  });

  const handleSideMenu = () => {
    const sidebar = document.querySelector(".sidebar-container");
    if (sidebar !== null) {
      if (isOpen) {
        sidebar.style.left = "-300px";
        setIsOpen(false);
      } else {
        sidebar.style.left = "0px";
        setIsOpen(true);
      }
    } else {
      console.log("Not Found");
    }
  };
  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark py-3 fixed-top'
      style={{ color: '#fff', backgroundColor: '#4e5fb6' }}>
      <div className='container-fluid px-3'>
        <a className='navbar-brand'>
          <span>
            {window.document.body.offsetWidth <= 840 ? (
              <FontAwesomeIcon
                id='font1'
                icon={faBars}
                style={{
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: `25px`,
                  marginRight: '20px'
                }}
                onClick={handleSideMenu}
              />
            ) : (
              <div>
                <Link to='/'>
                  <FontAwesomeIcon
                    id='font1'
                    icon={faChalkboardTeacher}
                    style={{
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: `25px`,
                      marginRight: '20px'
                    }}
                  />
                </Link>
                {currentUser.role === 'Admin'
                  ? 'Admin Dashboard'
                  : currentUser.role === 'Faculty'
                  ? 'Faculty Dashboard'
                  : currentUser.role === 'Student'
                  ? 'Student Dashboard'
                  : ''}
              </div>
            )}
          </span>
        </a>
        <ul className='navbar-nav ms-auto'>
          <li
            className='nav-item'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: `22px`,
              marginRight: `10px`
            }}>
            Welcome, {currentUser.username}
          </li>
          <li className='nav-item'>
            <Avatar
              color={'#282091'}
              name={currentUser.username}
              size='55'
              round={true}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;
