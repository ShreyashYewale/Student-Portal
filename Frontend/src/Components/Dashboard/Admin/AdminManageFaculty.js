import React, { useState, useEffect } from "react";
const axios = require("axios");

const AdminManageFaculty = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [displayFacultyData, setDisplayFacultyData] = useState([]);

  useEffect(() => {
    axios
      .get("/admin/facultylist")
      .then((res) => {
        const { data } = res;
        setFacultyData([...data]);
        setDisplayFacultyData([...data]);
      })
      .catch((err) => {});
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Handle Search");
    var value = document.querySelector("#admin-manage-faculty-textfield").value;
    var reg = new RegExp(value, "gi");
    
    setDisplayFacultyData([
      ...facultyData.filter((item) => item.username.match(reg) !== null),
    ]);
  };

  const handleSearchTextChange = (value) => {
    var reg = new RegExp(value, "gi");

    setDisplayFacultyData([
      ...facultyData.filter((item) => item.username.match(reg) !== null),
    ]);
  };

  const toggleMoreInfoSection = (e) => {
    const item = e.currentTarget.childNodes[1];
    if (item.style.height === "100px") {
      item.style.height = `0px`;
    } else {
      item.style.height = `100px`;
    }
  };

  return (
    <div>
      <h1>Admin Manage Faculty</h1>
      <div className="admin-data container p-4">
        <form onSubmit={handleSearch}>
          <div class="input-group mb-3">
            <input
              id="admin-manage-faculty-textfield"
              type="text"
              class="form-control"
              placeholder="Faculty's Username"
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
          {displayFacultyData.length !== 0 ? (
            <>
              {displayFacultyData.map((item, index) => (
                <li
                  key={index}
                  className="manage-item"
                  onClick={(e) => toggleMoreInfoSection(e)}
                >
                  <div className="main-details">
                    <div className="index">{index + 1}.</div>
                    <div className="username">{item.username}</div>
                    <div className="enable-disable-btn">
                      <button className="btn btn-primary btn-sm">
                        Disable
                      </button>
                    </div>
                    <div className="delete-btn">
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </div>
                  </div>
                  <div className="more-details">email: {item.email}</div>
                </li>
              ))}
            </>
          ) : (
            <li className="manage-item">
              <div className="main-details">
                <div className="username">No Records Found..!</div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AdminManageFaculty;
