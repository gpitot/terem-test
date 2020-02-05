import React from "react";
import styled from "styled-components";
import Tile from "./Tile";

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
