import React, { useContext, useEffect, useState } from "react";
import Default from "./Options/Default";
import Chat from "./Options/Chat";

// Context
import { GroupContext } from "../../Context/Context";
import Assignment from "./Options/Assignment";

const MainContentPane = () => {
  const { currentSelectedOption } = useContext(GroupContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className="contents-container">
      {isLoaded ? (
        <div className="default-content-container align-items-center justify-content-between">
          {currentSelectedOption === null ? (
            <Default />
          ) : currentSelectedOption === "Assignments" ? (
            <Assignment />
          ) : currentSelectedOption === "Chat" ? (
            <Chat />
          ) : currentSelectedOption === "Notes" ? (
            <h1>Notes</h1>
          ) : currentSelectedOption === "Attendance" ? (
            <h1>Attendance</h1>
          ) : currentSelectedOption === "Progress" ? (
            <h1>Progress</h1>
          ) : currentSelectedOption === "Links" ? (
            <h1>Links</h1>
          ) : (
            "Item selected"
          )}
        </div>
      ) : (
        <div className="content-loader-container">
          <div
            className="spinner-border text-dark"
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

export default MainContentPane;
