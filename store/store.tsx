import { ThunkDispatch } from "redux-thunk";
import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "@/app/todos/todos.reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;

// @ts-ignore
window.store = store;
