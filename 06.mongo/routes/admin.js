const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const { count } = require("console");
const router = Router();

// Admin Routes
router.post("/signup", async (res, req) => {
  // implement admin signup basic
  const username = req.body.username;
  const password = req.body.password;

  // check if a user with this username already exits
  await Admin.create({
    username: username,
    password: password,
  });
  res.json({
    msg: "Admin created successfully",
  });
});

router.post("/courses", adminMiddleware, async (res, req) => {
  // implement course creating logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });
  res.json({
    msg: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (res, req) => {
  // implement fetching all courses logic
  const response = Course.find({});

  res.json({
    courses: response,
  });
});
module.exports = router;
