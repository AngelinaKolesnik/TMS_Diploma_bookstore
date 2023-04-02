import React, { useEffect } from "react";
import { Loading } from "../Loading";
import { BookInfo } from "../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../store/actionCreators";
import { Book } from "../Book";
import {
  setCurrentPage,
  setIsLoading,
} from "../../store/actionCreators/booksActions";
import { Pagination } from "@mui/material";
import { ListOfBooks } from "./styles";

export const BooksList = () => {
  const dispatch = useDispatch();
  const { books, currentPage, totalCount, query, isLoading } = useSelector(
    (store: any) => store.books
  );

  const pagesCount = Math.ceil(totalCount / 10); // с сервера приходит массив из 10 объектов

  useEffect(() => {
    dispatch(setIsLoading(true));
    dispatch(getBooks(currentPage, query));
  }, [currentPage]);

  const onChangePage = (e: React.ChangeEvent<any>, pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <>
      {!books.length && <h2>Nothing found, please enter another query.</h2>}
      {isLoading ? (
        <Loading />
      ) : (
        <ListOfBooks>
          {books.map((book: BookInfo) => (
            <Book
              key={book.isbn13}
              title={book.title}
              price={book.price}
              image={book.image}
            />
          ))}
        </ListOfBooks>
      )}
      {!!books.length && (
        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          size="large"
          onChange={onChangePage}
          defaultPage={1}
          siblingCount={2}
          boundaryCount={2}
          count={pagesCount}
          showFirstButton
          showLastButton
        />
      )}
    </>
  );
};
