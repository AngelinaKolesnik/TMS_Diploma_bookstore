import React, { useEffect, useState } from "react";
import { MenuSearchIcon, MenuSearchInput, Search } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { getBooksSearch } from "../../../store/actionCreators";
import {
  setCurrentPage,
  setIsLoading,
  setIsNew,
  setQuery,
} from "../../../store/actionCreators/booksActions";
import { useDispatch } from "react-redux";

export const MenuSearch = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  function useDebounce(value: unknown, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [value]);

    return debouncedValue;
  }

  const debouncedSearchTerm = useDebounce(searchValue, 500);

  useEffect(() => {
	dispatch(setIsNew(false)) 
    !(searchValue.trim() == "") &&
      dispatch(setIsLoading(true)) &&
      dispatch(
        getBooksSearch(1, searchValue.replace(/\s/g, "").toLowerCase())
      ) &&
      dispatch(setQuery(searchValue.replace(/\s/g, "").toLowerCase())) &&
      dispatch(setCurrentPage(1));
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
