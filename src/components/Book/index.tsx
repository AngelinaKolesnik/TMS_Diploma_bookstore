import React from "react";
import { BookInfo } from "../../interfaces";
import { BookImg, BookPrice, BookTitle, ItemOfBooks } from "./styles";

export const Book = (book: BookInfo) => {
  return (
    <ItemOfBooks>
      <BookImg src={book.image} alt={book.title} className="book__img" />
      <BookTitle className="book__title">{book.title}</BookTitle>
      <BookPrice className="book__price">{book.price}</BookPrice>
    </ItemOfBooks>
  );
};
