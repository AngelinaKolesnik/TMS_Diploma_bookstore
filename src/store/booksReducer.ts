const SET_BOOKS = "SET_BOOKS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_QUERY = "SET_CURRENT_PAGE";
const SET_IS_FETCH = "SET_IS_FETCH";

const defaultState = {
  books: [],
  currentPage: 1,
  totalCount: 0,
  query: "",
  isFetch: false,
};

export const bookReducer = (store = defaultState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...store,
        books: action.payload.books,
        totalCount: action.payload.total,
        isFetch: false,
      };
    case SET_CURRENT_PAGE:
      return {
        ...store,
        currentPage: action.payload,
        isFetch: false,
      };
    case SET_QUERY:
      return {
        ...store,
        query: action.payload,
        isFetch: false,
      };
    case SET_IS_FETCH:
      return {
        ...store,
        isFetch: action.payload,
      };
    default:
      return store;
  }
};

export const setBooks = (books: object[]) => ({
  type: SET_BOOKS,
  payload: books,
});
export const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});
export const setQuery = (query: string) => ({
  type: SET_QUERY,
  payload: query,
});
export const setIsFetch = (isFetch: boolean) => ({
  type: SET_IS_FETCH,
  payload: isFetch,
});
