import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../layouts/Header";
import { NewReleases } from "../NewReleases";

export const Home = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname == "/" ? <NewReleases /> : <Outlet />}
    </>
  );
};
