import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { themeLight } from "./theme";
import { useSelector } from "react-redux";
import { uiThemeSelector } from "./store/uiSlice/selectors";
import { UITheme } from "./store/uiSlice";
import { NewReleases } from "./pages/NewReleases";
import { SearchBooks } from "./pages/SearchBooks";
import { Routes } from "./constants/Routers";
import { Home } from "./pages/Home";

const themeName: Record<UITheme, DefaultTheme> = {
  light: themeLight,
};

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
    children: [
      {
        path: Routes.NEW_RELEASES,
        element: <NewReleases />,
      },
      {
        path: Routes.SEARCH,
        element: <SearchBooks />,
      },
    ],
  },
]);

const App = () => {
  const theme = useSelector(uiThemeSelector);
  return (
    <ThemeProvider theme={themeName[theme]}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
