import React from "react";
import styled from "styled-components";

const SearchBar = ({ query, setQuery }) => {
  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <SearchArea>
      <Search onChange={handleChange} type="text" value={query} placeholder="Search for" />
    </SearchArea>
  );
};

const SearchArea = styled.div``;

const Search = styled.input`
    padding:12px 8px;
    width:100%;
    max-width:240px;
    font-size:16px;
`;

export default SearchBar;
