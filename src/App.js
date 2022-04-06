import React from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <h2 className="title">Todo App List</h2>
      {/* <span className="title">Todo List</span> <br /> */}
      <TodoApp />
    </div>
  );
}

export default App;