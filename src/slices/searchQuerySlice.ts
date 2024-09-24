import { createSlice } from "@reduxjs/toolkit";

import { Recipe } from "../types/types";

interface SearchQueryState {
  query: string;
  results: Recipe[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SearchQueryState = {
  query: "",
  results: [],
  status: "idle",
  error: null,
};

const searchQuerySlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;
