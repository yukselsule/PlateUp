export type Recipe = {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  ingredientLines: string[];
  calories: number;
  totalTime: number;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  totalNutrients: {
    [key: string]: {
      label: string;
      quantity: number;
      unit: string;
    };
  };
  cuisineType?: string[];
  mealType?: string[];
  dishType?: string[];
};

export interface SavedRecipeProps {
  uri: string;
  image: string;
  label: string;
}
