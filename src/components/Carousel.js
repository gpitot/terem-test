import React, { useRef } from "react";
import styled from "styled-components";
import Tile from "./Tile";

const Carousel = ({ places }) => {
  const albumEl = useRef(null);

  const slide = direction => {
    const sizeOfTile = 320;
    const nextScrollLeft = albumEl.current.scrollLeft + direction * sizeOfTile;
    albumEl.current.scrollTo({
      left: nextScrollLeft,
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Outer>
      <AlbumOuter ref={albumEl}>
        <TileAlbum>
          {places.map(place => {
            const { title } = place;
            return <Tile key={title} {...place} />;
          })}
        </TileAlbum>
      </AlbumOuter>

      <Arrows>
        <Arrow
          onClick={() => {
            slide(-1);
          }}
        />
        <Arrow
          onClick={() => {
            slide(1);
          }}
        />
      </Arrows>
    </Outer>
  );
};

const Outer = styled.div`
  width: 100%;
  position: relative;
`;

const AlbumOuter = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
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
