import React, { useEffect, useState } from "react";
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
import { getLocalStorageBookInfo } from "../../helpers/LocalStorage/getLocalStorageBookInfo";

export const BookPage = () => {
  const dispatch = useDispatch();
  const isbn13 = useTypedSelector((store) => store.books.isbn13);
  const info = useTypedSelector((store) => store.definiteBook.isbn13);
  const isLoading = useTypedSelector((store) => store.definiteBook.isLoading);

  const [data, setData] = useState(info);

  useEffect(() => {
    isbn13 && dispatch(getDefiniteBook(isbn13));
    info.isbn13 &&
      localStorage.setItem(Keys.DIFINITE_BOOK, JSON.stringify(info));
    localStorage.getItem(Keys.DIFINITE_BOOK) && !info.isbn13
      ? setData(getLocalStorageBookInfo(Keys.DIFINITE_BOOK))
      : setData(info);
  }, [info.isbn13]);

  const aboutBook: IAboutBook[] = [
    {
      param: "Price:",
      info: data.price,
    },
    {
      param: "Rating:",
      info: data.rating,
      icon: true,
    },
    {
      param: "Author(s):",
      info: data.authors,
    },
    {
      param: "Publisher:",
      info: data.publisher,
    },
    {
      param: "Published:",
      info: data.year,
    },
    {
      param: "Pages:",
      info: data.pages,
    },
    {
      param: "ISBN-10:",
      info: data.isbn10,
    },
    {
      param: "ISBN-13:",
      info: data.isbn13,
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <BookContainer>
          <BookHeader title={data.title} subtitle={data.subtitle} />
          <BookWrap>
            <BookImg src={data.image} />
            <BookInfoWrap>
              {aboutBook.map((item, index) => (
                <AboutBook
                  key={index}
                  param={item.param}
                  info={item.info}
                  icon={item.icon}
                />
              ))}
            </BookInfoWrap>
          </BookWrap>
          <BookDescription desc={data.desc} title="Description:" />
        </BookContainer>
      )}
    </>
  );
};
