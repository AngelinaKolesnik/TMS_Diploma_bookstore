import { BookActionTypes } from "../types/books";

export const setBooks = (books: object[]) => ({
  type: BookActionTypes.SET_BOOKS,
  payload: books,
});
export const setCurrentPage = (currentPage: number) => ({
  type: BookActionTypes.SET_CURRENT_PAGE,
  payload: currentPage,
});
export const setQuery = (query: string) => ({
  type: BookActionTypes.SET_QUERY,
  payload: query,
});
export const setIsLoading = (isLoading: boolean) => ({
  type: BookActionTypes.SET_IS_LOADING,
  payload: isLoading,
});
export const setIsNew = (isNew: boolean) => ({
  type: BookActionTypes.SET_IS_NEW,
  payload: isNew,
});
export const setIsbn13 = (isbn13: string) => ({
	type: BookActionTypes.SET_ISBN13,
	payload: isbn13,
 });
 export const setOneBook = (isbn13: string) => ({
	type: BookActionTypes.SET_ONE_BOOK,
	payload: isbn13,
 });