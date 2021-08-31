import React, { useState, useEffect, useContext } from "react";
import Navbar1 from "../Components/Dashboard/Navbar1";
import Content1 from "../Components/Dashboard/Content1";
import { DashboardContext } from "../Context/Context";

// Context
import { AppContext } from "../Context/Context";
import { useHistory } from "react-router-dom";

const MainDashboard = () => {
  const { currentUser, setcurrentUser } = useContext(AppContext);

  const [loading, setLoading] = useState(false);
  const [currentSelectedOption, setCurrentSelectedOption] = useState(null);

  const history = useHistory();

  const handleLogout = () => {
    console.log("Request For Logout");
    setcurrentUser({ isLogin: false });
    localStorage.removeItem("logindata");
    history.entries = [];
    history.index = -1;
    history.push("/");
  };

  useEffect(() => {
    if (!currentUser.isLogin) {
      if (localStorage.getItem("logindata") !== null) {
        setcurrentUser(JSON.parse(localStorage.getItem("logindata")));
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      } else {
        history.push("/signin/");
        console.log("User Not Found..!");
      }
    } else {
      localStorage.clear();
      localStorage.setItem("logindata", JSON.stringify(currentUser));
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    return () => {
      console.log(currentUser);
      if (currentUser.isLogin) history.push("/dashboard/");
    };
  }, []);

  return (
    <div style={{ overflowY: "hidden" }}>
      {loading ? (
        <div style={{ overflowY: "hidden" }}>
          <DashboardContext.Provider
            value={{
              currentSelectedOption,
              setCurrentSelectedOption,
            }}
          >
            <div style={{ height: "75px" }}></div>
            <Navbar1 />
            <Content1 />
            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                      <i
                        class="bi bi-exclamation-triangle fs-4"
                        style={{ marginRight: `5px` }}
                      ></i>
                      Alert
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">Do you want to logout?</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={handleLogout}
                      data-bs-dismiss="modal"
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DashboardContext.Provider>
        </div>
      ) : (
        <div className="homepage-loader">
          <div
            className="spinner-border text-white"
            style={{ width: `3rem`, height: `3rem` }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainDashboard;
