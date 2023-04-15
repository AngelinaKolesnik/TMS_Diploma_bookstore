import React, { useEffect } from "react";
import { BooksList } from "../../components/BooksList";
import { SearchZeroText } from "./styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {
  setCurrentPage,
  setQuery,
} from "../../store/actionCreators/booksActions";
import { Keys } from "../../constants/LocalStorage";
import { getLocalStorageSearchPage } from "../../helpers/LocalStorage/getLocalStorageSearchPage";
import { getLocalStorageSearchQuery } from "../../helpers/LocalStorage/getLocalStorageSearchQuery";
import { getBooksSearch } from "../../services/books";

let controller = new AbortController();

export const SearchBooks = () => {
  const currentPage = useTypedSelector((store) => store.books.currentPage);
  const query = useTypedSelector((store) => store.books.query);
  const books = useTypedSelector((store) => store.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    controller?.abort();
    controller = new AbortController();
    const signal = controller.signal;
    currentPage !== 1 &&
      localStorage.setItem(Keys.SEARCH_PAGE, JSON.stringify(currentPage));
    dispatch(getBooksSearch(currentPage, query, signal));
  }, [currentPage]);

  useEffect(() => {
    controller?.abort();
    controller = new AbortController();
    const signal = controller.signal;
    query !== "" &&
      localStorage.setItem(Keys.SEARCH_QUERY, JSON.stringify(query));
    dispatch(getBooksSearch(currentPage, query, signal));
  }, [query]);

  useEffect(() => {
    dispatch(setCurrentPage(+getLocalStorageSearchPage(Keys.SEARCH_PAGE)));
    dispatch(setQuery(getLocalStorageSearchQuery(Keys.SEARCH_QUERY)));
  }, []);

  return (
    <>
	 {!books.length && <SearchZeroText>Nothing found :(</SearchZeroText>}
      {(query === "" || query === "all" || !books.length) && currentPage === 1 && (
        <SearchZeroText>Start searching!</SearchZeroText>
      )}
      <BooksList />
    </>
  );
};
