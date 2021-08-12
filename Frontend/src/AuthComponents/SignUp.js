import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SignUp = () => {
  return (
    <div
      className="p-4"
      style={{
        backgroundImage: `url('/Images/signin_background.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: `100vw`,
        height: `100vh`,
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <div className="mt-4 align-items-center justify-content-between">
              <div className="text-center text-white">
                <h2
                  style={{
                    fontWeight: "600",
                    fontSize: "32px",
                    display: "inline-block",
                  }}
                >
                  Sign Up Here
                </h2>
              </div>
              <div className="mt-2 p-4 text-center align-items-center justify-content-between">
                <button
                  className="mt-2"
                  style={{
                    width: 280,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    fontWeight: 600,
                    border: "1px solid #F3EFE0",
                    fontSize: 16,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ float: "left", marginLeft: 25, marginTop: 5 }}
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                    width="20"
                    height="20"
                  ></img>
                  Sign in With Google
                </button>
                <center>
                  <input
                    className="form-control form-control-lg mt-4 align-items-center"
                    type="text"
                    placeholder="Email"
                    style={{
                      width: `350px`,
                      borderRadius: 10,
                      border: "1px solid #F3EFE0",
                    }}
                  ></input>
                  <input
                    className="form-control form-control-lg mt-4"
                    type="text"
                    placeholder="UserName"
                    style={{
                      width: `350px`,
                      borderRadius: 10,
                      border: "1px solid #F3EFE0",
                    }}
                  ></input>
                  <input
                    className="form-control form-control-lg mt-4"
                    type="text"
                    placeholder="College Name"
                    style={{
                      width: `350px`,
                      borderRadius: 10,
                      border: "1px solid #F3EFE0",
                    }}
                  ></input>

                  <input
                    className="form-control form-control-lg mt-4"
                    type="password"
                    placeholder="Password"
                    style={{
                      width: `350px`,
                      borderRadius: 10,
                      border: "1px solid #F3EFE0",
                    }}
                  />
                </center>
                <button
                  className="mt-4"
                  style={{
                    width: 280,
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: "#5f43bd",
                    color: "#fff",
                    fontWeight: 600,
                    border: "1px solid transparent",
                    fontSize: 16,
                    marginTop: 40,
                  }}
                >
                  Create Account
                </button>
                <div className="mt-4">
                  <a
                    className="text-white p-3"
                    style={{
                      left: "80%",
                      textAlign: "center",
                    }}
                  >
                    Already Registered?
                  </a>
                  <a
                    style={{
                      color: "#d9c2ff",
                      paddingBottom: "2px",
                      borderBottom: "1px solid #d9c2ff",
                    }}
                    href="/signin"
                  >
                    Sign In Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-md-block d-sm-none text-center justify-content-between align-items-center">
            <img
              className="img-fluid w-100"
              src={process.env.PUBLIC_URL + "/Images/signin_backnew.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
