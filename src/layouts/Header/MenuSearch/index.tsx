import React, { useEffect, useState } from "react";
import { MenuSearchIcon, MenuSearchInput, Search } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { getBooksSearch } from "../../../services/books";
import {
  setCurrentPage,
  setQuery,
} from "../../../store/actionCreators/booksActions";
import { useDispatch } from "react-redux";
import { useDebounce } from "../../../hooks/useDebounce";
import { Keys } from "../../../constants/LocalStorage";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

export let controller = new AbortController();

export const MenuSearch = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchTerm = useDebounce(searchValue, 500);
  const query = useTypedSelector((store) => store.books.query);

  useEffect(() => {
    controller?.abort();
    controller = new AbortController();
    const signal = controller.signal;

    !(searchValue.trim() === "") &&
      (dispatch(
        getBooksSearch(1, searchValue.replace(/\s/g, "").toLowerCase(), signal)
      ),
      dispatch(setQuery(searchValue.replace(/\s/g, "").toLowerCase())),
      dispatch(setCurrentPage(1)));
    !!query && localStorage.setItem(Keys.SEARCH_PAGE, JSON.stringify(1));
  }, [debouncedSearchTerm]);

  return (
    <Search onSubmit={(event) => event.preventDefault()}>
      <MenuSearchIcon>
        <SearchIcon />
      </MenuSearchIcon>
      <MenuSearchInput
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
          setSearchValue(e.target.value);
        }}
      />
    </Search>
  );
};
