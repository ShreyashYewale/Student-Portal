const mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({

  queries: {
    type: String,
    minlength:10
  },
  role: {
      type: String,
      required: true,
      maxlength: 30,
    },
  email: {
      type: String,
      required: true,
      maxlength: 30,
    },
});
module.exports=new mongoose.model('QuerySchema',QuerySchema)