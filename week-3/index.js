// ugly way to do auth because it has lots of bugs and issues in it
const express = require("express");

const app = express();

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   if (username != "shubh" || password != "pass") {  // username and password check
//     res.status(400).json({
//       msg: "Something up with your input",
//     });
//     return;
//   }
//   if (kidneyId != 1 && kidneyId != 2) {  // input validation
//     res.status(400).json({
//       msg: "Something up with your input",
//     });
//     return;
//   }
//   // do something with the kidneys here
//   res.json({
//     msg: "Your kidney is fine",
//   });
// });

// This above mentioned code violates the dry principle

// app.use(expres.json())  => The line app.use(express.json()) in an Express.js application is used to parse incoming JSON payloads in HTTP request bodies.

app.use(express.json()); // if we not use this middleware body will not get extracted

// app.post("/health-checkup", function (req, res) {
//   // kidney=[1,2]
//   const kidney = req.body.kidney;
//   const kidneyLength = kidney.length;

//   res.send("You have " + kidneyLength + " kidneys");
// });

// // global catches => global catches help you give the user a better error message

// app.use(function (err, req, res, next) {
//   res.json({
//     msg: "Sorry something is up with our sever",
//   });
// });


// using zod for input validation

const zod = require("zod");

// const schema = zod.array(zod.number()); // statement telling what kind of input I am expecting from my user

// const schemaa=zod.object({
//     email:z.string(),
//     password:z.string(),
//     country:z.literal("IN").or(z.literal("US")),
//     kidney:z.array(z.number())

// })

// app.post("/health-checkup", function (req, res) {
//   const kidney = req.body.kidney;
//   const response = schema.safeParse(kidney);
//   if (!response.success) {
//     res.status(411).json({
//       msg: "input is invalid",
//     });
//   } else {
//     res.send({
//       response,
//     });
//   }
// });



// function validateSchema(arr){

//     const schema = zod.array(zod.number());
//     const response=schema.safeParse(arr);
//     console.log(response);

// }

// global catches- catch any error that occurs globally into this codebase
// let errorCount = 0;
// app.use(function (err, req, res, next) {
//     errorCount++; // if there are too many errors coming through, that means something is wrong with the code and not a fault from users
//     res.json({
//         msg: "Some error occurred"
//     })
// })
validateSchema([1,2 ,3])
app.listen(3000);
