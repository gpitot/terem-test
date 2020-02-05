import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";

const DEFAULT_THEMES = {
  light: {
    background: "#fff"
  },
  dark: {}
};

const App = () => {
  const [theme, setTheme] = useState(DEFAULT_THEMES.light);

  const [query, setQuery] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <Article>
        <SearchBar query={query} setQuery={setQuery} />

        <Gallery
          url={"http://demo3136867.mockable.io/featured"}
          query={query}
        />
      </Article>
    </ThemeProvider>
  );
};

const Article = styled.article`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
  background: ${props => props.theme.background};
`;

export default App;
