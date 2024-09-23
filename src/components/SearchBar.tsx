import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../hooks/hooks";
import { setQuery } from "../slices/searchQuerySlice";
import { getRecipes } from "../slices/recipesSlice";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(setQuery(input));

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

      <button>Search</button>
    </form>
  );
};

export default SearchBar;
