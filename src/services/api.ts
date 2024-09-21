import { Recipe } from "../types/recipeTypes";

export const fetchRecipesByQuery = async (query: string): Promise<Recipe[]> => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const data = await response.json();
  return data.meals as Recipe[];
};

export const fetchRecipeById = async (id: string): Promise<Recipe> => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  return data.meals[0] as Recipe;
};
