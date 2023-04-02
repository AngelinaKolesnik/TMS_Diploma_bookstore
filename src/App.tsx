import React from "react";
import { Header } from "./layouts/Header";
import { BooksList } from "./components/BooksList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { themeLight } from "./theme";
import { useSelector } from "react-redux";
import { uiThemeSelector } from "./store/uiSlice/selectors";
import { UITheme } from "./store/uiSlice";

const themeName: Record<UITheme, DefaultTheme> = {
  light: themeLight,
};

const App = () => {
  const theme = useSelector(uiThemeSelector);
  return (
    <ThemeProvider theme={themeName[theme]}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BooksList />}></Route>
          <Route path="/categories" element={<div></div>}></Route>
          <Route path="/basket" element={<div></div>}></Route>
          <Route path="/categories" element={<div></div>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
