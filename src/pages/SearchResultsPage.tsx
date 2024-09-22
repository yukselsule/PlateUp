import { useSelector } from "react-redux";

import { selectRecipes } from "../slices/recipesSlice";

import RecipeCard from "../components/RecipeCard";

const SearchResultsPage = () => {
  const recipes = useSelector(selectRecipes);

  return (
    <div>
      {recipes?.map((recipe) => (
        <RecipeCard key={recipe.uri} recipe={recipe} />
      ))}
    </div>
  );
};

export default SearchResultsPage;
