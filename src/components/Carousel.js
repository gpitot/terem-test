import React from "react";
import styled from "styled-components";
import { useLoadData } from "../hooks/useLoadData";
import { filter } from "../utils/filter";
import Tile from "./Tile";
import { SectionTitle } from "../shared-styles/SectionTitle";

const Carousel = ({ places }) => {
  return (
    <Outer>
      <TileAlbum>
        {places.map(place => {
          const { title } = place;
          return <Tile key={title} {...place} />;
        })}
      </TileAlbum>
      <Arrows>
        <Arrow />
        <Arrow />
      </Arrows>
    </Outer>
  );
};

const Outer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const TileAlbum = styled.div`
  display: flex;
`;

const Arrows = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: black;
`;

export default Carousel;
