import { BookActionTypes } from '../types/books';

const defaultState = {
  books: [],
  currentPage: 1,
  totalCount: 0,
  query: "all",
  isLoading: false,
};

export const bookReducer = (store = defaultState, action) => {
  switch (action.type) {
    case BookActionTypes.SET_BOOKS:
      return {
        ...store,
        books: action.payload.books,
        totalCount: action.payload.total,
        isLoading: false,
      };
    case BookActionTypes.SET_CURRENT_PAGE:
      return {
        ...store,
        currentPage: action.payload,
        isLoading: false,
      };
    case BookActionTypes.SET_QUERY:
      return {
        ...store,
        query: action.payload,
        isLoading: false,
      };
    case BookActionTypes.SET_IS_LOADING:
      return {
        ...store,
        isLoading: action.payload,
      };
    default:
      return store;
  }
};
