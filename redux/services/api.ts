import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const placeholderApi = createApi({
  reducerPath: "placeholderApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: () => ({}),
});

export const myselfDbApi = createApi({
  reducerPath: "myselfDbApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4200/",
  }),
  endpoints: () => ({}),
});
