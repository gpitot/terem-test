import React, { useEffect } from "react";
import styled from "styled-components";
import { useLoadData } from "../hooks/useLoadData";
import { filter } from "../utils/filter";
import Tile from "./Tile";
import { SectionTitle } from "../shared-styles/SectionTitle";

const Gallery = ({ query, url }) => {
  const [loading, data] = useLoadData(url);
  if (loading) return <h1>loading</h1>;

  const filteredData = filter(query, data);

  return (
    <GalleryArea>
      <SectionTitle>Gallery</SectionTitle>

      <TileGallery>
        {filteredData.map(place => {
          const { title } = place;

          return <Tile key={title} {...place} />;
        })}
      </TileGallery>
    </GalleryArea>
  );
};

const GalleryArea = styled.div``;
const TileGallery = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export default Gallery;
