import { Link, NavLink } from "react-router-dom";

import SearchBar from "./SearchBar";

import logo from "../assets/plate-up-logo.png";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <SearchBar />

      <NavLink to="/add-recipe">
        <ion-icon name="add-outline"></ion-icon>
      </NavLink>

      <NavLink to="/saved-recipes">
        <ion-icon name="bookmark-outline"></ion-icon>
      </NavLink>
    </header>
  );
};

export default NavBar;
