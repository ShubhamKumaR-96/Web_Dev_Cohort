import { useState, useEffect } from "react";
import axios from "axios";
import './TodoList.css'; // Import the CSS file

const TodosList = () => {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editingTodo, setEditingTodo] = useState(null); // State for editing todo

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:3000/todos");
    setTodos(response.data.todos);
  };

  const addTodo = async () => {
    const response = await axios.post("http://localhost:3000/todo", {
      title: newTitle,
      description: newDescription,
    });
    setTodos([...todos, response.data.todo]); // Update state with new todo
    setNewTitle("");
    setNewDescription("");
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3000/todo/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  const markAsCompleted = async (id) => {
    const response = await axios.put(`http://localhost:3000/completed/${id}`);
    const updatedTodos = todos.map(todo =>
      todo._id === id ? response.data.todo : todo
    );
    setTodos(updatedTodos);
  };
  

  const startEditing = (todo) => {
    setEditingTodo(todo); // Set the todo item to be edited
    setNewTitle(todo.title); // Populate the input fields with current values
    setNewDescription(todo.description);
  };

  const updateTodo = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/todo/${editingTodo._id}`, {
        title: newTitle,
        description: newDescription,
      });

      // Update the local todos state with the updated todo
      const updatedTodos = todos.map(todo =>
        todo._id === editingTodo._id ? response.data.todo : todo
      );
      setTodos(updatedTodos);

      // Resetting the form and editing state
      setEditingTodo(null);
      setNewTitle("");
      setNewDescription("");
    } catch (error) {
      console.error("Error updating todo:", error);
      // Optionally show an error message to the user
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder="Description"
      />
      <button className="add" onClick={editingTodo ? updateTodo : addTodo}>
        {editingTodo ? "Update Todo" : "Add Todo"}
      </button>
      <ul>
  {todos.map(todo => (
    <li key={todo._id} className={todo.completed ? "completed" : ""}>
      <div className="todo-content">
        <h2 className="todo-title">{todo.title}</h2>
        <p className="todo-description">{todo.description}</p>
      </div>
      <div className="todo-actions">
        <button className="complete" onClick={() => markAsCompleted(todo._id)}>
          {todo.completed ? "Completed" : "Mark as Completed"}
        </button>
        <button className="edit" onClick={() => startEditing(todo)}>Edit</button>
        <button className="delete" onClick={() => deleteTodo(todo._id)}>Delete</button>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
  
};

export default TodosList;
