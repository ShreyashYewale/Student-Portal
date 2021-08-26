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

exports.UpdateAdminInfo = (req, response) => {
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

  Admin.updateOne({ _id: id }, updateData, (err, res) => {
    if (err) {
      return response.status(422).json({ msg: err });
    }
    return response.json(res);
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
    const { _id, username, email, college_name } = user;
    return res.json({ token, user: { _id, username, email, college_name } });
  });
};

exports.SignOutAdmin = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Admin Signout Successfully",
  });
};

// Manage Faculty and Student
/*
-----------------
Faculty
-----------------
*/
exports.FacultyList = (req, res) => {
  Faculty.find(
    {},
    "_id username email college_name createdAt updatedAt",
    { sort: { username: 1 } },
    (err, result) => {
      if (err) {
        return res.status(400).json({ error: "Something went wrong!" });
      }

      if (result.length != 0) {
        res.json(result);
      } else {
        res.json({ msg: "No data found!" });
      }
    }
  );
};

/*
-----------------
Student
-----------------
*/
exports.StudentList = (req, res) => {
  Student.find(
    {},
    "_id username email college_name createdAt updatedAt isBlocked",
    { sort: { username: 1 } },
    (err, result) => {
      if (err) {
        return res.status(400).json({ error: "Something went wrong!" });
      }

      if (result.length != 0) {
        res.json(result);
      } else {
        res.json({ msg: "No data found!" });
      }
    }
  );
};

exports.DeleteStudent = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  console.log(req.body);

  Student.deleteOne({ email: req.body.email }, (err, result) => {
    if (err) {
      return res.status(400).json({ error: "Something went wrong!" });
    } else {
      if (result.length != 0) {
        res.json(result);
      } else {
        res.json({ msg: "No data found!" });
      }
    }
  });
};

exports.ManageStudentBlocking = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  Student.updateOne(
    { email: req.body.email },
    { $set: { isBlocked: req.body.setIsBlocked } },
    (err, result) => {
      if (err) {
        return res.status(400).json({ error: "Something went wrong!" });
      } else {
        if (result.length != 0) {
          res.json(result);
        } else {
          res.json({ msg: "No data found!" });
        }
      }
    }
  );
};
