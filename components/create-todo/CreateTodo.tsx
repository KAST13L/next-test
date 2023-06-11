import { useState } from "react";
import { useCreateTodoMutation } from "@/redux/services/todosApi";
import { random } from "nanoid";

const defaultValue = {
  title: "",
  author: "",
  completed: false,
  id: random(1).toString(),
};

export const CreateTodo = () => {
  const [todo, setTodo] = useState(defaultValue);

  const [createTodo] = useCreateTodoMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createTodo(todo).then(() => {
      setTodo(defaultValue);
    });
  };
  return (
    <>
      <h1>Create new todo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder={"todo title"}
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
          <input
            type="text"
            placeholder={"author"}
            value={todo.author}
            onChange={(e) => setTodo({ ...todo, author: e.target.value })}
          />
          <button>add todo</button>
        </label>
      </form>
    </>
  );
};
