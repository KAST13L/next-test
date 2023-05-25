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
  }),
});

export const { useGetTodosQuery } = todosApi;
