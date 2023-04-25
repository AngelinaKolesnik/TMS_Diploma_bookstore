import { bookReducer } from "./reducers/booksReducer";
import { definiteBookReducer } from "./reducers/definiteBookReducer";
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import authReducer from "./reducers/authReducer";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    ui: uiReducer,
    definiteBook: definiteBookReducer,
    auth: authReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
