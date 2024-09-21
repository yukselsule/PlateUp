import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../hooks/hooks";
import { setCategory, setQuery } from "../slices/searchQuerySlice";
import { getRecipes } from "../slices/recipesSlice";

const categories = [
  "All",
  "Beef",
  "Breakfast",
  "Chicken",
  "Dessert",
  "Goat",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
];

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (input.trim()) {
      dispatch(setQuery(input));
      dispatch(setCategory(selectedCategory));

      dispatch(getRecipes(input));
      navigate(`/search/${input}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter meal name..."
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
