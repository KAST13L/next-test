"use client";
import { useGetTodosQuery } from "@/redux/services/todosApi";
import { CreateTodo } from "@/components/create-todo/CreateTodo";

export default function Todos() {
  const todos = useGetTodosQuery(null);

  return (
    <>
      <CreateTodo />
      <>
        {todos.error ? (
          <p>Oh no, there was an error</p>
        ) : todos.isLoading || todos.isFetching ? (
          <p>Loading...</p>
        ) : todos.data ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 20,
              padding: "20px",
              margin: "20px",
            }}
          >
            {todos.data.map((todo) => (
              <div
                key={todo.title}
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  textAlign: "center",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <input type="checkbox" readOnly checked={todo.completed} />
                <h3>{todo.title}</h3>
              </div>
            ))}
          </div>
        ) : null}
      </>
    </>
  );
}
