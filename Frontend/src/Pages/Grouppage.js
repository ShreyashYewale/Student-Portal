import React, { useState, useEffect } from "react";
import Content from "../Components/GroupPage/Content";
import Navbar from "../Components/GroupPage/Navbar";

// Context
import { GroupContext } from "../Context/Context";

const Grouppage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentSelectedOption, setCurrentSelectedOption] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>
          <GroupContext.Provider
            value={{ currentSelectedOption, setCurrentSelectedOption }}
          >
            <div style={{ height: "75px" }}></div>
            <Navbar />
            <Content />
          </GroupContext.Provider>
        </div>
      ) : (
        <div className="homepage-loader">
          <div
            className="spinner-border text-white"
            style={{ width: `3rem`, height: `3rem` }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grouppage;
