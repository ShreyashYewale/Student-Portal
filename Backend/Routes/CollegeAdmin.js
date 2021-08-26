const express = require("express");
const {
  CreateAccount,
  SignInAdmin,
  SignOutAdmin,
  FacultyList,
  StudentList,
  UpdateAdminInfo,
<<<<<<< HEAD
  AddCourses,
  getAllCourses
=======
  DeleteStudent,
  ManageStudentBlocking,
>>>>>>> 5c04743e02d53d2d1c0648ed97b93610219a4f41
} = require("../Controllers/CollegeAdmin");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ msg: "College Admin API" });
});

routes.post("/createaccount", CreateAccount);

routes.put("/updateadmininfo", UpdateAdminInfo);

routes.post("/signin", SignInAdmin);

routes.get("/signout", SignOutAdmin);

routes.get("/facultylist", FacultyList);

routes.get("/studentlist", StudentList);

<<<<<<< HEAD
routes.post("/addcourses", AddCourses);
routes.get("/getallcourses",getAllCourses);
=======
routes.post("/deletestudent", DeleteStudent);

routes.put("/managestudentblocking", ManageStudentBlocking);
>>>>>>> 5c04743e02d53d2d1c0648ed97b93610219a4f41

module.exports = routes;
