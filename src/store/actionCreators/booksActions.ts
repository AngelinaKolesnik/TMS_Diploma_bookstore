import { BookActionTypes } from '../types/books';

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
 