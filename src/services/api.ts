import { Recipe } from "../types/types";

const apiKey = "dc99d607cbde986129e3a57b3f0bca22";
const appId = "13e8ec47";

export const fetchRecipesByQuery = async (query: string): Promise<Recipe[]> => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&to=10`
  );
  const data = await response.json();

  return data.hits.map((hit: any) => hit.recipe as Recipe);
};

export const fetchRecipeById = async (uri: string): Promise<Recipe> => {
  const encodedUri = encodeURIComponent(uri);
  const response = await fetch(
    `https://api.edamam.com/search?r=${encodedUri}&app_id=${appId}&app_key=${apiKey}`
  );
  const data = await response.json();

  return data[0] as Recipe;
};
