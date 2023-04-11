import React from "react";
import { BookInfo, BookInfoContainer } from "../styles";
import { IAboutBook } from "../../../interfaces";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

export const AboutBook = (item: IAboutBook) => {
  return (
    <BookInfo>
      <div> {item.param} </div>
      <BookInfoContainer>
        {item.info} {item.icon && <StarOutlineRoundedIcon />}
      </BookInfoContainer>
    </BookInfo>
  );
};
