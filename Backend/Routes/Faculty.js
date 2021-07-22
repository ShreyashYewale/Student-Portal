const express = require("express");
const {
  CreateAccount,
  DeleteAccount,
  SignInFaculty,
  SignOutFaculty,
} = require("../Controllers/Faculty");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ msg: "Faculty API" });
});

routes.post("/createaccount", CreateAccount);

routes.post("/deleteaccount", DeleteAccount);

routes.post("/signin", SignInFaculty);

routes.get("/signout", SignOutFaculty);

module.exports = routes;
