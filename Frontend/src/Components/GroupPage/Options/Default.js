import React, { useContext } from "react";

import { GroupContext } from "../../../Context/Context";
const Default = () => {
  const { currentSelectedOption } = useContext(GroupContext);

  return (
    <div className="align-items-center justify-content-between text-center p-4">
      <span className="default-content-title">Students Portal</span>
      <img
        className="img-fluid contents-default-image"
        src={
          process.env.PUBLIC_URL + "/Images/content_default_illustration.svg"
        }
        draggable="false"
      />
    </div>
  );
};

export default Default;
