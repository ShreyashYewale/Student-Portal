import React from "react";

const Footer = () => {
  return (
    <div className="footer homepage-footer">
      <div className="p-4 text-white">
        <div className="container">
          <div className="row py-3 text-center">
            <div className="col-md-6 align-content-center justify-content-between">
              <div className="h3">Contact</div>
              <p className="lead px-2">
                Sanket Salunke-1234567890<br></br>
                <br></br>
                Shreyash Yewale-1234567890<br></br>
              </p>
            </div>
            <div className="col-md-6 mt-md-0 mt-5">
              <div className="links-section">
                <div className="h3">Links</div>
                <div className="">
                  <i className=" bi-twitter fs-2 p-3"></i>
                  <i className=" bi-facebook fs-2 p-3"></i>
                  <i className=" bi-linkedin fs-2 p-3"></i>
                  <i className=" bi-instagram fs-2 p-3"></i>
                </div>
              </div>
              <div className="gmail-section">
                <div className="h3 mt-5">E-mail</div>
                <div className="lead">
                  support@studentportal.com
                  <br />
                  query@studentportal.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 text-center text-white lead homepage-footer-bar">
        Copyright &copy;2021-22
      </div>
    </div>
  );
};

export default Footer;
/*

*/
