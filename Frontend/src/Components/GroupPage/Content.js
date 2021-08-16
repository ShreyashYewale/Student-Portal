import React from "react";
import MainContentPane from "./MainContentPane";
import Sidebar from "./Sidebar/Sidebar";

const Content = () => {
  return (
    <div className="grouppage-main-content-container">
      <Sidebar />
      <MainContentPane />
    </div>
  );
};

export default Content;
