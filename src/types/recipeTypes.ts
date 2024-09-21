export type Recipe = {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate?: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags?: string | null;
  strYoutube?: string | null;
  strIngredient1?: string | null;
  strIngredient2?: string | null;
  [key: string]: string | null | undefined;
};
