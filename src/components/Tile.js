import React from "react";
import styled from "styled-components";

const Tile = ({ title, img, location }) => {
  return (
    <TileArea>
      <Image src={img} />
      <Title>{title}</Title>
      <Location>{location}</Location>
    </TileArea>
  );
};
const TileArea = styled.div`
  flex-basis: 300px;
  flex-shrink: 0;
  flex-grow: 0;
  margin: 10px;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
`;
const Title = styled.h4``;
const Location = styled.p``;

export default Tile;
