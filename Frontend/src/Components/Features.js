import React from "react";
import { features } from "../Data";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import "./Features.css";

const Features = () => {
  return (
    <div>
      <div id="Features"></div>
      <center>
        <h3
          style={{
            color: "#5f43bd",
            fontWeight: 600,
            fontSize: `40px`,
            marginTop: `45px`,
          }}
        >
          <FontAwesomeIcon
            icon={faMicrochip}
            style={{
              color: "#5f43bd",
              fontWeight: 600,
              fontSize: `40px`,
              marginTop: `45px`,
              marginRight: "20px",
            }}
          />
          Features
        </h3>
      </center>

      <div className="container features-container pt-5">
        <div className="row g-4 ">
          {features.map((features, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div
                className="card border-secondary p-2"
                key={index}
                style={{
                  boxShadow: `-5px -5px #000`,
                  borderRadius: 10,
                  border: `2px solid #000`,
                  height: `100%`,
                }}
              >
                <h5 className="text-center mt-3 mb-2">{features.title}</h5>
                <img alt="gallery" src={features.image} />
                <p className="leading-relaxed p-2 mt-2">
                  {features.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
