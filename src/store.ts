import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./slices/recipesSlice";
import searchQueryReducer from "./slices/searchQuerySlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    search: searchQueryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
