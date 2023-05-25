import { ThunkDispatch } from "redux-thunk";
import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "@/redux/features/counterSlice";
import { userApi } from "@/redux/services/userApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
  counter: counterReducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userApi.middleware]),
});

setupListeners(store.dispatch);

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;
