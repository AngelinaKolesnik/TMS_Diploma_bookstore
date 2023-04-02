import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksSearch } from "../../store/actionCreators";
import {
  setIsLoading,
  setIsNew,
} from "../../store/actionCreators/booksActions";
import { BooksList } from "../../components/BooksList";
import { SearchZeroText } from "./styles";

export const SearchBooks = () => {
  const dispatch = useDispatch();
  const { books, currentPage, query } = useSelector(
    (store: any) => store.books
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
