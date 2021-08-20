const mongoose = require("mongoose");

const ClassesSchema = new mongoose.Schema([
  {
    // TODO: faculty_name: who have created the class
    class_id: { type: Number, required: true, unique: true, maxlength: 20 },
    class_name: { type: String, required: true, maxlength: 20 },
    asignments: [
      {
        assignment_no: {
          type: Number,
          required: true,
          unique: true,
          maxlength: 20,
        },
        assignment_name: { type: String, required: true, maxlength: 20 },
        assignment_marks: { type: Number, required: true, maxlength: 3 },
        submission_done: [
          {
            student_email: {
              type: String,
              required: true,
              unique: true,
              maxlength: 30,
            },
            document_name: { type: String, required: true, maxlength: 30 },
            document_type: { type: String, required: true, maxlength: 20 },
          },
        ],
      },
    ],
    // TODO: add students joined list
    discussion: [
      {
        message_id: {
          type: Number,
          required: true,
          unique: true,
          maxlength: 30,
        },
        sender: { type: String, required: true, maxlength: 30 },
        data: { type: String, required: true },
      },
    ],
  },
]);

module.exports = mongoose.model("ClassesSchema", ClassesSchema);
