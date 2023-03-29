import { createStore } from "redux";
import { combineReducers } from "redux";
import { bookReducer } from "./booksReducer";
import { applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  books: bookReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
