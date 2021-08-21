const express = require("express");
const { check, validationResult } = require("express-validator");
const {
  CreateAccount,
  DeleteAccount,
  SignInFaculty,
  SignOutFaculty,
  StudentsList,
  UpdateFacultyInfo,
} = require("../Controllers/Faculty");
const routes = express.Router();

// Use of middleware
routes.get(
  "/",
  (req, res, next) => {
    console.log("Request For Faculty");
    if (req.body._id) next();
    else res.json({ msg: "Unauthorized person" });
  },
  (req, res, next) => {
    res.json({ msg: "Faculty API" });
    next();
  }
);

routes.post("/createaccount", CreateAccount);

routes.post("/deleteaccount", DeleteAccount);

routes.put("/updatefacultyinfo", UpdateFacultyInfo);

routes.post("/signin", SignInFaculty);

routes.get("/signout", SignOutFaculty);

routes.get("/studentslist", StudentsList);
module.exports = routes;
