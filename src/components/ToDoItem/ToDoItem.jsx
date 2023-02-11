import React from "react";

//CSS

import "./TodoItem.css";

function ToDoItem(props) {
  const { todo, completeToDo, index, isDone } = props;

  return (
    <div className="todo">
      {todo.text}
      <button onClick={() => completeToDo(index)}>Complete</button>
      <button onClick={() => removeToDo(index)}>x</button>
    </div>
  );
}
export default ToDoItem;
