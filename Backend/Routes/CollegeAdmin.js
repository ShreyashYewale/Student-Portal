const express = require("express");
const {
  CreateAccount,
  SignInAdmin,
  SignOutAdmin,
  FacultyList,
  StudentList,
  UpdateAdminInfo,
  DeleteStudent,
  ManageStudentBlocking,
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

routes.post("/deletestudent", DeleteStudent);

routes.put("/managestudentblocking", ManageStudentBlocking);

module.exports = routes;
