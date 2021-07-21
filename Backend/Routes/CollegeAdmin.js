const express = require("express");
const { CreateAccount } = require("../Controllers/CollegeAdmin");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ msg: "Admin API" });
});

routes.get("/createaccount", CreateAccount);

module.exports = routes;
