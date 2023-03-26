import React, { useEffect } from "react";
import { BookInfo } from "../../interfaces";
import "./styles.scss";

export const Book = (book: BookInfo) => {
  return (
    <div key={book.isbn13} className="product">
      <img src={book.image} alt={book.title} className="product__img" />
      <div className="product__title">{book.title}</div>
      <div className="product__price">{book.price}</div>
    </div>
  );
};
