import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDesciptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTodo = () => {
    // Add the new todo to the list
    setTodos([...todos, { title, description }]);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <input
        onChange={handleTitleChange}
        className="input-box"
        type="text"
        value={title} // binding the value
        placeholder="title"
      />
      <br />
      <input
        onChange={handleDesciptionChange}
        className="input-box"
        type="text"
        value={description}
        placeholder="description"
      />{" "}
      <br />
      <button onClick={handleTodo}>Add todo</button>
      <div>
        <ul>
          {todos.map((todo, i) => (
           <div key={i}>
            <li><strong>{todo.title}</strong></li>
            <li><strong>{todo.description}</strong></li>
           </div>
           
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
