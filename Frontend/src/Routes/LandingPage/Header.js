import React from "react";
import MainLanding from "../../Components/MainLanding";
import Navbar from "../../Components/Navbar";

const Header = () => {
  return (
    <div className="main-header">
      <Navbar />
      <MainLanding />
    </div>
  );
};

export default Header;
