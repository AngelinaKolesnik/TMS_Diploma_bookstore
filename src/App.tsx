import React from "react";
import { Header } from "./components/Header";
import { BooksList } from "./components/BooksList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BooksList />}></Route>
          <Route path="/categories" element={<div></div>}></Route>
          <Route path="/basket" element={<div></div>}></Route>
          <Route path="/categories" element={<div></div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
