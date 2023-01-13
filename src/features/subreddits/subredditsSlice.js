import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getSubreddit } from "../../api/redditApi";

// initial state
const initialState = {
  results: [],
  hasResult: false,
  isLoading: false,
  error: false
}

// create async thunk
export const fetchSubreddit = createAsyncThunk('subreddits/fetchSubreddit', async (subreddit) => {
  const results = await getSubreddit(subreddit)
  return results;
})

// create and export slice
export const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState: initialState,
  reducers: {
    resetSubreddit: (state, action) => {
      state.results = [],
      state.isLoading = false,
      state.hasResult = false,
      state.error = false
    }
  },
  extraReducers: {
    [fetchSubreddit.pending]: (state, action) => {
      state.isLoading = true,
      state.hasResult = false,
      state.error = false
    },
    [fetchSubreddit.fulfilled]: (state, action) => {
      state.results = action.payload;
      state.hasResult = true,
      state.isLoading = false,
      state.error = false
    },
    [fetchSubreddit.rejected]: (state, action) => {
      state.isLoading = false,
      state.hasResult = false,
      state.error = true
    }
  }
});

// create and export selectors
export const selectSubredditIsLoading = state => state.subreddits.isLoading;
export const selectSubredditHasResult = state => state.subreddits.hasResult;
export const selectSubredditError = state => state.subreddits.error;
export const selectSubredditResults = state => state.subreddits.results;

export const { resetSubreddit } = subredditsSlice.actions;
export default subredditsSlice.reducer;
