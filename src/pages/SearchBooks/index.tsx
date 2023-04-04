import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBooksSearch } from "../../services/books";
import {
  setIsLoading,
  setIsNew,
} from "../../store/actionCreators/booksActions";
import { BooksList } from "../../components/BooksList";
import { SearchZeroText } from "./styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const SearchBooks = () => {
  const dispatch = useDispatch();
  const { books, currentPage, query } = useTypedSelector(
    (store) => store.books
  );

  useEffect(() => {
    dispatch(setIsNew(false));
    dispatch(setIsLoading(true));
    dispatch(getBooksSearch(currentPage, query));
  }, []);

  const getAllBooks = () => {
    dispatch(getBooksSearch(1, "all"));
  };

  return (
    <>
      {(query == "" || query == "all") && (
        <SearchZeroText>Start searching!</SearchZeroText>
      )}
      {!books.length && getAllBooks()}
      <BooksList />
    </>
  );
};
