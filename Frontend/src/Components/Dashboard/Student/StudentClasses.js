import React, { useState, useEffect, useContext, } from "react";
import {useHistory} from 'react-router-dom'
import { AppContext } from "../../../Context/Context";
const axios = require("axios");

const StudentClasses = () => {
  const history = useHistory();
  const { currentUser,classDetails,setclassDetails} = useContext(AppContext);
  const [displayClassesData, setDisplayClassesData] = useState([]);
  const [classesData, setClassesData] = useState([]);

  const [isDisplay, setIsDisplay] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    // TODO: get request not working
    axios
      .post("/student/getclasses", {
        _id: currentUser._id,
        email: currentUser.email,
      })
      .then((result) => {
        const { classes } = result.data.result;

        setClassesData([...classes]);
        setDisplayClassesData([...classes]);
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

  const handleClassContinue=(item)=>{
    setclassDetails(item);
    history.push('/group/')
  }

  const handleSearch = (e) => {
    e.preventDefault();
    var value = document.querySelector("#admin-classes-textfield").value;
    var reg = new RegExp(value, "gi");

    setDisplayClassesData([
      ...classesData.filter((item) => item.class_name.match(reg) !== null),
    ]);
  };

  const displayAlert = () => {
    return (
      <>
        {isDisplay ? (
          <div
            class="alert alert-primary"
            style={{ marginTop: `12px` }}
            role="alert"
          >
            {msg}
          </div>
        ) : (
          ""
        )}
      </>
    );
  };

  const removeAlert = () => {
    setMsg("");
    setIsDisplay(false);
  };

  const joinClass = () => {
    const joinClassContainer = document.querySelector("#joinClassCode");
    console.log(joinClassContainer.value);

    axios
      .post("student/addclass", {
        class_id: joinClassContainer.value,
        student_id: currentUser._id,
        student_email: currentUser.email,
      })
      .then((result) => {
        const { data } = result;

        setMsg(data.msg);
        setIsDisplay(true);
      })
      .catch((err) => {
        console.log(err);
        setMsg("Class Not Added..!");
        setIsDisplay(false);
      });
  };

  return (
    <div>
      <div className=" container">
        <form
          onSubmit={handleSearch}
          className="p-4 align-items-center justify-content-center d-flex"
        >
          <button
            className="btn btn-primary"
            style={{ width: "170px", marginRight: `10px` }}
            onClick={removeAlert}
            data-bs-toggle="modal"
            data-bs-target="#joinClassModal"
          >
            Join Class
          </button>
          <div class="input-group">
            <input
              id="admin-classes-textfield"
              type="text"
              class="form-control"
              placeholder="Search: Enter Class Name"
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
          <div
            class="modal fade"
            id="joinClassModal"
            tabindex="-1"
            aria-labelledby="joinClassModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="joinClassModalLabel">
                    Join Class
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Class Code
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="joinClassCode"
                        placeholder="Enter Class Code"
                      />
                      <button
                        className="btn btn-primary"
                        style={{ marginTop: `12px` }}
                        onClick={joinClass}
                      >
                        JOIN
                      </button>
                      {displayAlert()}
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
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
                      {item.class_desc}
                      <br />
                      {item.faculty.username}
                    </p>

                    <a href="#" className="btn btn-primary w-50" onClick={()=>handleClassContinue(item)}>
                     Continue
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
};

export default StudentClasses;
