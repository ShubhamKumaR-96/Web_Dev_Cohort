const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
app.use(express.json());

app.post("/todo", function ( req,res) {
  const createPayLoad = req.body;
  const parsePayLoad = createTodo.safeParse(createPayLoad);
  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }

  // put in mongodb
  todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayLoad = req.body;
  const parsePayLoad = updateTodo.safeParse(updatePayLoad);
  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
 await todo.update(
    {
      _id: req.body.id
    },
    {
      completed: true
    }
  )
  res.json({
    msg: "Todo marked as completed",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
