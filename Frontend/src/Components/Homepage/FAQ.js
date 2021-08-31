import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
const FAQ = () => {
  return (
    <div style={{ marginBottom: '60px' }}>
      <center>
        <h3
          style={{
            color: '#5f43bd',
            fontWeight: 600,
            fontSize: `40px`
          }}>
          <FontAwesomeIcon
            icon={faQuestion}
            style={{
              color: '#5f43bd',
              fontWeight: 600,
              fontSize: `34px`,
              marginTop: `10px`,
              marginRight: '20px'
            }}
          />
          Frequently Asked Questions
        </h3>
      </center>
      <div className='container' style={{ marginTop: `50px` }}>
        <div className='accordion' id='accordionFlushExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingOne'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseOne'
                aria-expanded='false'
                aria-controls='flush-collapseOne'>
                <h6 className='text-center mt-3 mb-2'>
                  Is this platform free?
                </h6>
              </button>
            </h2>
            <div
              id='flush-collapseOne'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingOne'
              data-bs-parent='#accordionFlushExample'>
              <div className='accordion-body'>
                Yes, Student Portal platform is completely free
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingTwo'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseTwo'
                aria-expanded='false'
                aria-controls='flush-collapseTwo'>
                <h6 className='text-center mt-3 mb-2'>
                  What is the use of this platform?
                </h6>
              </button>
            </h2>
            <div
              id='flush-collapseTwo'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingTwo'
              data-bs-parent='#accordionFlushExample'>
              <div className='accordion-body'>
                This platform enable colleges to interact efficiently with
                students. College Faculty can form a group of student in which
                they can give assignments to studnets, also track their
                attendance and performance report.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingThree'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                style={{}}
                data-bs-target='#flush-collapseThree'
                aria-expanded='false'
                aria-controls='flush-collapseThree'>
                <h6 className='text-center mt-3 mb-2'>
                 How this platform will benefit Students?
                </h6>
              </button>
            </h2>
            <div
              id='flush-collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingThree'
              data-bs-parent='#accordionFlushExample'>
              <div className='accordion-body'>
                Through this portal Students can connect to their teachers
                and attend their classes and can track their academics through it.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingFour'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseFour'
                aria-expanded='false'
                aria-controls='flush-collapseFour'>
                <h6 className='text-center mt-3 mb-2'>
                  Can Students and teachers create their own accounts for the portal?
                </h6>
              </button>
            </h2>
            <div
              id='flush-collapseFour'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingFour'
              data-bs-parent='#accordionFlushExample'>
              <div className='accordion-body'>
                Sorry,but Students and teachers cannot create accounts.Instead Admin of College
                can create accounts for students and teachers respectively.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingFive'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                style={{}}
                data-bs-target='#flush-collapseFive'
                aria-expanded='false'
                aria-controls='flush-collapseFive'>
                <h6 className='text-center mt-3 mb-2'>
                 How many Admins can be there for a College?
                </h6>
              </button>
            </h2>
            <div
              id='flush-collapseFive'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingFive'
              data-bs-parent='#accordionFlushExample'>
              <div className='accordion-body'>
               There can be only <b>One</b> Admin for a College.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
