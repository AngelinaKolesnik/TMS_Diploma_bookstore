import React from "react";
import { BookSubtitle, BookTitle } from "./styles";
import { IBookHeaderInfo } from "../../../interfaces";

export const BookHeader = (props: IBookHeaderInfo) => {
  return (
    <>
      <BookTitle>{props.title}</BookTitle>
      <BookSubtitle>{props.subtitle}</BookSubtitle>
    </>
  );
};
