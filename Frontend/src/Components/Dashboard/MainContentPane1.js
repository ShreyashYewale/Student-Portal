import React, { useContext, useEffect, useState } from "react";
// Context
import { AppContext, DashboardContext } from "../../Context/Context";

// Admin Components
import SignUp from "../../AuthComponents/SignUp";
import AdminProfile from "./Admin/AdminProfile";
import AdminManageStudent from "./Admin/AdminManageStudent";
import AdminManageFaculty from "./Admin/AdminManageFaculty";
import AdminAttendance from "./Admin/AdminAttendance";
import AdminClasses from "./Admin/AdminClasses";
import AdminCourses from "./Admin/AdminCourses";
import AdminHandleQueries from "./Admin/AdminHandleQueries";

// Faculty Components
import FacultyProfile from "./Faculty/FacultyProfile";
import FacultyClasses from "./Faculty/FacultyClasses";
import FacultyQueries from "./Faculty/FacultyQueries";
import FacultyCourses from "./Faculty/FacultyCourses";
import FacultyAttendance from "./Faculty/FacultyAttendance";
import FacultyFeedback from "./Faculty/FacultyFeedback";

// Student Components
import StudentProfile from "./Student/StudentProfile";
import StudentClasses from "./Student/StudentClasses";
import StudentQueries from "./Student/StudentQueries";
import StudentCourses from "./Student/StudentCourses";
import StudentAttendance from "./Student/StudentAttendance";
import StudentFeedback from "./Student/StudentFeedback";
import FacultyJoinClass from "./Faculty/FacultyJoinClass";
import AdminCreateFeedback from "./Admin/AdminCreateFeedback";
const MainContentPane1 = () => {
  const { currentSelectedOption } = useContext(DashboardContext);
  const { currentUser } = useContext(AppContext);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className="contents-container">
      {isLoaded ? (
        <div className="default-content-container align-items-center justify-content-between">
          {currentUser.role === "Admin" ? (
            <>
              {currentSelectedOption === null ? (
                <h1>Admin Default Page</h1>
              ) : currentSelectedOption === "Admin Profile" ? (
                <AdminProfile />
              ) : currentSelectedOption === "Admin Create Account" ? (
                <SignUp />
              ) : currentSelectedOption === "Admin Manage Student" ? (
                <AdminManageStudent />
              ) : currentSelectedOption === "Admin Manage Faculty" ? (
                <AdminManageFaculty />
              ) : currentSelectedOption === "Admin Attendance" ? (
                <AdminAttendance />
              ) : currentSelectedOption === "Admin Classes" ? (
                <AdminClasses />
              ) : currentSelectedOption === "Admin Add Courses" ? (
                <AdminCourses />
              ) : currentSelectedOption === "Admin Handle Queries" ? (
                <AdminHandleQueries />
              ) : currentSelectedOption === "Admin Create Feedback" ? (
                <AdminCreateFeedback />
              ) : (
                "Admin Invalid Item Selected"
              )}
            </>
          ) : currentUser.role === "Faculty" ? (
            <>
              {currentSelectedOption === null ? (
                <h1>Faculty Default Page</h1>
              ) : currentSelectedOption === "Faculty Profile" ? (
                <FacultyProfile />
              ) : currentSelectedOption === "Faculty Classes" ? (
                <FacultyClasses />
              ) : currentSelectedOption === "Faculty Manage Classes" ? (
                <FacultyJoinClass />
              ) : currentSelectedOption === "Faculty Queries" ? (
                <FacultyQueries />
              ) : currentSelectedOption === "Faculty Courses" ? (
                <FacultyCourses />
              ) : currentSelectedOption === "Faculty Attendance" ? (
                <FacultyAttendance />
              ) : currentSelectedOption === "Faculty Feedback" ? (
                <FacultyFeedback />
              ) : (
                "Faculty Invalid Item Selected"
              )}
            </>
          ) : currentUser.role === "Student" ? (
            <>
              {currentSelectedOption === null ? (
                <h1>Student Default Page</h1>
              ) : currentSelectedOption === "Student Profile" ? (
                <StudentProfile />
              ) : currentSelectedOption === "Student Classes" ? (
                <StudentClasses />
              ) : currentSelectedOption === "Student Queries" ? (
                <StudentQueries />
              ) : currentSelectedOption === "Student Courses" ? (
                <StudentCourses />
              ) : currentSelectedOption === "Student Attendance" ? (
                <StudentAttendance />
              ) : currentSelectedOption === "Student Feedback" ? (
                <StudentFeedback />
              ) : (
                "Student Invalid Item Selected"
              )}
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="content-loader-container">
          <div
            className="spinner-border text-dark"
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

export default MainContentPane1;
