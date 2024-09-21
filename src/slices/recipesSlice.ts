import { fetchRecipeById, fetchRecipesByQuery } from "../services/api";
import { Recipe } from "../types/recipeTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRecipes = createAsyncThunk(
  "recipes/getRecipes",
  async (query: string) => {
    return await fetchRecipesByQuery(query);
  }
);

export const getRecipeById = createAsyncThunk(
  "recipes/getRecipeById",
  async (id: string) => {
    return await fetchRecipeById(id);
  }
);

type RecipesState = {
  recipes: Recipe[];
  selectedRecipe: Recipe | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: RecipesState = {
  recipes: [],
  selectedRecipe: null,
  status: "idle",
  error: null,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipes = action.payload;
      })
      .addCase(getRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.selectedRecipe = action.payload;
      });
  },
});

export default recipesSlice.reducer;
