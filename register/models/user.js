const mongoose = require("mongoose");

const Schema = mongoose.Schema;
var validatePas = function(pass) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
    return regex.test(pass)
};
const UserShema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 30,
    minlength: 2,
  },
  password: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 8,
    validate : [validatePas , "enter valid pass"],
    match : [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ , "enter valid pass"]
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
    minlength: 3
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
    minlength: 3
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    default: "male",
  },
});

module.exports = mongoose.model("User", UserShema);
