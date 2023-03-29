import { Button, Drawer } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import MenuIcon from "@mui/icons-material/Menu";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogo,
  MenuItems,
  MenuSearch,
  MenuSearchBtn,
  MenuSearchInput,
  MenuWrap,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../services/books";
import { setQuery } from "../../store/booksReducer";
import { lightGreen } from "../../constants/colors";
// обычный импорт выдает ошибку
const Logo = require("../../images/logo.svg");

export const Header = () => {
  const dispatch = useDispatch();
  const { query } = useSelector((store: any) => store.books);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(query);

  const searchHandler = () => {
    searchValue.trim() == ""
      ? alert("Please, enter correct data.")
      : dispatch(getBooks(1, searchValue.replace(/\s/g, "").toLowerCase())) &&
        dispatch(setQuery(searchValue.replace(/\s/g, "").toLowerCase()));
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderContainer>
        <BrowserRouter>
          <Link to={"/"}>
            <HeaderLogo src={Logo} alt="Green Apple Books" />
          </Link>
          <MenuWrap>
            <MenuSearch>
              <MenuSearchInput
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <MenuSearchBtn onClick={() => searchHandler()}>
                <SearchIcon />
              </MenuSearchBtn>
            </MenuSearch>
            <Link to={"/"}>
              <PersonOutlineOutlinedIcon
                sx={{ color: lightGreen }}
                fontSize="large"
              />
            </Link>
            <Link to={"/basket"}>
              <ShoppingCartOutlinedIcon
                sx={{ color: lightGreen }}
                fontSize="large"
              />
            </Link>
            <Button onClick={toggleIsOpen}>
              <MenuIcon sx={{ color: lightGreen }} fontSize="large" />
            </Button>
            <Drawer anchor="right" open={isOpen} onClose={toggleIsOpen}>
              {
                <MenuItems>
                  <li>
                    <Link to={"/"} onClick={toggleIsOpen}>
                      <NewReleasesIcon />
                      <div>New Releases</div>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/categories"} onClick={toggleIsOpen}>
                      <CategoryIcon />
                      <div>Books Categories</div>
                    </Link>
                  </li>
                </MenuItems>
              }
            </Drawer>
          </MenuWrap>
        </BrowserRouter>
      </HeaderContainer>
    </>
  );
};
