import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Album from "./components/Album";
import SearchBar from "./components/SearchBar";

import "./shared-styles/index.css";

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
          url={"https://demo3136867.mockable.io/carousel"}
          query={query}
          title={"Popular around you"}
          type={"carousel"}
        />

        <Album
          url={"https://demo3136867.mockable.io/featured"}
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
  max-width: 1280px;
  margin: 50px auto;
  padding: 24px;
  box-shadow: 0 2px 2px 3px #0000002e;
  border-radius: 12px;
  background: ${props => props.theme.background};
`;

export default App;
