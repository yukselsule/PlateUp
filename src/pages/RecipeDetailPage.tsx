import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  useAppDispatch,
  useAppSelector,
  useLocalStorageState,
} from "../hooks/hooks";
import { getRecipeById, selectSelectedRecipe } from "../slices/recipesSlice";
import { SavedRecipeProps } from "../types/types";

const safeQuantity = (quantity: number | undefined, yieldValue: number) => {
  return quantity ? (quantity / yieldValue).toFixed(2) : "0.00";
};

const RecipeDetailPage = () => {
  const { recipeId } = useParams();
  const dispatch = useAppDispatch();
  const recipe = useAppSelector(selectSelectedRecipe);
  const [loading, setLoading] = useState(true);
  const [savedRecipes, setSavedRecipes] = useLocalStorageState(
    [],
    "savedRecipes"
  );

  useEffect(() => {
    if (recipeId) {
      dispatch(getRecipeById(recipeId))
        .unwrap()
        .finally(() => setLoading(false));
    }
  }, [dispatch, recipeId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const {
    ENERC_KCAL,
    FAT,
    FASAT,
    FAMS,
    FAPU,
    FATRN,
    CHOCDF,
    SUGAR,
    FIBTG,
    PROCNT,
    NA,
    CHOLE,
    K,
  } = recipe.totalNutrients;
  const yieldValue = recipe?.yield || 1;

  function handleSaveRecipe() {
    const existingRecipe = savedRecipes.find(
      (savedRecipe: SavedRecipeProps) => savedRecipe.uri === recipe?.uri
    );

    if (existingRecipe) return;

    const newSavedRecipes = [
      ...savedRecipes,
      { uri: recipe?.uri, label: recipe?.label, image: recipe?.image },
    ];
    setSavedRecipes(newSavedRecipes);
  }

  return (
    <div>
      <div>
        <h1>{recipe.label}</h1>{" "}
        <span>
          ( {`${yieldValue} ${yieldValue === 1 ? "serving" : "servings"}`} )
        </span>
      </div>
      <img src={recipe.image} alt={recipe.label} />
      <button onClick={handleSaveRecipe}>
        <ion-icon name="bookmark-outline"></ion-icon>
      </button>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredientLines.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
      <h3>Nutritional Information</h3>
      <ul>
        <li>
          Energy: {safeQuantity(ENERC_KCAL?.quantity, yieldValue)}{" "}
          {ENERC_KCAL?.unit}
        </li>
        <li>
          Fat: {safeQuantity(FAT?.quantity, yieldValue)} {FAT?.unit}
          <ul>
            <li>
              Saturated Fat: {safeQuantity(FASAT?.quantity, yieldValue)}{" "}
              {FASAT?.unit}
            </li>
            <li>
              Trans Fat: {safeQuantity(FATRN?.quantity, yieldValue)}{" "}
              {FATRN?.unit}
            </li>
            <li>
              Monounsaturated Fat: {safeQuantity(FAMS?.quantity, yieldValue)}{" "}
              {FAMS?.unit}
            </li>
            <li>
              Polyunsaturated Fat: {safeQuantity(FAPU?.quantity, yieldValue)}{" "}
              {FAPU?.unit}
            </li>
          </ul>
        </li>
        <li>
          Carbs: {safeQuantity(CHOCDF?.quantity, yieldValue)} {CHOCDF?.unit}
          <ul>
            <li>
              Sugar: {safeQuantity(SUGAR?.quantity, yieldValue)} {SUGAR?.unit}
            </li>
            <li>
              Fiber: {safeQuantity(FIBTG?.quantity, yieldValue)} {FIBTG?.unit}
            </li>
          </ul>
        </li>
        <li>
          Protein: {safeQuantity(PROCNT?.quantity, yieldValue)} {PROCNT?.unit}
        </li>
        <li>
          Sodyum: {safeQuantity(NA?.quantity, yieldValue)} {NA?.unit}
        </li>
        <li>
          Cholesterol: {safeQuantity(CHOLE?.quantity, yieldValue)} {CHOLE?.unit}
        </li>
        <li>
          Potassium: {safeQuantity(K?.quantity, yieldValue)} {K?.unit}
        </li>
      </ul>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer">
        Full recipe details
      </a>
    </div>
  );
};

export default RecipeDetailPage;
