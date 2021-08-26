const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },

    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },
    link:{
        type: String,
        required: true
    },
    photo: {
        type:String
    }
});

module.exports = mongoose.model('Courses', courseSchema);
