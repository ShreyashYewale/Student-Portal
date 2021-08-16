import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { Data } from "./Data";

const Chat = () => {
  useEffect(() => {
    var elem = document.querySelector(".chat-contents-container");
    elem.scrollTop = elem.scrollHeight;
  }, []);
  return (
    <div className="chat-container">
      <div className="chat-contents-container">
        {Data.map((item, index) => (
          <div
            className={`chat-box`}
            style={{
              justifyContent: `${
                item.username === "Sanket" ? "flex-end" : "flex-start"
              }`,
            }}
            key={index}
          >
            <div className="chat-box-item">
              <div className="chat-username">{item.username}</div>
              <div className="chat-msg">{item.msg}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-send-container">
        <div className="input-group chat-input-group">
          <textarea
            type="text"
            rows="1"
            className="form-control"
            placeholder="Chat"
          />
          <span
            style={{ outline: "none" }}
            className="input-group-text bg-primary"
            id="basic-addon2"
          >
            <FontAwesomeIcon
              id="font1"
              icon={faShareSquare}
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: `25px`,
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
