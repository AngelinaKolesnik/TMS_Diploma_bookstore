import React from "react";
import { BookDescriptionTitle, BookDescriptionText } from "./styles";
import { IBookDescriptionInfo } from "../../../interfaces";

export const BookDescription = (props: IBookDescriptionInfo) => {
  return (
    <>
      <BookDescriptionTitle>{props.title}</BookDescriptionTitle>
      <BookDescriptionText>{props.desc}</BookDescriptionText>
    </>
  );
};
