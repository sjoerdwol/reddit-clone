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
  reducers: {},
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
export const selectIsLoading = state => state.searchResults.isLoading;
export const selectHasResult = state => state.searchResults.hasResult;
export const selectError = state => state.searchResults.error;
export const selectResults = state => state.searchResults.results;

export default searchResultsSlice.reducer;
