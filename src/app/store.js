import { configureStore } from "@reduxjs/toolkit";

import searchResults from "../features/SearchResults/searchResultsSlice";
import subreddits from "../features/subreddits/subredditsSlice";

const store = configureStore({
  reducer: {
    searchResults: searchResults,
    subreddits: subreddits
  }
});

export default store;
