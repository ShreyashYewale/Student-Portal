import React, { useEffect, useState } from "react";
const axios = require("axios");

const AdminManageStudent = () => {
  const [studentData, setStudentData] = useState([]);
  const [displayStudentData, setDisplayStudentData] = useState([]);

  useEffect(() => {
    axios
      .get("/admin/studentlist")
      .then((res) => {
        console.log(res.data);
        const { data } = res;
        setStudentData([...data]);
        setDisplayStudentData([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("Student Data: ", studentData);
  }, [studentData]);

  useEffect(() => {
    console.log("Display Student Data : ", displayStudentData);
  }, [displayStudentData]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Handle Search");
    var value = document.querySelector("#admin-manage-student-textfield").value;
    if (value !== null) {
      var reg = new RegExp(value, "gi");

      setDisplayStudentData([
        ...studentData.filter((item) => item.username.match(reg) !== null),
      ]);
    }
  };

  const handleSearchTextChange = (value) => {
    var reg = new RegExp(value, "gi");
    setDisplayStudentData([
      ...studentData.filter((item) => item.username.match(reg) !== null),
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

  const DeleteStudent = (item) => {
    console.log(item._id);
    axios
      .post("/admin/deletestudent", {
        _id: item._id,
        email: item.email,
      })
      .then((res) => {
        console.log(res);
        if (res.data.deletedCount !== 0) {
          // Record Deleted
          setStudentData([
            ...studentData.filter((subitem) => subitem.email !== item.email),
          ]);

          setDisplayStudentData([
            ...displayStudentData.filter(
              (subitem) => subitem.email !== item.email
            ),
          ]);
        } else {
          // Record Not Deleted
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const manageBlocking = (item) => {
    console.log("Manage Blocking");
    axios
      .put("/admin/managestudentblocking", {
        _id: item._id,
        email: item.email,
        setIsBlocked: !item.isBlocked,
      })
      .then((res) => {
        if (res.data.nModified !== 0) {
          const replaceData = {
            college_name: item.college_name,
            createdAt: item.createdAt,
            email: item.email,
            isBlocked: !item.isBlocked,
            updatedAt: item.updatedAt,
            username: item.username,
            _id: item._id,
          };

          setStudentData([
            ...studentData.filter((subitem) => subitem._id !== item._id),
            replaceData,
          ]);

          /*
          setDisplayStudentData([
            ...displayStudentData.filter((subitem) => {
              if (subitem._id === item._id) {
                return {
                  ...subitem,
                  isBlocked: !subitem.isBlocked,
                };
              }
              return subitem;
            }),
            replaceData,
          ]);
          */
          for (var i = 0; i < displayStudentData.length; i++) {
            if (displayStudentData[i]._id === item._id) {
              setDisplayStudentData([
                ...displayStudentData.filter(
                  (subitem) => subitem._id !== item._id
                ),
                replaceData,
              ]);
              console.log("Code Executed");
              break;
            }
          }
        } else {
          console.log("No Data Updated");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
              id="admin-manage-student-textfield"
              type="text"
              class="form-control"
              placeholder="Student's Username"
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
          {displayStudentData.length !== 0 ? (
            <>
              {displayStudentData.map((item, index) => (
                <li
                  key={index}
                  className="manage-item"
                  // onClick={(e) => toggleMoreInfoSection(e)}
                >
                  <div className="main-details">
                    <div className="index">{index + 1}.</div>
                    <div className="username">{item.username}</div>
                    <div className="enable-disable-btn">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => manageBlocking(item)}
                      >
                        {item.isBlocked === true ? "Unblock" : "Block"}
                      </button>
                    </div>
                    <div className="delete-btn">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => DeleteStudent(item)}
                      >
                        Delete
                      </button>
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

export default AdminManageStudent;
