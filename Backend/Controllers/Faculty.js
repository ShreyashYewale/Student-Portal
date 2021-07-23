const { validationResult } = require('express-validator');
const Faculty = require('../Models/Faculty');
const Student = require('../Models/Student');
const jwt = require('jsonwebtoken');

exports.CreateAccount = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }

  const faculty = new Faculty(req.body);

  faculty.save((err, result) => {
    if (err) {
      return res.status(400).json({ err: 'NOT able to save faculty in DB' });
    }
    res.json(result);
  });
};

exports.DeleteAccount = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    npm;
    return res.status(422).json({ error: errors.array()[0].msg });
  }

  const { email } = req.body;

  Faculty.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'USER email does not exists'
      });
    }

    Faculty.remove({ email }, (err, result) => {
      console.log(err);
      if (err || !result) {
        return res.status(400).json({
          error: 'Failed to delete account'
        });
      }

      res.json({ msg: 'Account Deleted Successfully!', result });
    });
  });
};

exports.SignInFaculty = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  Faculty.findOne({ email, password }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'USER email does not exists'
      });
    }

    //create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
    //put token in cookie
    res.cookie('token', token, { expire: new Date() + 9999 });

    //send response to front end
    const { _id, name, email } = user;
    return res.json({ token, user: { _id, name, email } });
  });
};

exports.SignOutFaculty = (req, res) => {
  res.clearCookie('token');
  res.json({
    message: 'Admin Signout Successfully'
  });
};

exports.StudentsList = (req, res) => {
  Student.find({}, (err, result) => {
    if (err) {
      return res.status(400).json({ error: 'Something went wrong!' });
    }

    if (result.length != 0) {
      res.json(result);
    } else {
      res.json({ msg: 'No data found!' });
    }
  });
};
