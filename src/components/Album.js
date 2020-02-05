import React from "react";
import styled from "styled-components";
import { useLoadData } from "../hooks/useLoadData";
import { filter } from "../utils/filter";
import { SectionTitle } from "../shared-styles/SectionTitle";
import Gallery from "./Gallery";
import Carousel from "./Carousel";

const RenderAlbum = ({ type, filteredData }) => {
  switch (type) {
    case "gallery":
      return <Gallery places={filteredData} />;

    case "carousel":
      return <Carousel places={filteredData} />;

    default:
      return <Gallery places={filteredData} />;
  }
};

const Album = ({ title, query, url, type }) => {
  const [loading, data] = useLoadData(url);
  if (loading) return <h1>loading</h1>;

  const filteredData = filter(query, data);

  return (
    <AlbumArea>
      <SectionTitle>{title}</SectionTitle>

      <RenderAlbum type={type} filteredData={filteredData} />
    </AlbumArea>
  );
};

const AlbumArea = styled.div``;

export default Album;
