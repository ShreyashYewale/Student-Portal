import React, { useContext } from "react";

// Context
import { GroupContext } from "../../../Context/Context";

const IndividualListItem = ({ title, icon }) => {
  const { setCurrentSelectedOption } = useContext(GroupContext);
  return (
    <a
      href={`#${title}`}
      className="list-group-item list-group-item-action list-group-item-light"
      onClick={() => setCurrentSelectedOption(title)}
    >
      <i className={icon}></i>
      <span className="mb-1">{title}</span>
    </a>
  );
};

export default IndividualListItem;
