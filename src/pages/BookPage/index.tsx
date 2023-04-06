import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getDefiniteBook } from "../../services/books";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import {
  BookAuthor,
  BookContainer,
  BookDescription,
  BookDescriptionText,
  BookImg,
  BookInfo,
  BookInfoWrap,
  BookRating,
  BookSubtitle,
  BookTitle,
  BookWrap,
} from "./styles";
import {
  setIsLoading,
  setIsNew,
} from "../../store/actionCreators/booksActions";
import { Loading } from "../../components/Loading";

export const BookPage = () => {
  const dispatch = useDispatch();
  const { isbn13 } = useTypedSelector((store) => store.books);
  const info = useTypedSelector((store) => store.definiteBook.isbn13);
  const { isLoading } = useTypedSelector((store) => store.definiteBook);

  useEffect(() => {
    dispatch(setIsNew(false));
    dispatch(setIsLoading(true));
    dispatch(getDefiniteBook(isbn13));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <BookContainer>
          <BookTitle>{info.title}</BookTitle>
          <BookSubtitle>{info.subtitle}</BookSubtitle>
          <BookWrap>
            <BookImg src={info.image} />
            <BookInfoWrap>
              <BookInfo>
                <div> Price </div>
                <div>{info.price} </div>
              </BookInfo>
              <BookInfo>
                <div> Rating </div>
                <BookRating>
                  {info.rating} <StarOutlineRoundedIcon />
                </BookRating>
              </BookInfo>
              <BookInfo>
                <div> Author(s) </div>
                <BookAuthor>{info.authors} </BookAuthor>
              </BookInfo>
              <BookInfo>
                <div> Publisher </div>
                <div>{info.publisher} </div>
              </BookInfo>
              <BookInfo>
                <div> Published </div>
                <div>{info.year} </div>
              </BookInfo>
              <BookInfo>
                <div> Pages </div>
                <div>{info.pages} </div>
              </BookInfo>
              <BookInfo>
                <div> ISBN-10 </div>
                <div>{info.isbn10} </div>
              </BookInfo>
              <BookInfo>
                <div> ISBN-13 </div>
                <div>{info.isbn13} </div>
              </BookInfo>
            </BookInfoWrap>
          </BookWrap>
          <BookDescription>Description:</BookDescription>
          <BookDescriptionText>{info.desc}</BookDescriptionText>
        </BookContainer>
      )}
    </>
  );
};
