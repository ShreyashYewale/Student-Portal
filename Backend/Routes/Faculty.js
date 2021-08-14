const express = require('express');
const { check, validationResult } = require('express-validator');
const {
  CreateAccount,
  DeleteAccount,
  SignInFaculty,
  SignOutFaculty,
  StudentsList
} = require('../Controllers/Faculty');
const routes = express.Router();

routes.get('/', (req, res) => {
  res.json({ msg: 'Faculty API' });
});

routes.post(
  '/createaccount',
  CreateAccount
);

routes.post('/deleteaccount', DeleteAccount);

routes.post('/signin', SignInFaculty);

routes.get('/signout', SignOutFaculty);

routes.get('/studentslist', StudentsList);
module.exports = routes;
