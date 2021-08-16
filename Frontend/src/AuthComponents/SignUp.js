import React, { useState } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");
const SignUp = () => {
  const [values, setvalues] = useState({
    email: "",
    username: "",
    collegename: "",
    password: "",
    error: "",
    success: false,
  });
  const { email, username, collegename, password, error, success } = values;
  const handleChange = (name) => (event) => {
    setvalues({ ...values, error: false, [name]: event.target.value });
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-2 mt-2">
          <div
            className="alert alert-success"
            style={{
              display: success ? "" : "none",
              fontSize: "12",
              width: "450px",
              height: "55px",
            }}
          >
            <h6>
              New account was created successfully{" "}
              <Link to="/signin">Login Here</Link>
            </h6>
          </div>
        </div>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div className="row">
        <div
          className="alert alert-danger mt-2 col-md-6 offset-sm-3"
          style={{
            display: error ? "" : "none",
            fontSize: "12",
            height: "55px",
            textAlign: "center",
          }}
        >
          Unable to create account..!
        </div>
      </div>
    );
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    setvalues({ ...values, error: false });
    axios
      .post("/admin/createaccount", {
        username: username,
        email: email,
        password: password,
        college_name: collegename,
      })
      .then(function (response) {
        setvalues({
          ...values,
          email: "",
          username: "",
          collegename: "",
          password: "",
          error: "",
          success: true,
        });
        const { data } = response;
        console.log("Account Created Successfully", data);
      })
      .catch(function (error) {
        setvalues({ ...values, error: true, success: false });
        console.error("Account Creation Failed");
      });
  };
  return (
    <div
      className="p-4"
      style={{
        backgroundImage: `url('/Images/signin_background.png')`,
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundSize: "cover",
        width: `100vw`,
        height: `100vh`,
      }}
    >
      <div className="container-fluid align-items-center justify-content-between">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <div className="mt-1 align-items-center justify-content-between">
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
              <form
                onSubmit={onFormSubmit}
                className=" p-4 text-center align-items-center justify-content-between"
              >
                <button
                  className=""
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
                    alt="logo"
                  ></img>
                  Sign in With Google
                </button>
                {successMessage()}
                {errorMessage()}
                <center>
                  <input
                    className="form-control form-control-lg mt-3 align-items-center"
                    type="email"
                    required
                    placeholder="Email"
                    onChange={handleChange("email")}
                    value={email}
                    style={{
                      width: `350px`,
                      height: "35px",
                      borderRadius: 10,
                      border: "1px solid #F3EFE0",
                    }}
                  ></input>
                  <input
                    className="form-control form-control-lg mt-4"
                    type="text"
                    required
                    onChange={handleChange("username")}
                    value={username}
                    placeholder="UserName"
                    style={{
                      width: `350px`,
                      borderRadius: 10,
                      height: "35px",
                      border: "1px solid #F3EFE0",
                    }}
                  ></input>
                  <input
                    className="form-control form-control-lg mt-4"
                    type="text"
                    onChange={handleChange("collegename")}
                    value={collegename}
                    required
                    placeholder="College Name"
                    style={{
                      width: `350px`,
                      borderRadius: 10,
                      height: "35px",
                      border: "1px solid #F3EFE0",
                    }}
                  ></input>

                  <input
                    className="form-control form-control-lg mt-4"
                    type="password"
                    pattern="^[^\r\n]*.{8,32}$"
                    title="Please Enter the valid Password between 8 to 32"
                    required
                    onChange={handleChange("password")}
                    value={password}
                    placeholder="Password"
                    style={{
                      width: `350px`,
                      borderRadius: 10,
                      height: "35px",
                      border: "1px solid #F3EFE0",
                    }}
                  />
                </center>
                <button
                  className="mt-4"
                  type="submit"
                  style={{
                    width: 280,
                    height: 40,
                    borderRadius: 20,
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
                <div className="mt-3">
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
              </form>
            </div>
          </div>
          <div className="col-md-6 d-md-block d-sm-none text-center justify-content-between align-items-center">
            <img
              className="img-fluid w-50"
              src={process.env.PUBLIC_URL + "/Images/security_illustration.svg"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
