import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Tile = ({ visible, title, img, location }) => {
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    const imagePreload = new Image();
    imagePreload.onload = () => {
      setLoadingImage(false);
    };
    imagePreload.src = img;
  }, []);

  return (
    <TileArea visible={visible}>
      {loadingImage ? <LoadingBlock as="div" /> : <ImageBlock src={img} />}

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
  display: ${props => (props.visible ? "block" : "none")};
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ImageBlock = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  opacity: 0;
  animation-name: ${FadeIn};
  animation-delay: 50ms;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
`;
const LoadingBlock = styled(ImageBlock)`
  background: gray;
`;
const Title = styled.h4``;
const Location = styled.p``;

export default Tile;
