import React, { useState } from "react";

function ToDoForm(props) {
  //props
  const { addTodo } = props;

  //State
  const [todo, setTodo] = useState("");

  //Actions
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo here..."
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
    </form>
  );
}
export default ToDoForm;
