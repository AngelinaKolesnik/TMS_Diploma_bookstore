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
import { getBooksSearch } from "../../services/books";

export const SearchBooks = () => {
  let currentPage = useTypedSelector((store) => store.books.currentPage);
  let query = useTypedSelector((store) => store.books.query);
  const dispatch = useDispatch();

  // query
  query != "" && localStorage.setItem(Keys.SEARCH_QUERY, JSON.stringify(query));
  currentPage != 1 &&
    localStorage.setItem(Keys.SEARCH_PAGE, JSON.stringify(currentPage));

  const searchValue =
    localStorage.getItem(Keys.SEARCH_QUERY) || "" != null
      ? localStorage.getItem(Keys.SEARCH_QUERY) || ""
      : "all";

  localStorage.getItem(Keys.SEARCH_QUERY) &&
    (query = JSON.parse(searchValue || ""));

  //currentPage
  const page = localStorage.getItem(Keys.SEARCH_PAGE);

  localStorage.getItem(Keys.SEARCH_PAGE) &&
    (currentPage = +JSON.parse(page || ""));

  useEffect(() => {
    dispatch(setCurrentPage(+currentPage || 1));

    dispatch(setQuery(query !== "" ? "" + query : "all"));
    dispatch(
      getBooksSearch(currentPage || 1, query !== "" ? "" + query : "all")
    );
  }, []);

  return (
    <>
      {(query === "" || query === "all") && currentPage == 1 && (
        <SearchZeroText>Start searching!</SearchZeroText>
      )}
      <BooksList />
    </>
  );
};
