const express = require("express");
const {
  CreateAccount,
  SignInAdmin,
  SignOutAdmin,
} = require("../Controllers/CollegeAdmin");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ msg: "College Admin API" });
});

routes.post("/createaccount", CreateAccount);

routes.post("/signin", SignInAdmin);

routes.get("/signout", SignOutAdmin);

module.exports = routes;
