import "./App.css";
import React, { useState } from "react";

import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoItem from "./components/ToDoItem/ToDoItem";

function App() {
  // State

  const [todos, setTodos] = useState([
    { text: "Do This", isComplete: false },
    { text: "Do that", isComplete: false },
    { text: "Maybe something else", isComplete: false },
  ]);

  //Actions
  const addTodo = (text) => {
    const newToDos = [...todos, { text: text, isComplete: false }];
    setTodos(newToDos);
  };
}
const completeToDo = (index) => {
  const newToDos = [...todos];
  newToDos[index].isComplete = true;
  setTodos(newToDos);

  const removeToDo = (index) => {
    const newToDos = { ...todos };
    newToDos.splice(index, 1);
    setTodos(newToDos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>ToDo List</h1>
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            index={index}
            completeToDo={completeToDo}
            removeToDo={removeToDo}
          />
        ))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
};
export default App;
