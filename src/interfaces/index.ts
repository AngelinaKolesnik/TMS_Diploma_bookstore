import { BookActionTypes } from "../store/types/books";

export interface IBook {
  title: string;
  subtitle: string;
  isbn13?: string;
  price: string;
  image: string;
  url: string;
  key?: string;
}

export type BookInfo = Omit<IBook, "subtitle" | "url">;

export interface IGetBooks {
  books: IBook[];
  total: string;
  page?: string;
}

export interface IDefaultState {
  books: IBook[];
  currentPage: number;
  totalCount: number;
  query: string;
  isLoading: boolean;
  isNew: boolean;
  isbn13: string;
}

export interface IDefiniteBook {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: any;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  isLoading: boolean;
  language?: string;
}

export interface IBookHeaderInfo {
  title: string;
  subtitle: string;
}

export interface IBookDescriptionInfo {
  title: string;
  desc: string;
}

export interface IActions {
  type: BookActionTypes;
  payload: IGetBooks;
}

export interface IActionDefiniteBook {
  type: BookActionTypes;
  payload: IDefiniteBook;
}

export interface IAboutBook {
  param: string;
  info: string;
  icon?: boolean;
}
