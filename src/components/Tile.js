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
      {loadingImage ? (
        <LoadingBlock />
      ) : (
        <ImageOuter>
          <ImageBlock src={img} />
        </ImageOuter>
      )}
      <Text>
        <Title>{title}</Title>
        <Location>{location}</Location>
      </Text>
    </TileArea>
  );
};

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ImageOuter = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const ImageBlock = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  animation-name: ${FadeIn};
  animation-delay: 750ms;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  transition: transform 300ms ease;
`;
const LoadingBlock = styled(ImageOuter)``;

const Text = styled.div`
  padding: 20px;
`;

const Title = styled.h4`
  color: #2d91b2;
  margin: 0;
  font-size: 14px;
`;
const Location = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: #851717;
`;

const TileArea = styled.div`
  flex-basis: 300px;
  flex-shrink: 0;
  flex-grow: 0;
  margin: 10px;
  display: ${props => (props.visible ? "block" : "none")};
  background: #eee;
  cursor: pointer;

  &:hover {
    ${ImageBlock} {
      transform: scale(1.1);
    }
  }
`;

export default Tile;
