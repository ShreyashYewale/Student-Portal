import React, { useContext, useEffect } from "react";
import IndividualListItems1 from "./IndividualListItems1";
import { AppContext } from "../../../Context/Context";

const Sidebar1 = () => {
  const { currentUser } = useContext(AppContext);

  const handleLogout = () => {
    console.log("Request Logout");
  };
  return (
    <div className="sidebar-container">
      <div className="list-group align-items-center">
        {currentUser.role === "Admin" ? (
          <>
            <IndividualListItems1
              title="Profile"
              icon="bi bi-person-circle icons"
            />
            <IndividualListItems1
              title="Create Account"
              icon="bi bi-person-plus-fill icons"
            />
            <IndividualListItems1
              title="Manage Student"
              icon="bi bi-person-lines-fill icons"
            />
            <IndividualListItems1
              title="Manage Faculty"
              icon="bi bi-people-fill icons"
            />
            <IndividualListItems1
              title="Attendance"
              icon="bi bi-calendar-check icons"
            />
            <IndividualListItems1 title="Classes" icon="bi bi-book icons" />
            <IndividualListItems1
              title="Add Courses"
              icon="bi bi-bookmark icons"
            />
            <IndividualListItems1
              title="Handle Queries"
              icon="bi bi-chat icons"
            />
            <IndividualListItems1
              title="Create Feedback"
              icon="bi bi-chat icons"
            />
          </>
        ) : currentUser.role === "Faculty" ? (
          <>
            <IndividualListItems1
              title="Profile"
              icon="bi bi-person-circle icons"
            />
            <IndividualListItems1 title="Classes" icon="bi bi-book icons" />
            <IndividualListItems1
              title="Manage Classes"
              icon="bi bi-book icons"
            />
            <IndividualListItems1 title="Courses" icon="bi bi-bookmark icons" />
            <IndividualListItems1 title="Queries" icon="bi bi-chat icons" />
            <IndividualListItems1
              title="Attendance"
              icon="bi bi-calendar-check icons"
            />
            <IndividualListItems1
              title="Feedback"
              icon="bi bi-person-lines-fill icons"
            />
          </>
        ) : currentUser.role === "Student" ? (
          <>
            <IndividualListItems1
              title="Profile"
              icon="bi bi-person-circle icons"
            />
            <IndividualListItems1 title="Classes" icon="bi bi-book icons" />
            <IndividualListItems1 title="Courses" icon="bi bi-bookmark icons" />
            <IndividualListItems1 title="Queries" icon="bi bi-chat icons" />
            <IndividualListItems1
              title="Attendance"
              icon="bi bi-calendar-check icons"
            />
            <IndividualListItems1
              title="Feedback"
              icon="bi bi-person-lines-fill icons"
            />
          </>
        ) : (
          ""
        )}
        <IndividualListItems1
          title="Logout"
          icon="bi bi-arrow-clockwise icons"
        />
      </div>
    </div>
  );
};

export default Sidebar1;
