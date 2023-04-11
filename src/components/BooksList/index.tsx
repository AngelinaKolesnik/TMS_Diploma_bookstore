import React, { useEffect } from "react";
import { Loading } from "../Loading";
import { BookInfo } from "../../interfaces";
import { useDispatch } from "react-redux";
import { Book } from "../Book";
import {
  setCurrentPage,
  setQuery,
} from "../../store/actionCreators/booksActions";
import { Pagination } from "@mui/material";
import { ListOfBooks } from "./styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getBooksSearch } from "../../services/books";

export const BooksList = () => {
  const dispatch = useDispatch();
  const { books, currentPage, totalCount, isNew, isLoading, query } =
    useTypedSelector((store) => store.books);

  // an array of 10 objects comes from the server
  // starting from page 101, the first page is returned
  const getPagesCount =
    Math.ceil(+totalCount / 10) <= 100 ? Math.ceil(+totalCount / 10) : 100;

  const onChangePage = (e: React.ChangeEvent<any>, pageNumber: number) => {
    query === "" && dispatch(setQuery("all"));
    dispatch(setCurrentPage(pageNumber));
  };

  useEffect(() => {
    dispatch(getBooksSearch(currentPage, query));
  }, [currentPage]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ListOfBooks>
          {books.map((book: BookInfo) => (
            <Book
              isbn13={book.isbn13}
              key={book.isbn13}
              title={book.title}
              price={book.price}
              image={book.image}
            />
          ))}
        </ListOfBooks>
      )}
      {!isLoading && !!books.length && isNew === false && +totalCount > 10 && (
        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          size="large"
          onChange={onChangePage}
          defaultPage={+currentPage}
          siblingCount={2}
          boundaryCount={2}
          count={getPagesCount}
          showFirstButton
          showLastButton
        />
      )}
    </>
  );
};
