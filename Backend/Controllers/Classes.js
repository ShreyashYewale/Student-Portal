const { validationResult } = require("express-validator");
const Classes = require("../Models/Classes");
const jwt = require("jsonwebtoken");

exports.GetClasses = (req, res) => {
  Classes.find(
    {},
    "_id class_id class_name class_desc class_image faculty",
    (err, result) => {
      if (err) {
        return res.status(400).json({ error: "Something went wrong!" });
      }

      res.json(result);
    }
  );
};

exports.AddClass = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  Classes.insertMany(req.body, (err, result) => {
    if (err) {
      return res
        .status(200)
        .json({ isDone: false, error: "Something went wrong!", err });
    }

    res.json({ isDone: true, msg: "Class Added Successfully..!", result });
  });
};

exports.AddStudent = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  Classes.findOne({ _id: req.body.class_id }, (main_err, main_result) => {
    var isFound = false;
    main_result.students.map((item) => {
      if (item.student_id === req.body.student_data.student_id) {
        isFound = true;
      }
    });

    if (isFound) {
      res.json({ msg: "Students Already Exists" });
    } else {
      Classes.updateOne(
        { _id: req.body.class_id },
        { $push: { students: req.body.student_data } },
        (err, result) => {
          if (err) {
            return res
              .status(400)
              .json({ error: "Something went wrong!", err });
          }

          res.json({ msg: "Students Data Added", result });
        }
      );
    }
  });
};

exports.RemoveStudent = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  Classes.findOne({ _id: req.body.class_id }, (main_err, main_result) => {
    var isFound = false;
    main_result.students.map((item) => {
      if (item.student_id === req.body.student_id) {
        isFound = true;
      }
    });

    if (!isFound) {
      res.json({ msg: "Students Not Exists" });
    } else {
      Classes.findOneAndUpdate(
        { _id: req.body.class_id },
        { $pull: { students: { student_id: req.body.student_id } } },
        (err, result) => {
          if (err) {
            return res
              .status(400)
              .json({ error: "Something went wrong!", err });
          }

          res.json({
            msg: "Students Removed Successfully..!",
            result: result.students,
          });
        }
      );
    }
  });
};
