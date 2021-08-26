import React from "react";
import MainContentPane1 from "./MainContentPane1";
import Sidebar1 from "./Sidebar1/Sidebar1";

const Content1 = () => {
  return (
    <div className="grouppage-main-content-container mt-0">
      <Sidebar1 />
      <MainContentPane1 />
    </div>
  );
};

export default Content1;
