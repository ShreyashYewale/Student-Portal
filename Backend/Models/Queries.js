const mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({
  queries: {
    type: String,
    unique: true,
    minlength:10
  }
});
module.exports=new mongoose.model('QuerySchema',QuerySchema)