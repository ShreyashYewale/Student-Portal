import React from "react";
import { features } from "../../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div className="container-fluid">
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
              marginTop: `15px`,
              marginRight: "20px",
            }}
          />
          Features
        </h3>
      </center>

      <div className="features-container pt-5">
        <div className="row g-4 ">
          {features.map((features, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div
                className="card border-secondary p-2 text-center"
                key={index}
                style={{
                  boxShadow: `-5px -5px #4e5fb6`,
                  borderRadius: 10,
                  border: `1px solid #000`,
                  height: `100%`,
                }}
              >
                <h5 className="text-center mt-3 mb-2">{features.title}</h5>
                <img
                  alt="gallery"
                  className="img-fluid w-10"
                  src={features.image}
                />
                <p className="leading-relaxed p-2 mt-2">
                  {features.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div id="contactus"></div>
      </div>
    </div>
  );
};

export default Features;
