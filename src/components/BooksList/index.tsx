import React from "react";
import { Loading } from "../Loading";
import { BookInfo } from "../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { Book } from "../Book";
import { setCurrentPage } from "../../store/actionCreators/booksActions";
import { Pagination } from "@mui/material";
import { ListOfBooks } from "./styles";

export const BooksList = () => {
  const dispatch = useDispatch();
  const { books, currentPage, totalCount, isNew, isLoading } = useSelector(
    (store: any) => store.books
  );

  // с сервера приходит массив из 10 объектов
  // начиная со 101 стр возвращается 1 страница
  const getPagesCount =
    Math.ceil(totalCount / 10) <= 100 ? Math.ceil(totalCount / 10) : 100;

  const onChangePage = (e: React.ChangeEvent<any>, pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <>
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
      {!isLoading && !!books.length && isNew == false && (
        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          size="large"
          onChange={onChangePage}
          defaultPage={currentPage}
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
