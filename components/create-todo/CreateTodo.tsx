import { useState } from "react";

export const CreateTodo = () => {
  const [todo, setTodo] = useState({
    todoTitle: "",
    author: "",
  });

  return (
    <>
      <label>
        <input
          type="text"
          placeholder={"todo title"}
          value={todo.todoTitle}
          onChange={(e) => setTodo({ ...todo, todoTitle: e.target.value })}
        />
        <input
          type="text"
          placeholder={"author"}
          value={todo.author}
          onChange={(e) => setTodo({ ...todo, author: e.target.value })}
        />
        <button>add todo</button>
      </label>
    </>
  );
};
