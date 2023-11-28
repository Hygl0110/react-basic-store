import React from "react";
import SearchForm from "../../molecules/SearchForm/SearchForm";
import SearchResults from "../../molecules/SearchResults/SearchResults";

function Search(props) {
  return (
    <div className="search">
      <SearchForm {...props} />
      <SearchResults />
    </div>
  );
}

export default Search;
