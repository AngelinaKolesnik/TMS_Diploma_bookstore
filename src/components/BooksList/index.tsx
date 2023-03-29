import React, { useEffect } from "react";
import { Loading } from "../Loading";
import { BookInfo } from "../../interfaces";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../services/books";
import { setCurrentPage, setIsFetch } from "../../store/booksReducer";
import { Book } from "../Book";

//! надо куда-то вынести, пока не поняла куда
const createPages = (
  pages: number[],
  pagesCount: number,
  currentPage: number
) => {
  if (pagesCount > 10) {
    if (currentPage > 5) {
      for (let i = currentPage - 4; i <= currentPage + 5; i++) {
        pages.push(i);
        if (i == pagesCount) break;
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i);
        if (i == pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
};

export const BooksList = () => {
  const dispatch = useDispatch();
  const { books, currentPage, totalCount, query, isFetch } = useSelector(
    (store: any) => store.books
  );

  const pagesCount = Math.ceil(totalCount / 10); // с сервера приходит массив из 10 объектов
  const pages = [];

  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    dispatch(setIsFetch(true));
    dispatch(getBooks(currentPage, query));
  }, [currentPage]);

  return (
    <>
      {!books.length && <h2>Start searching!</h2>}
      {isFetch ? (
        <Loading />
      ) : (
        <>
          <div className="books-list">
            {books.map((book: BookInfo) => (
              <Book
                isbn13={book.isbn13}
                title={book.title}
                price={book.price}
                image={book.image}
              />
            ))}
          </div>
          <div className="books-list__btns">
            {pages.map((page, index) => (
              <span
                key={index}
                className={
                  currentPage == page
                    ? "books-list__btn-page--current"
                    : "books-list__btn-page"
                }
                onClick={() => dispatch(setCurrentPage(page))}
              >
                {page}
              </span>
            ))}
          </div>
        </>
      )}
    </>
  );
};
