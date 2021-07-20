const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  username: { type: String, required: true, maxlength: 20 },
  profile_photo: { data: Buffer, contentType: String },
  name: { type: String, required: true, maxlength: 30 },
  email: { type: String, required: true, unique: true, maxlength: 30 },
  college_name: { type: String, required: true, maxlength: 40 },
  academic_details: {
    year: { type: Number, required: true, maxlength: 4 },
    division: { type: String, required: true, maxlength: 2 },
    roll_no: { type: Number, required: true, maxlength: 40 },
    prn_no: { type: Number, required: true, maxlength: 10 },
  },
  classes: [
    {
      class_id: { type: String, required: true, maxlength: 10 },
      class_name: { type: String, required: true, maxlength: 20 },
      faculty_name: { type: String, required: true, maxlength: 30 },
    },
  ],
  password: { type: String, required: true, maxlength: 20 },
});

module.exports = mongoose.model("StudentSchema", StudentSchema);
