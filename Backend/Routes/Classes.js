const express = require("express");
const {
  GetClasses,
  AddClass,
  AddStudent,
  RemoveStudent,
} = require("../Controllers/Classes");

const routes = express.Router();

routes.get("/", GetClasses);

routes.post("/", AddClass);

routes.post("/addstudent", AddStudent);

routes.post("/removestudent", RemoveStudent);

module.exports = routes;
