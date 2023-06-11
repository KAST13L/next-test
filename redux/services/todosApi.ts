import { myselfDbApi } from "@/redux/services/api";

export type TodoType = {
  title: string;
  completed: boolean;
  author: string;
  id: string;
};
export const todosApi = myselfDbApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TodoType[], null>({
      query: () => "todos",
      providesTags: () => [
        {
          type: "todo",
        },
      ],
    }),
    createTodo: builder.mutation({
      query: (todo) => ({
        body: todo,
        url: "todos",
        method: "POST",
      }),
      invalidatesTags: () => [
        {
          type: "todo",
        },
      ],
    }),
  }),
});

export const { useGetTodosQuery, useCreateTodoMutation } = todosApi;
