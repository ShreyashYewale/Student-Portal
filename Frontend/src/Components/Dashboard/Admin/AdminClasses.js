import React, { useState } from "react";

const AdminClasses = () => {
  const [displayClassesData, setDisplayClassesData] = useState([
    {
      classname: "LPCC",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, commodi!",
    },
    {
      classname: "DAA",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, commodi!",
    },
    {
      classname: "FinTech",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, commodi!",
    },
    {
      classname: "Data Science",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, commodi!",
    },
    {
      classname: "BIDA",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, commodi!",
    },
  ]);

  const [classesData, setClassesData] = useState([]);

  const handleSearchTextChange = (e) => {
    e.preventDefault();
    console.log("Text Changed");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Seach Button Pressed");
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
              id="admin-manage-faculty-textfield"
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
                      src={process.env.PUBLIC_URL + "/demo-images/img3.jpg"}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.classname}</h5>
                    <p className="card-text">{item.desc}</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-md-4">
              <div className="card">
                <div
                  style={{ overflow: "hidden" }}
                  className="admin-classes-card-img-container"
                >
                  <img
                    className="card-img-top admin-classes-card-img"
                    src={process.env.PUBLIC_URL + "/demo-images/img2.jpg"}
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Demo</h5>
                  <p className="card-text">Testing</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default AdminClasses;
