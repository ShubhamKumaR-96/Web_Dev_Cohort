const { time } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");
const { title } = require("process");
const { stringify } = require("querystring");

// connect to MongoDB
mongoose.connect("mongodb+srv://magicmomentum22:R9rtllr3ydT7oXho@cluster0.n1gwa.mongodb.net/");

// Define schemas
const AdminSchema = new mongoose.Schema({
  // schema definition here
  username:String,
  password:String
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username:String,
  password:String,
  purchasedCourses:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Course'
  }]
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title:String,
  description:String,
  imageLink:String,
  price:Number
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
