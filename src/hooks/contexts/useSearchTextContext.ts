import { useContext } from "react";
import { SearchTextContext } from "../../contexts/SearchTextContextProvider";

export const useSearchTextContext = () => {
  const context = useContext(SearchTextContext);

  if (!context) {
    throw new Error(
      "useBookmarksContext must be used inside SearchTextContextProvider"
    );
  }
  return context;
};
