import React from "react";
import "./Search.css";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <section className="laundry-search-input-container">
      <div className="laundry-search-input">
        <span className="laundry-search-icon">
          <BsSearch />
        </span>
        <input
          type="search"
          className="laundry-search-placeholder"
          placeholder="Search"
        />
      </div>
    </section>
  );
};

export default Search;
