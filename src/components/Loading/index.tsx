import React from "react";
import {
  StyledLoaderContainer,
  StyledLoaderImage,
  StyledLoaderText,
  StyledLoaderWrapper,
} from "./styles";
// обычный импорт выдает ошибку
const Logo = require("../../images/logo.svg");

export const Loading = () => {
  return (
    <StyledLoaderContainer>
      <StyledLoaderWrapper>
        <StyledLoaderImage src={Logo} alt="" />
        <StyledLoaderText>Loading...</StyledLoaderText>
      </StyledLoaderWrapper>
    </StyledLoaderContainer>
  );
};
