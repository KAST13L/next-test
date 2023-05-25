import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {},
});

export const todosReducer = slice.reducer;
