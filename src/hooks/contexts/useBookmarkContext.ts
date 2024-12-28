import { useContext } from "react";
import { BookmarksContext } from "../../contexts/BookmarksContextProvider";

export const useBookmarksContext = () => {
  const context = useContext(BookmarksContext);

  if (!context) {
    throw new Error(
      "useBookmarksContext must be used inside BookmarksContextProvider"
    );
  }
  return context;
};
