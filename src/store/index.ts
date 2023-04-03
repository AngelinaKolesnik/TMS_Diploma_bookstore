import { bookReducer } from "./reducers/booksReducer";
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    ui: uiReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
