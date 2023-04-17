import React from "react";
import { BookInfo, BookInfoContainer } from "../styles";
import { IAboutBook } from "../../../interfaces";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

export const AboutBook = (props: IAboutBook) => {
  return (
    <BookInfo>
      <div> {props.param} </div>
      <BookInfoContainer>
        {props.info} {props.icon && <StarOutlineRoundedIcon />}
      </BookInfoContainer>
    </BookInfo>
  );
};
