const express = require("express");
const {
  CreateAccount,
  DeleteAccount,
  SignInStudent,
  SignOutStudent,
  UpdateStudentInfo,
  SubmitQuery
} = require("../Controllers/Student");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ msg: "Student API" });
});

routes.post("/createaccount", CreateAccount);

routes.post("/deleteaccount", DeleteAccount);

routes.post("/updatestudentinfo", UpdateStudentInfo);

routes.post("/signin", SignInStudent);

routes.get("/signout", SignOutStudent);
routes.post("/submitquery", SubmitQuery);

module.exports = routes;
