import axios from "axios";
import { setBooks } from "./booksActions";

export const getBooks: any = (currentPage = 1, query: string) => {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    const response = await axios.get(
      `https://api.itbook.store/1.0/search/${query}/${currentPage}`
    );
    dispatch(setBooks(response.data));
  };  
};
