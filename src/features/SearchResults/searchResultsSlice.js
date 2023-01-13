import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getSearchResults } from "../../api/redditApi";

// initial state
const initialState = {
  results: [],
  hasResult: false,
  isLoading: false,
  error: false
}

// create async thunk
export const fetchResults = createAsyncThunk('searchResults/fetchResults', async (searchterm) => {
  const results = await getSearchResults(searchterm);
  return results;
})

// create and export slice
export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: initialState,
  reducers: {
    resetSearch: (state, action) => {
      state.results = [],
      state.isLoading = false,
      state.hasResult = false,
      state.error = false
    }
  },
  extraReducers: {
    [fetchResults.pending]: (state, action) => {
      state.isLoading = true,
      state.hasResult = false,
      state.error = false
    },
    [fetchResults.fulfilled]: (state, action) => {
      state.results = action.payload;
      state.hasResult = true,
      state.isLoading = false,
      state.error = false
    },
    [fetchResults.rejected]: (state, action) => {
      state.isLoading = false,
      state.hasResult = false,
      state.error = true
    }
  }
});

// create and export selectors
export const selectSearchIsLoading = state => state.searchResults.isLoading;
export const selectSearchHasResult = state => state.searchResults.hasResult;
export const selectSearchError = state => state.searchResults.error;
export const selectSearchResults = state => state.searchResults.results;

export const { resetSearch } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
