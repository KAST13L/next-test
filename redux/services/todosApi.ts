import { myselfDbApi } from "@/redux/services/api";

export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
export const todosApi = myselfDbApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TodoType[], null>({
      query: () => "todos",
    }),
    createTodo: builder.mutation({
      query: (todo) => ({
        body: todo,
        url: "todos",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetTodosQuery, useCreateTodoMutation } = todosApi;
