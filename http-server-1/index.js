// Day-1

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express()
// const port = process.env.PORT || 3000 // explanation given in notes

// // middlewares
// app.use(bodyParser.json());
// // app.use(express.json()); // This also works instead of using bodyParser

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// // example chatGPT backend works like-
// app.post('/backend-api/conversation', function (req, res) {
//     // run a machine learning model here which will run when control reaches here after user asks a question
//     res.send("Hello World!!");
//     // spawn("python", "a.py", ...) // can even spawn a machine learning model or spawn a python code also in backend
//     console.log(req.headers["authorization"]); // can also do req.headers.authorization
//     console.log(req.body);
//     res.send({
//         name: "shib",
//         age: 12
//     });

//     res.json({
//         gender: "male",
//         msg: "Love you 3000"
//     });
//     const message = req.body.message; // can also use req.query.message
//     console.log(message);
// })

// app.get('/route-handler', (req, res) => {
//     // write code of headers, body, query params(short for parameters)
//     // write your machine learning model here
//     res.send('Hello World!!'); // can also send objects using res.send
//     res.json({
//         // send a javascript object to the server here
//         name: "Shubh",
//         age: 1211
//     });
//     res.send('<b> Hi there </b>'); // can also send HTML code
// })

// DAY-2 how to use express,How data we can send

// const express = require("express");

// const app = express();

// function sum(n) {
//   let ans = 0;
//   for (let i = 1; i < n; i++) {
//     ans += i;
//   }
//   return ans;
// }

// app.get("/", function (req, res) {
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send("hi ur ans : " + ans);
// });

const express = require("express");

const app = express();

app.use(express.json());

const user = [
  {
    name: "john",
    kidney: [
      {
        healthy: false,
      },
    ],
  },
];

// query parameter

// getting data from server or reading data from server
app.get("/", function (req, res) {
  const johnKidneys = user[0].kidney;
  const numberOfKidney = johnKidneys.length;
  let numhealthyKidney = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numhealthyKidney = numhealthyKidney + 1;
    }
  }
  const unhealthyKidney = numberOfKidney - numhealthyKidney;
  res.json({
    numberOfKidney,
    numhealthyKidney,
    unhealthyKidney,
  });
});

// posting Number of kidney
app.post("/", function (req, res) {
  console.log(req.body);
  const isHealthy = req.body.isHealthy;
  user[0].kidney.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "done!",
  });
});

// adding healthy kidney or unhealthy
app.put('/',function(req,res){
    for(let i=0;i<user[0].kidney.length;i++){
        user[0].kidney[i].healthy=true;
    }
    res.json({});
})

// removing unhealthy kidney
app.delete('/',function(req,res){
    // you should return a 411
    // only if atleast one unhealthy kidney is there do this, else return 411
    let newKidney=[];
    if(noHealthyKidney()){
       
        for(let i=0;i<user[0].kidney.length;i++){
            if(user[0].kidney[i].healthy){
                newKidney.push({
                    healthy:true
                })
            }
        }
    }else {
        res.status(411).json({
            msg:"You have no bad kidney"
        })
    }
   
    user[0].kidney=newKidney;
    res.json({
        msg:"done"
    })
})

function noHealthyKidney(){
    let nouNHealthyKid=false;
    for(let i=0;i<user[0].kidney.length;i++){
        if(!user[0].kidney[i].healthy){
            nouNHealthyKid=true;
            }
        }
        return nouNHealthyKid;
    }

app.listen(3000);
