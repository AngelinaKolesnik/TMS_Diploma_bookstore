import React from "react";
import {
  StyledLoaderContainer,
  StyledLoaderImage,
  StyledLoaderText,
  StyledLoaderWrapper,
} from "./styles";
import Logo from "../../images/logo.svg";

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
