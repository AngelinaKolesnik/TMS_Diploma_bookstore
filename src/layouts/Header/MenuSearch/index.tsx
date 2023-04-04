import React, { useEffect, useState } from "react";
import { MenuSearchIcon, MenuSearchInput, Search } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { getBooksSearch } from "../../../services/books";
import {
  setCurrentPage,
  setIsLoading,
  setIsNew,
  setQuery,
} from "../../../store/actionCreators/booksActions";
import { useDispatch } from "react-redux";
import { useDebounce } from "../../../hooks/useDebounce";

let controller = new AbortController();

export const MenuSearch = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchTerm = useDebounce(searchValue, 500);

  useEffect(() => {
    dispatch(setIsNew(false));
    controller?.abort();
    controller = new AbortController();
    const { signal } = controller;

    !(searchValue.trim() == "") &&
      (dispatch(setIsLoading(true)),
		dispatch(
			getBooksSearch(1, searchValue.replace(/\s/g, "").toLowerCase(), signal)
		 ),
      dispatch(setQuery(searchValue.replace(/\s/g, "").toLowerCase())),
      dispatch(setCurrentPage(1)));
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
