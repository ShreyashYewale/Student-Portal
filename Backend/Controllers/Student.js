const { check, validationResult } = require("express-validator");
const Student = require("../Models/Student");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.CreateAccount = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }

  const student = new Student(req.body);

  student.save((err, result) => {
    if (err) {
      return res.status(400).json({ err: "NOT able to save user in DB" });
    }
    res.json(result);
  });
};

exports.DeleteAccount = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }

  const { email } = req.body;

  Student.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USER email does not exists",
      });
    }

    Student.remove({ email }, (err, result) => {
      if (err || !result) {
        return res.status(400).json({
          error: "Failed to delete account",
        });
      }

      res.json({ msg: "Account Deleted Successfully!", result });
    });
  });
};

exports.SignInStudent = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  Student.findOne({ email, password }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USER email does not exists",
      });
    }

    //create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
    //put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999 });

    //send response to front end
    const { _id, username, email, college_name } = user;
    return res.json({ token, user: { _id, username, email, college_name } });
  });
};

exports.SignOutStudent = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User Signout Successfully",
  });
};
