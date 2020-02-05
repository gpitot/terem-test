import React from "react";
import styled from "styled-components";
import { useLoadData } from "../hooks/useLoadData";
import { filter } from "../utils/filter";
import Tile from "./Tile";
import { SectionTitle } from "../shared-styles/SectionTitle";

const Gallery = ({ places }) => {
  return (
    <TileAlbum>
      {places.map(place => {
        const { title } = place;
        return <Tile key={title} {...place} />;
      })}
    </TileAlbum>
  );
};

const TileAlbum = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export default Gallery;
