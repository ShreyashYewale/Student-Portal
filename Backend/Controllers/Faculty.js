const { validationResult } = require('express-validator');
const Faculty = require('../Models/Faculty');
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

exports.SignInFaculty = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  Faculty.findOne({ email, password }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'USER email does not exists',
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
    message: 'Admin Signout Successfully',
  });
};
