import React, { useRef } from "react";
import styled from "styled-components";
import Tile from "./Tile";

import arrowImage from "../assets/images/arrow.png";

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
  left: -15px;
  width: calc(100% + 30px);
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  pointer-events: all;
  background-image: url(${arrowImage});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:last-child {
    transform: rotate(180deg);
  }
`;

export default Carousel;
