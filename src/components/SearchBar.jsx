import React from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch, onClick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.elements.searchImg.value;
    if (search.trim() === "") {
      onClick();
      return;
    }
    onSearch(search);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchImg"
          placeholder="Search images and photos"
          autoComplete="off"
          className={css.searchBar}
        />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
