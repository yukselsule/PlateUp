import { useNavigate } from "react-router-dom";
import { Recipe } from "../types/recipeTypes";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const recipeUri = encodeURIComponent(recipe.uri);
  const navigate = useNavigate();

  function handleImageClick() {
    navigate(`/recipe/${recipeUri}`);
  }

  return (
    <div>
      <img onClick={handleImageClick} src={recipe.image} alt={recipe.label} />
      <h3>{recipe.label} </h3>
    </div>
  );
};

export default RecipeCard;
