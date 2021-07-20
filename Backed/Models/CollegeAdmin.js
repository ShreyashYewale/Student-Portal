const mongoose = require("mongoose");

const CollegeAdminSchema = new mongoose.Schema({
  username: { type: String, required: true, maxlength: 20 },
  email: { type: String, required: true, unique: true, maxlength: 30 },
  password: { type: String, required: true, maxlength: 20 },
  college_name: { type: String, required: true, maxlength: 40 },
});

module.exports = mongoose.model("CollegeAdminSchema", CollegeAdminSchema);
