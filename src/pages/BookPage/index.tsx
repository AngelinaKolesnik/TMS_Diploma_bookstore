import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getDefiniteBook } from "../../services/books";
import { BookContainer, BookImg, BookInfoWrap, BookWrap } from "./styles";
import { Loading } from "../../components/Loading";
import { BookHeader } from "./BookHeader";
import { BookDescription } from "./BookDescription";
import { IAboutBook } from "../../interfaces";
import { AboutBook } from "./AboutBook";
import { Keys } from "../../constants/LocalStorage";

export const BookPage = () => {
  const dispatch = useDispatch();
  const isbn13 = useTypedSelector((store) => store.books.isbn13);
  let info = useTypedSelector((store) => store.definiteBook.isbn13);
  const isLoading = useTypedSelector((store) => store.definiteBook.isLoading);
  console.log(info);

  info != false &&
    localStorage.setItem(Keys.DIFINITE_BOOK, JSON.stringify(info));
  localStorage.getItem(Keys.DIFINITE_BOOK) &&
    (info = JSON.parse(localStorage.getItem(Keys.DIFINITE_BOOK) || ""));

  useEffect(() => {
    isbn13 && dispatch(getDefiniteBook(isbn13));
  }, []);

  const aboutBook: IAboutBook[] = [
    {
      param: "Price:",
      info: info.price,
    },
    {
      param: "Rating:",
      info: info.rating,
      icon: true,
    },
    {
      param: "Author(s):",
      info: info.authors,
    },
    {
      param: "Publisher:",
      info: info.publisher,
    },
    {
      param: "Published:",
      info: info.year,
    },
    {
      param: "Pages:",
      info: info.pages,
    },
    {
      param: "ISBN-10:",
      info: info.isbn10,
    },
    {
      param: "ISBN-13:",
      info: info.isbn13,
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <BookContainer>
          <BookHeader title={info.title} subtitle={info.subtitle} />
          <BookWrap>
            <BookImg src={info.image} />
            <BookInfoWrap>
              {aboutBook.map((item: IAboutBook, index) => (
                <AboutBook
                  key={index}
                  param={item.param}
                  info={item.info}
                  icon={item.icon}
                />
              ))}
            </BookInfoWrap>
          </BookWrap>
          <BookDescription desc={info.desc} title="Description:" />
        </BookContainer>
      )}
    </>
  );
};
