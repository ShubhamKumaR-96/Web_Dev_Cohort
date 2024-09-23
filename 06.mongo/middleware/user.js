const { User } = require("../db");

function userMiddleware(req, res, next) {
    // implement admin auth logic
    // you need to check the headers and validate the admin from the admin db
    const username=req.headers.username;
    const password=req.headers.password;
    User.findOne({
      username:username,
      password:password
    })
    .then(function(value){
      if(value){
        next();
      }else {
        res.status(403).json({
          msg:"User doesn't exits"
        })
      }
    })
  }
  
  module.exports = userMiddleware;