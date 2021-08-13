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
      <div className="container p-4 mb-5 mt-4">
        <div className="row text-center align-items-center justify-content-between">
          <div className="col-md-6">
            <img
              className="img-fluid w-75"
              alt="gallery"
              src={
                process.env.PUBLIC_URL + "/Images/contactus_illustration.svg"
              }
              style={{
                justifyItems: "center",
                alignItems: "center",
              }}
            />
          </div>
          <div className="col-md-6 text-center align-items-center justify-content-between">
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
                width: `100% !important`,
                borderRadius: 10,
              }}
            />
            <input
              className="form-control form-control-lg mt-4"
              type="Number"
              placeholder="Contact No"
              style={{
                width: `100% !important`,
                borderRadius: 10,
              }}
            />
            <input
              className="form-control form-control-lg mt-4"
              type="text"
              placeholder="Description/Query"
              multiple={true}
              style={{
                width: `100% !important`,
                borderRadius: 10,
              }}
            />
            <button
              className="mt-4 px-5 py-2"
              style={{
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
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
