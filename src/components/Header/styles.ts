import {
  greenish,
  softGreen,
  green,
  lightGreen,
} from "./../../constants/colors";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 150px;
  margin-bottom: 50px;
  background: linear-gradient(
    90deg,
    ${greenish} 7%,
    ${softGreen} 52%,
    ${green} 100%
  );
`;

export const HeaderLogo = styled.img`
  height: 120px;
  margin: 15px 50px;
`;

export const MenuItems = styled.ul`
  display: flex;
`;

export const MenuWrap = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;

export const MenuSearch = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const MenuSearchInput = styled.input`
  width: calc(100% - 40px);
  height: 100%;
  border-radius: 5px 0 0 5px;
  border: 0;
  padding: 10px;
  font-size: 16px;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;

export const MenuSearchBtn = styled.button`
  width: 40px;
  height: 100%;
  border-radius: 0 5px 5px 0;
  color: ${lightGreen};
  background-color: ${green};
  border: 0;
`;
