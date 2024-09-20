import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import SavedRecipesPage from "./pages/SavedRecipesPage";
import AddRecipePage from "./pages/AddRecipePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search/:query",
    element: <SearchResultsPage />,
  },
  {
    path: "/recipe/:recipeId",
    element: <RecipeDetailPage />,
  },
  {
    path: "/saved-recipes",
    element: <SavedRecipesPage />,
  },
  {
    path: "/add-recipe",
    element: <AddRecipePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
