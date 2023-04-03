import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 150px;
  margin-bottom: 30px;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.greenish} 7%,
    ${(props) => props.theme.softGreen} 52%,
    ${(props) => props.theme.green} 100%
  );
`;

export const HeaderLogo = styled.img`
  height: 120px;
  margin: 15px 50px;
`;

export const MenuWrap = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;

export const MenuItems = styled.ul`
  display: flex;
`;

export const SearchLink = styled(Link)`
  text-decoration: none;
`;