import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../Context/Context";
const axios = require("axios");

export default function FacultyJoinClass() {
  const { currentUser } = useContext(AppContext);

  const [displayClassesData, setDisplayClassesData] = useState([]);
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    axios
      .post("/faculty/getclasses", {
        _id: currentUser._id,
      })
      .then((result) => {
        const { data } = result;
        console.log(data);
        setClassesData([...data]);
        setDisplayClassesData([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearchTextChange = (value) => {
    console.log("Text Changed");
    const reg = new RegExp(value, "gi");

    setDisplayClassesData([
      ...classesData.filter((item) => item.class_name.match(reg) !== null),
    ]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    var value = document.querySelector("#faculty-classes-textfield").value;
    var reg = new RegExp(value, "gi");

    setDisplayClassesData([
      ...classesData.filter((item) => item.class_name.match(reg) !== null),
    ]);
  };

  return (
    <div>
      <div className="admin-data container">
        <form
          onSubmit={handleSearch}
          className="p-4 align-items-center justify-content-center"
        >
          <div class="input-group">
            <input
              id="faculty-classes-textfield"
              type="text"
              class="form-control"
              placeholder="Class Name"
              onChange={(e) => handleSearchTextChange(e.target.value)}
            />
            <button
              type="submit"
              class="input-group-text btn btn-dark"
              id="basic-addon2"
            >
              Search
            </button>
          </div>
        </form>
        <ul className="manage-container">
          <div className="row g-4">
            {displayClassesData.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card">
                  <div
                    style={{ overflow: "hidden" }}
                    className="admin-classes-card-img-container"
                  >
                    <img
                      className="card-img-top admin-classes-card-img"
                      src={item.class_image}
                      alt="Card image cap"
                      draggable="false"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.class_name}</h5>
                    <p className="card-text">
                      {item.class_desc} <br />
                      {item.faculty.username}
                    </p>
                    <a href="#" className="btn btn-primary w-50">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
