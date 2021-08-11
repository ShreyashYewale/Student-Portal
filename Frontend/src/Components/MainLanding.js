import React from "react";
import "./MainLanding.css";
const MainLanding = () => {
  return (
    <div className='main-landing-container'>
      <div className='contents'>
        <div className='con'>
          <h3>Student Portal</h3>
          <h2>
            Simple and easy portal for teachers
            <br />
            and students to collaborate
          </h2>
          <div className='buttons'>
            <button className='btn btn1'>Get Started</button>
            <button className='btn btn2 mt-0'>
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className='illustration'>
        <img src={process.env.PUBLIC_URL + '/Images/Illustration.svg'} />
      </div>
    </div>
  );
};

export default MainLanding;
