import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Content from "../Components/GroupPage/Content";
import Navbar from "../Components/GroupPage/Navbar";

// Context
import { GroupContext, AppContext } from "../Context/Context";

const Grouppage = () => {
  const { currentUser } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSelectedOption, setCurrentSelectedOption] = useState(null);
  const history = useHistory();

  useEffect(() => {
    console.log("Hello");
    // if (!currentUser.isLogin) {
    //   history.push("/signin/");
    // } else {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
    // }
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
