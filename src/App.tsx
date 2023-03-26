import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Header } from "./components/Header";
import { BooksList } from "./components/BooksList";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      <Header />

		<BrowserRouter>
		<Routes>
			<Route path='/' element={<BooksList />}></Route>
		</Routes>
		</BrowserRouter>
    </>
  );
};

export default App;
