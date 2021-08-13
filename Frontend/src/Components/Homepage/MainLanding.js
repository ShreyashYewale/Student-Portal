import React from "react";

const MainLanding = () => {
  return (
    <div className="p-4">
      <div className="dummy-div"></div>
      <div className="container main-heading-container">
        <div className="row align-items-center justify-content-between text-md-start text-center g-4">
          <div className="col-md-6 text-white ">
            <div className="heading-title">
              <b>Student Portal</b>
            </div>
            <div className="fs-2 mt-4">
              Simple and easy portal for teachers and students to collaborate
            </div>
            <div className="heading-buttons mt-4 py-2">
              <button className="btn btn-light btn-lg homepage-header-btn">
                Get Started
              </button>
              <button className="btn btn-light btn-lg m-2 explore-btn homepage-header-btn">
                <span className="explore-btn-text">Explore</span>
                <i className="bi bi-arrow-right-circle mx-1 fw-bold explore-btn-icon"></i>
              </button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + "/Images/online_learning.svg"}
              alt="heading_illustration"
            />
          </div>
        </div>
      </div>
      <div id="features"></div>
    </div>
  );
};

export default MainLanding;
