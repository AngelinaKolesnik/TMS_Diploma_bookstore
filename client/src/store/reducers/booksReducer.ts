import { BookActionTypes } from "../types/books";
import { IDefaultState, IActions } from "../../interfaces";

const defaultState: IDefaultState = {
  books: [],
  currentPage: 1,
  totalCount: 0,
  query: "", //! don't change this value!! necessary for the correct operation of pagination
  isLoading: false,
  isNew: false,
  isbn13: "",
};

export const bookReducer = (store = defaultState, action: IActions) => {
  switch (action.type) {
    case BookActionTypes.SET_BOOKS:
      return {
        ...store,
        books: action.payload.books,
        totalCount: action.payload.total,
      };
    case BookActionTypes.SET_CURRENT_PAGE:
      return {
        ...store,
        currentPage: action.payload,
      };
    case BookActionTypes.SET_QUERY:
      return {
        ...store,
        query: action.payload,
      };
    case BookActionTypes.SET_IS_LOADING:
      return {
        ...store,
        isLoading: action.payload,
      };
    case BookActionTypes.SET_IS_NEW:
      return {
        ...store,
        isNew: action.payload,
      };
    case BookActionTypes.SET_ISBN13:
      return {
        ...store,
        isbn13: action.payload,
      };
    default:
      return store;
  }
};
