const { StudentSchema } = require('../Models/Student');
const { check, validationResult } = require('express-validator');
const Student = require('../Models/Student');

exports.CreateAccount = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }
  const student = new Student(req.body);
  student.save((err, user) => {
    if (err) {
      return res.status(400).json({ err: 'NOT able to save user in DB' });
    }
    res.json({
      name: student.name,
      email: student.email,
      college_name: student.college_name,
    });
  });
};
