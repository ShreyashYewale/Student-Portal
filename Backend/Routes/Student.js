const express = require("express");
const {
  CreateAccount,
  SignInStudent,
  SignOutStudent,
} = require("../Controllers/Student");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ msg: "Student API" });
});

routes.post("/createaccount", CreateAccount);

routes.post("/signin", SignInStudent);

routes.get("/signout", SignOutStudent);

module.exports = routes;
