import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const placeholderApi = createApi({
  reducerPath: "placeholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: () => ({}),
});

export const myselfDbApi = createApi({
  reducerPath: "myselfDbApi",
  tagTypes: ["todo"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4200/",
  }),
  endpoints: () => ({}),
});

export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
}

export async function getPostsBySearch(search: string) {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
  return res.json();
}
