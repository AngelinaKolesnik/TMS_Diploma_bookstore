import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNewBooks } from "../../services/books/index";
import { BooksList } from "../../components/BooksList";

export const NewReleases = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewBooks());
  }, []);

  return (
    <>
      <BooksList />
    </>
  );
};
