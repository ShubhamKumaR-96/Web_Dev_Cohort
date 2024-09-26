const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Create Todo
app.post("/todo", async function (req, res) {
  const createPayLoad = req.body;
  const parsePayLoad = createTodo.safeParse(createPayLoad);
  
  if (!parsePayLoad.success) {
    return res.status(411).json({
      msg: "You sent the wrong input",
    });
  }

  // Put in MongoDB
  const newTodo = await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
    todo: newTodo, // Return the created todo for the frontend
  });
});

// Get Todos
app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

// Update Todo
app.put("/todo/:id", async function (req, res) {
  const { id } = req.params; // Get the todo ID from the URL parameters
  const { title, description } = req.body; // Extract title and description from the request body

  try {
    const updatedTodo = await todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true } // Return the updated document
    );

    if (!updatedTodo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    res.json({
      msg: "Todo updated",
      todo: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({ msg: "Error updating todo", error });
  }
});

// Mark Todo as Completed
app.put("/completed/:id", async function (req, res) {
  const todoId = req.params.id;

  const todoItem = await todo.findById(todoId);
  if (!todoItem) {
    return res.status(404).json({ msg: "Todo not found" });
  }

  const updatedStatus = !todoItem.completed;

  await todo.updateOne({ _id: todoId }, { completed: updatedStatus });

  res.json({ todo: { ...todoItem.toObject(), completed: updatedStatus } });
});


// Delete Todo
app.delete("/todo/:id", async function (req, res) {
  const { id } = req.params; // Get the todo ID from the URL parameters

  try {
    const deletedTodo = await todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    res.json({ msg: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting todo", error });
  }
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
