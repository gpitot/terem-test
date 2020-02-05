import React from "react";
import styled from "styled-components";

const SearchBar = ({ query, setQuery }) => {
  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <SearchArea>
      <Search onChange={handleChange} type="text" value={query} />
    </SearchArea>
  );
};

const SearchArea = styled.div``;

const Search = styled.input``;

export default SearchBar;
