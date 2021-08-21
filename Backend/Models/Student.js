const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      maxlength: 20
    },
    profile_photo: {
      data: Buffer,
      contentType: String
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 30
    },
    college_name: {
      type: String,
      required: true,
      maxlength: 40
    },
    academic_details: {
      year: {
        type: Number,
        maxlength: 4
      },
      division: {
        type: String,

        maxlength: 2
      },
      roll_no: {
        type: Number,

        maxlength: 40
      },
      prn_no: {
        type: Number,

        maxlength: 10
      }
    },
    classes: [
      {
        class_id: {
          type: String,

          maxlength: 10
        },
        class_name: {
          type: String,

          maxlength: 20
        },
        faculty_name: {
          type: String,
          maxlength: 30
        }
      }
    ],
    password: {
      type: String,
      required: true,
      maxlength: 20
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('StudentSchema', StudentSchema);

/*
{
    "username": "Sanket29",
  "name": "Sanket Salunke",
  "email": "sanket@gmail.com",
  "college_name":"VIIT",
  "academic_details": {
    "year": 2021,
    "division": "D",
    "roll_no": 70,
    "prn_no": 21232
  },
  "classes": [
    {
      "class_id": "C1",
      "class_name": "JSP D3",
      "faculty_name": "A. Paike"
    }
  ],
  "password": "sanket123"
}
*/
