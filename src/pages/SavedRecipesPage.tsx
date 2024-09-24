import { useEffect, useState } from "react";

import { useLocalStorageState } from "../hooks/hooks";
import { SavedRecipeProps } from "../types/types";

import RecipeCard from "../components/RecipeCard";

const SavedRecipesPage = () => {
  const [savedRecipes, setSavedRecipes] = useLocalStorageState(
    [],
    "savedRecipes"
  );
  const [recipes, setRecipes] = useState<SavedRecipeProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRecipes(savedRecipes);
    setLoading(false);
  }, [savedRecipes]);

  function handleDelete(
    e: React.MouseEvent<HTMLButtonElement>,
    recipeUri: string
  ) {
    e.preventDefault();
    const newSavedRecipes = savedRecipes.filter(
      (savedRecipe: SavedRecipeProps) => savedRecipe.uri !== recipeUri
    );
    setSavedRecipes(newSavedRecipes);
  }

  if (loading) {
    return <div>Loading recipes...</div>;
  }

  return (
    <div>
      <h1>Saved Recipes</h1>
      {recipes.length === 0 ? (
        <p>No saved recipes found.</p>
      ) : (
        <ul>
          {recipes.map((recipe: SavedRecipeProps, i: number) => (
            <li key={i}>
              <RecipeCard recipe={recipe} />
              <button
                type="button"
                onClick={(e) => handleDelete(e, recipe.uri)}
              >
                -
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedRecipesPage;
