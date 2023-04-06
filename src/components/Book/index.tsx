import React from "react";
import { BookInfo } from "../../interfaces";
import { BookImg, BookLink, BookPrice, BookTitle, ItemOfBooks } from "./styles";
import { Routes } from "../../constants/Routers";
import { useDispatch } from "react-redux";
import {
  setIsLoading,
  setIsbn13,
} from "../../store/actionCreators/booksActions";

export const Book = (book: BookInfo) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setIsLoading(true));
    dispatch(setIsbn13(book.isbn13));
  };

  return (
    <BookLink
      to={Routes.BOOK}
      onClick={onClick}
      state={{ book: `${book.image}` }}
    >
      <ItemOfBooks>
        <BookImg src={book.image} alt={book.title} className="book__img" />
        <BookTitle className="book__title">{book.title}</BookTitle>
        <BookPrice className="book__price">{book.price}</BookPrice>
      </ItemOfBooks>
    </BookLink>
  );
};
