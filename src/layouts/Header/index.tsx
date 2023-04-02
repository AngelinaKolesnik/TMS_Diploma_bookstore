import { Button, Drawer } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { HeaderContainer, HeaderLogo, MenuWrap } from "./styles";
import Logo from "../../images/logo.svg";
import { themeLight } from "../../theme";
import { MenuSearch } from "./MenuSearch";
import CategoryIcon from "@mui/icons-material/Category";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { MenuItems } from "./styles";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            <MenuSearch />
            <Link to={"/"}>
              <PersonOutlineOutlinedIcon
                sx={{ color: themeLight.lightGreen }}
                fontSize="large"
              />
            </Link>
            <Link to={"/basket"}>
              <ShoppingCartOutlinedIcon
                sx={{ color: themeLight.lightGreen }}
                fontSize="large"
              />
            </Link>
            <Button onClick={toggleIsOpen}>
              <MenuIcon
                sx={{ color: themeLight.lightGreen }}
                fontSize="large"
              />
            </Button>
            <Drawer anchor="right" open={isOpen} onClose={toggleIsOpen}>
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
            </Drawer>
          </MenuWrap>
        </BrowserRouter>
      </HeaderContainer>
    </>
  );
};
