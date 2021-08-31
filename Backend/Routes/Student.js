const express = require("express");
const {
  CreateAccount,
  DeleteAccount,
  SignInStudent,
  SignOutStudent,
  UpdateStudentInfo,
  SubmitQuery,
  StudentGetClasses,
  StudentAddClasses,
} = require("../Controllers/Student");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ msg: "Student API" });
});

routes.post("/createaccount", CreateAccount);

routes.post("/deleteaccount", DeleteAccount);

routes.post("/updatestudentinfo", UpdateStudentInfo);

routes.post("/getclasses", StudentGetClasses);

routes.post("/addclass", StudentAddClasses);

routes.post("/signin", SignInStudent);

routes.get("/signout", SignOutStudent);
routes.post("/submitquery", SubmitQuery);

module.exports = routes;
