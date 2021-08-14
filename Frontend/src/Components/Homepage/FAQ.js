import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
const FAQ = () => {
  return (
    <div style={{ marginBottom: "60px" }}>
      <center>
        <h3
          style={{
            color: "#5f43bd",
            fontWeight: 600,
            fontSize: `40px`,
          }}
        >
          <FontAwesomeIcon
            icon={faQuestion}
            style={{
              color: "#5f43bd",
              fontWeight: 600,
              fontSize: `34px`,
              marginTop: `10px`,
              marginRight: "20px",
            }}
          />
          Frequently Asked Questions
        </h3>
      </center>
      <div className="container" style={{ marginTop: `50px` }}>
        <div className="accordion" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Is the platform is free?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Yes, Student Portal platform is completely free
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What is use of this platform?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                This platform enable colleges to interact efficiently with
                students. College Faculty can form a group of student in which
                they can give assignments to studnets, also track their
                attendance and performance report.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, dolore unde! Eligendi veritatis nisi vitae,
                laudantium dolores suscipit aliquam nesciunt iusto aut quia
                praesentium cum similique molestias repellendus sit quaerat at?
                Pariatur ea perferendis aspernatur quo tempore voluptatibus
                ipsam voluptatum?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, accusantium laudantium?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                qui voluptatibus et doloremque, repudiandae veritatis
                praesentium corporis accusamus quibusdam! Libero qui explicabo
                id distinctio iure dolores quae unde similique delectus. Ducimus
                repudiandae ab adipisci ratione nihil vitae dolorem minima
                tempora deserunt ullam consequatur, fuga saepe quae cum
                molestiae eveniet quibusdam et cupiditate nostrum nam, dicta
                delectus sequi consectetur? Repudiandae, eum?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis, quia?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                libero placeat asperiores eum. Suscipit non sunt facilis sint
                accusantium amet?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
