import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setIsLoading,
  setIsNew,
} from "../../store/actionCreators/booksActions";
import { getNewBooks } from "../../services/books/index";
import { BooksList } from "../../components/BooksList";

export const NewReleases = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsNew(true));
    dispatch(setIsLoading(true));
    dispatch(getNewBooks());
  }, []);

  return (
    <>
      <BooksList />
    </>
  );
};
