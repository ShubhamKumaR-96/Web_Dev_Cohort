const {Router}=require("express");
const userMiddleware=require("../middleware/user");
const { User } = require("../db");
const router=Router();

// Admin Routes
router.post('/signup',(res,req)=>{
    // implement admin signup basic
    const username=req.body.username;
    const password=req.body.password;

    User.create({
        username,
        password
    })

    res.json({
        msg:"User created successfully"
    })

})

router.get('/courses',(res,req)=>{
    // implement listing all course logic
    
})

router.post('/courses/:courseId',userMiddleware,(res,req)=>{
    // implement course purchase logic
    
})

router.get('/purchasedCourses',userMiddleware,(res,req)=>{
    // implement course purchase logic
    
})
module.exports=router;