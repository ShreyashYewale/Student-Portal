const express = require('express');
const {
  CreateAccount,
  SignInAdmin,
  SignOutAdmin,
  FacultyList,
  StudentList
} = require('../Controllers/CollegeAdmin');
const routes = express.Router();

routes.get('/', (req, res) => {
  res.json({ msg: 'College Admin API' });
});

routes.post('/createaccount', CreateAccount);

routes.post('/signin', SignInAdmin);

routes.get('/signout', SignOutAdmin);
routes.get('/facultylist', FacultyList);

routes.get('/studentlist', StudentList);

module.exports = routes;
