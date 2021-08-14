import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
const Feedback = () => {
  return (
    <div>
      <center>
        <h3
          style={{
            color: "#5f43bd",
            fontWeight: 600,
            fontSize: `40px`,
            marginBottom: `50px`,
          }}
        >
          <FontAwesomeIcon
            icon={faCommentAlt}
            style={{
              color: "#5f43bd",
              fontWeight: 600,
              fontSize: `34px`,
              marginTop: `10px`,
              marginRight: "20px",
            }}
          />
          Feedbacks
        </h3>
      </center>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner align-items-center justify-content-between">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="carousel-block"></div>
            <div className="carousel-caption m">
              <img
                className="carousel-image rounded-circle"
                src="https://randomuser.me/api/portraits/men/9.jpg"
                alt=""
              />
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item " data-bs-interval="10000">
            <div className="carousel-block"></div>
            <div className="carousel-caption ">
              <img
                className="carousel-image rounded-circle"
                src="https://randomuser.me/api/portraits/men/4.jpg"
                alt=""
              />
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item " data-bs-interval="10000">
            <div className="carousel-block"></div>
            <div className="carousel-caption ">
              <img
                className="carousel-image rounded-circle"
                src="https://randomuser.me/api/portraits/men/7.jpg"
                alt=""
              />
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Feedback;
