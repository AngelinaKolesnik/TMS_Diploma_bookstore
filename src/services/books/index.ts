import axios, { GenericAbortSignal } from "axios";
import {
  setBooks,
  setIsLoading,
  setIsNew,
  setOneBook,
} from "../../store/actionCreators/booksActions";

export const getBooksSearch: any = (
  currentPage: number = 1,
  query: string = "all",
  signal?: GenericAbortSignal
) => {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    let isCanceled = false;
    try {
      dispatch(setIsNew(false));
      dispatch(setIsLoading(true));
      const response = await axios.get(
        `https://api.itbook.store/1.0/search/${query}/${currentPage}`,
        { signal }
      );
      dispatch(setBooks(response.data));
    } catch (error) {
      isCanceled = error.__CANCEL__;
    } finally {
      if (!isCanceled) {
        dispatch(setIsLoading(false));
      }
    }
  };
};

export const getNewBooks: any = () => {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      dispatch(setIsNew(true));
      dispatch(setIsLoading(true));
      const response = await axios.get("https://api.itbook.store/1.0/new");
      dispatch(setBooks(response.data));
    } catch (error) {
      alert(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};

export const getDefiniteBook: any = (isbn13: string) => {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      dispatch(setIsNew(false));
      dispatch(setIsLoading(true));
      const response = await axios.get(
        `https://api.itbook.store/1.0/books/${isbn13}`
      );
      dispatch(setOneBook(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
