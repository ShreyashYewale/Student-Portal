import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div>
      <div id="Contact Us"></div>
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
            icon={faAddressBook}
            style={{
              color: "#5f43bd",
              fontWeight: 600,
              fontSize: `40px`,
              marginTop: `45px`,
              marginRight: "20px",
            }}
          />
          Have Some Questions?
        </h3>
      </center>
      <div className="container p-4 mb-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <img
              alt="gallery"
              src={process.env.PUBLIC_URL + "/Images/email.gif"}
              style={{
                justifyItems: "center",
                alignItems: "center",
                float: "right",
                width: 400,
                height: 400,
                marginRight: 40,
              }}
            />
          </div>
          <div className="col-md-6 text-center">
            <input
              className="form-control form-control-lg mt-4"
              type="text"
              placeholder="Name"
              style={{
                width: `100% !important`,
                borderRadius: 10,
              }}
            ></input>
            <input
              className="form-control form-control-lg mt-4"
              type="text"
              placeholder="Email"
              style={{
                width: 400,
                borderRadius: 10,
              }}
            />
            <input
              className="form-control form-control-lg mt-4"
              type="Number"
              placeholder="Contact No"
              style={{
                width: 400,
                borderRadius: 10,
              }}
            />
            <input
              className="form-control form-control-lg mt-4"
              type="text"
              placeholder="Description/Query"
              multiple="true"
              style={{
                width: 400,
                height: 100,
                borderRadius: 10,
              }}
            />
            <button
              className="mt-4"
              style={{
                width: 280,
                height: 50,
                borderRadius: 10,
                backgroundColor: "#5f43bd",
                color: "#fff",
                fontWeight: 600,
                border: "1px solid #5f43bd",
                fontSize: 20,
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
