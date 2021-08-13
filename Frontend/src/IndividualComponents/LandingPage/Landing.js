import React from "react";
import MainLanding from "../../Components/Homepage/MainLanding";
import Navbar from "../../Components/Homepage/Navbar";

const Landing = () => {
  return (
    <div className="main-header">
      <Navbar />
      <MainLanding />
    </div>
  );
};

export default Landing;
