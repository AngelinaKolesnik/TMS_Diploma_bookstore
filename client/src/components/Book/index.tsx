import React from "react";
import { BookInfo } from "../../interfaces";
import { BookImg, BookLink, BookPrice, BookTitle, ItemOfBooks } from "./styles";
import { Routes } from "../../constants/Routers";
import { useDispatch } from "react-redux";
import { setIsbn13 } from "../../store/actionCreators/booksActions";

export const Book = (book: BookInfo) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setIsbn13(book.isbn13));
  };

  return (
    <BookLink to={`${Routes.BOOK}/${book.title}`} onClick={onClick}>
      <ItemOfBooks>
        <BookImg src={book.image} alt={book.title} />
        <BookTitle>{book.title}</BookTitle>
        <BookPrice>{book.price}</BookPrice>
      </ItemOfBooks>
    </BookLink>
  );
};
