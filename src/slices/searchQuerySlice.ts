import { createSlice } from "@reduxjs/toolkit";

import { Recipe } from "../types/recipeTypes";

interface SearchQueryState {
  query: string;
  category: string;
  results: Recipe[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SearchQueryState = {
  query: "",
  category: "All",
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
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setQuery, setCategory } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;
