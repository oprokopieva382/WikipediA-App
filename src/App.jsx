import { useState } from "react";
import {SearchInput} from "./components/SearchInput"
import {List} from "./components/List"
import { useDebounce } from "./hooks/useDebounce";

export const App = () => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  return (
    <>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <List searchTerm={debouncedSearchValue} />
    </>
  );
};
