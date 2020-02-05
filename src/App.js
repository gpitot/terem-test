import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Album from "./components/Album";
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


        <Album
          url={"http://demo3136867.mockable.io/carousel"}
          query={query}
          title={"Popular around you"}
          type={"carousel"}
        />

        <Album
          url={"http://demo3136867.mockable.io/featured"}
          query={query}
          title={"Featured"}
          type={"gallery"}
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
