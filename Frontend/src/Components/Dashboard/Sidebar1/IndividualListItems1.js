import React, { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Context
import { DashboardContext, AppContext } from "../../../Context/Context";

const IndividualListItems1 = ({ title, icon }) => {
  const { setCurrentSelectedOption } = useContext(DashboardContext);
  const { currentUser, setcurrentUser } = useContext(AppContext);
  const history = useHistory();

  const onItemSelected = () => {
    if (title === "Logout") {
      console.log("Request For Logout");
      setcurrentUser({ isLogin: false });
      history.push("/");
    } else {
      setCurrentSelectedOption(title);
    }
  };
  return (
    <a
      className="list-group-item list-group-item-action list-group-item-light"
      onClick={() => onItemSelected()}
    >
      <i className={icon}></i>
      <span className="mb-1">{title}</span>
    </a>
  );
};

export default IndividualListItems1;
