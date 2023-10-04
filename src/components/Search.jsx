import React from "react";
import "./Search.css";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  return (
    <section className="search-input">
      <div className="search-input">
        <input type="search" placeholder="Search" />
        <span className="search-icon">
          <BsSearch />
        </span>
      </div>
    </section>
  );
};

export default Search;
