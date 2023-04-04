import axios, { GenericAbortSignal } from "axios";
import {
  setBooks,
  setIsLoading,
} from "../../store/actionCreators/booksActions";

export const getBooksSearch: any = (
  currentPage = 1,
  query: string,
  signal: GenericAbortSignal
) => {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    let isCanceled = false;
    try {
      const response = await axios.get(
        `https://api.itbook.store/1.0/search/${query}/${currentPage}`,
        { signal }
      );
      dispatch(setBooks(response.data));
    } catch (error) {
      isCanceled = error.__CANCEL__;
    } finally {
      if (!isCanceled) {
        setIsLoading(false);
      }
    }
  };
};

export const getNewBooks: any = () => {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
	 let isCanceled = false;
    try {
		const response = await axios.get("https://api.itbook.store/1.0/new");
		dispatch(setBooks(response.data));
      dispatch(setBooks(response.data));
    } catch (error) {
      isCanceled = error.__CANCEL__;
    } finally {
      if (!isCanceled) {
        setIsLoading(false);
      }
    }
  };
};
