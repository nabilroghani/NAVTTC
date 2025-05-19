import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Codes"]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo(""); // Clear input after adding
    }
  };

  const updateTodoVal = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <form onSubmit={addNewTask}>
        <input
          type="text"
          value={newTodo}
          onChange={updateTodoVal}
          placeholder="Enter Task"
          style={{
            width: "300px",
            height: "40px",
            borderRadius: "10px",
            fontSize: "20px",
            paddingLeft: "10px",
          }}
        />
        <button type="submit" style={{ marginLeft: "10px", padding: "10px" }}>
          Add
        </button>
      </form>

      <br />
      <hr />
      <h2>Todo Tasks</h2>
      <ul>
        {todos.map((task, index) => (
          <li key={index} style={{ fontSize: "18px", margin: "5px 0" }}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
