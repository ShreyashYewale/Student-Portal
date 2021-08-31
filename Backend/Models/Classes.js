const mongoose = require("mongoose");

const ClassesSchema = new mongoose.Schema(
  {
    class_id: { type: String, required: true, maxlength: 20 },
    class_name: { type: String, unique: true, required: true, maxlength: 20 },
    class_desc: { type: String, required: true },
    class_image: { type: String, required: true },
    faculty: {
      faculty_id: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    assignments: [
      {
        assignment_no: {
          type: String,
          required: true,
          maxlength: 20,
        },
        assignment_name: { type: String, required: true, maxlength: 20 },
        assignment_marks: { type: Number, required: true, maxlength: 3 },
        submission_done: [
          {
            student_email: {
              type: String,
              required: true,
              maxlength: 30,
            },
            document_name: { type: String, required: true, maxlength: 30 },
            document_type: { type: String, required: true, maxlength: 20 },
          },
        ],
      },
    ],
    students: [
      {
        student_id: {
          type: String,
          required: true,
        },
        username: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
      },
    ],
    discussion: [
      {
        message_id: {
          type: Number,
          required: true,
          maxlength: 30,
        },
        sender: { type: String, required: true, maxlength: 30 },
        data: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClassesSchema", ClassesSchema);
