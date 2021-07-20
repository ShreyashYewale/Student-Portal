const mongoose = require("mongoose");

// TODO: Pending
const DocumentSchema = new mongoose.Schema({
  doc: { data: Buffer, contentType: String },
});

module.exports = mongoose.model("DocumentSchema", DocumentSchema);
