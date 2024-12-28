import { createContext, useState } from "react";
import useDebounce from "../hooks/useDebounce";

type SearchTextContext = {
  searchText: string;
  debouncedSearchText: string;
  handleSearchTextChange: (searchTerm: string) => void;
};

export const SearchTextContext = createContext<SearchTextContext | null>(null);

export default function SearchTextContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 250);

  const handleSearchTextChange = (searchTerm: string) => {
    setSearchText(searchTerm);
    // setCurrentPage(1);
  };

  return (
    <SearchTextContext.Provider
      value={{
        searchText,
        debouncedSearchText,
        handleSearchTextChange,
      }}
    >
      {children}
    </SearchTextContext.Provider>
  );
}
