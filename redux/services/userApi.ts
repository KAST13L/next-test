import { placeholderApi } from "@/redux/services/api";

type User = {
  id: number;
  name: string;
  email: number;
};

export const userApi = placeholderApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => "users",
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`,
    }),
  }),
});

export const { useGetUserByIdQuery, useGetUsersQuery } = userApi;
