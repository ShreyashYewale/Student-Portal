const { validationResult } = require("express-validator");
const Admin = require("../Models/CollegeAdmin");
const Faculty = require("../Models/Faculty");
const Student = require("../Models/Student");
const jwt = require("jsonwebtoken");

exports.CreateAccount = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }

  const admin = new Admin(req.body);

  admin.save((err, result) => {
    if (err) {
      return res.status(400).json({ err: "NOT able to save user in DB" });
    }
    res.json(result);
  });
};

exports.SignInAdmin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  Admin.findOne({ email, password }, (err, user) => {
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
    const { _id, name, email } = user;
    return res.json({ token, user: { _id, name, email } });
  });
};

exports.SignOutAdmin = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Admin Signout Successfully",
  });
};

exports.FacultyList = (req, res) => {
  Faculty.find({}, (err, result) => {
    if (err) {
      return res.status(400).json({ error: "Something went wrong!" });
    }

    if (result.length != 0) {
      res.json(result);
    } else {
      res.json({ msg: "No data found!" });
    }
  });
};

exports.StudentList = (req, res) => {
  Student.find({}, (err, result) => {
    if (err) {
      return res.status(400).json({ error: "Something went wrong!" });
    }

    if (result.length != 0) {
      res.json(result);
    } else {
      res.json({ msg: "No data found!" });
    }
  });
};