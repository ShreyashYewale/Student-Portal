const { validationResult } = require("express-validator");
const Faculty = require("../Models/Faculty");
const Student = require("../Models/Student");
const Classes = require("../Models/Classes");
const jwt = require("jsonwebtoken");

exports.CreateAccount = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }

  const faculty = new Faculty(req.body);

  faculty.save((err, result) => {
    if (err) {
      return res.status(400).json({ err: "NOT able to save faculty in DB" });
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
        error: "USER email does not exists",
      });
    }

    Faculty.remove({ email }, (err, result) => {
      console.log(err);
      if (err || !result) {
        return res.status(400).json({
          error: "Failed to delete account",
        });
      }

      res.json({ msg: "Account Deleted Successfully!", result });
    });
  });
};

exports.UpdateFacultyInfo = (req, response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }

  const id = req.body._id;
  const updateData = {
    $set: {
      username: req.body.username,
      college_name: req.body.college_name,
    },
  };

  Faculty.updateOne({ _id: id }, updateData, (err, res) => {
    if (err) {
      return response.status(422).json({ msg: err });
    }
    return response.json(res);
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

exports.FacultyClassList = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  Classes.find(
    {},
    "_id class_id class_name class_desc class_image faculty",
    (err, result) => {
      if (err) {
        return res.status(400).json({ error: "Something went wrong!" });
      }

      console.log(req.body);
      result = result.filter(
        (item) => item.faculty.faculty_id === req.body._id
      );
      res.json(result);
    }
  );
};

exports.SignOutFaculty = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Admin Signout Successfully",
  });
};

exports.StudentsList = (req, res) => {
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
