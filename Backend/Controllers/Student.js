const { check, validationResult } = require('express-validator');
const Student = require('../Models/Student');
const Query = require('../Models/Queries');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { check, validationResult } = require("express-validator");
const Student = require("../Models/Student");
const Classes = require("../Models/Classes");
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
      return res.status(400).json({ err: 'NOT able to save user in DB' });
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
        error: 'USER email does not exists'
      });
    }

    Student.remove({ email }, (err, result) => {
      if (err || !result) {
        return res.status(400).json({
          error: 'Failed to delete account'
        });
      }

      res.json({ msg: 'Account Deleted Successfully!', result });
    });
  });
};

exports.UpdateStudentInfo = (req, res) => {
  res.json({ msg: 'Update Student Info' });
};

/*Submit Query*/
exports.SubmitQuery = (req, res) => {
  const { queries } = req.body;
  const query = new Query({ queries });
  query.save((err, result) => {
    if (err) {
      return res.json(err);
    }
    res.json(result);
  });
};

exports.StudentGetClasses = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  Student.findOne(
    { _id: req.body._id },
    "_id username classes",
    (err, result) => {
      if (err) {
        res.status(200).json({ msg: "Something Went Wrong", err });
      } else {
        if (result === null) {
          res.json({ msg: "Student not found..!" });
        } else {
          res.json({ msg: "Found", result });
        }
      }
    }
  );
};

exports.StudentAddClasses = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  // find is class is exist or not
  Classes.findOne(
    { class_id: req.body.class_id },
    "_id class_id class_name class_desc class_image faculty",
    (err, result) => {
      if (err) {
        res.status(200).json({ msg: "Something Went Wrong", err });
      }

      if (result === null) {
        res.json({ isDone: false, msg: "Class Not Exists" });
      } else {
        // find class is added into student or not
        Student.findOne(
          { _id: req.body.student_id },
          "_id username classes",
          (classerr, classresult) => {
            if (classerr) {
              res.status(200).json({ msg: "Something Went Wrong", err });
            }
            if (classresult === null) {
              res.json({
                isDone: false,
                msg: "Student Not Found",
              });
            } else {
              var isFound = false;
              classresult.classes.map((classitem) => {
                if (classitem.class_id === req.body.class_id) {
                  isFound = true;
                }
              });

              if (isFound) {
                res.json({
                  isDone: false,
                  msg: "Class Already Added",
                  result,
                });
              } else {
                // add class into student
                Student.updateOne(
                  { _id: req.body.student_id },
                  { $push: { classes: result } },
                  (updateerr, updateresult) => {
                    if (updateerr) {
                      res
                        .status(200)
                        .json({ msg: "Something Went Wrong", err });
                    }

                    res.json({
                      isDone: true,
                      msg: "Class Added Successfully..!",
                      updateresult,
                    });
                  }
                );
              }
            }
          }
        );
      }
    }
  );
};

exports.SignInStudent = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  Student.findOne({ email, password }, (err, user) => {
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
    const { _id, username, email, college_name } = user;
    return res.json({ token, user: { _id, username, email, college_name } });
  });
};

exports.SignOutStudent = (req, res) => {
  res.clearCookie('token');
  res.json({
    message: 'User Signout Successfully'
  });
};
