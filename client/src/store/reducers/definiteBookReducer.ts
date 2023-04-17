import {
  IActionDefiniteBook,
  IDefiniteBook,
} from "../../interfaces";
import { BookActionTypes } from "../types/books";

const defaultState: IDefiniteBook = {
  error: "",
  title: "",
  subtitle: "",
  authors: "",
  publisher: "",
  isbn10: "",
  isbn13: [],
  pages: "",
  year: "",
  rating: "",
  desc: "",
  price: "",
  image: "",
  url: "",
  isLoading: false,
};

export const definiteBookReducer = (
  store = defaultState,
  action: IActionDefiniteBook
) => {
  switch (action.type) {
    case BookActionTypes.SET_ONE_BOOK:
      return {
        ...store,
        error: action.payload.error,
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        authors: action.payload.authors,
        publisher: action.payload.publisher,
        isbn10: action.payload.isbn10,
        isbn13: action.payload,
        pages: action.payload.pages,
        year: action.payload.year,
        rating: action.payload.rating,
        desc: action.payload.desc,
        price: action.payload.price,
        image: action.payload.image,
        url: action.payload.url,
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
