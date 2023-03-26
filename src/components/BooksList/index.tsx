import React, { useEffect, useState } from "react";
import { Loading } from "../Loading";
import { BookInfo } from "../../interfaces";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../services/books";
import { setCurrentPage } from "../../store/booksReducer";
import { Book } from "../Book";

export const BooksList = () => {
  //   const [books, setBooks] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);

  //   const fetchPosts = async () => {
  //     setIsLoading(true);
  //     try {
  //       const { data } = await axios.get(
  //         `https://api.itbook.store/1.0/search/react`
  //       );

  //       setBooks(data.books);
  // 		// console.dir(data)
  //     } catch (error) {
  //       alert(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchPosts();
  //   }, []);

  const dispatch = useDispatch();
  const { books, currentPage, totalCount } = useSelector(
    (store: any) => store.books
  );
  const pagesCount = Math.ceil(totalCount / 10); // с сервера приходит массив из 10 объектов
  const pages = [];

  const createPages = (pages, pagesCount, currentPage) => {
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

  createPages(pages, pagesCount, currentPage);
  console.log(pagesCount);

  useEffect(() => {
    dispatch(getBooks(currentPage));
  }, [currentPage]);

  console.log(pages[1], totalCount, books);

  return (
    <>
      {/* {isLoading} ? (
        <Loading />
      ) : ( */}
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
      {/* )} */}
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
  );
};
