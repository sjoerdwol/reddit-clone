import { configureStore } from "@reduxjs/toolkit";

import searchResults from "../features/SearchResults/searchResultsSlice";

const store = configureStore({
  reducer: {
    searchResults: searchResults
  }
});

export default store;
