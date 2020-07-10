import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Tile } from "./Tile"
import Tabs from "./Tabs"
import { colors } from "../colors"
import { dataViz, ecomList, playfulList } from "./chartList"

export enum Tab {
  dataViz = "data-viz",
  commercial = "commercial",
  playful = "playful",
}

export default function Gallery() {
  const [tab, setTab] = useState<Tab>(Tab.dataViz)
  const [galleryList, setGalleryList] = useState(dataViz)

  useEffect(() => {
    const galleryList = getGalleryList(tab)
    setGalleryList(galleryList)
  }, [tab])

  function getGalleryList(tab: Tab) {
    switch (tab) {
      case Tab.dataViz:
        return dataViz
      case Tab.commercial:
        return ecomList
      case Tab.playful:
        return playfulList
      default:
        return []
    }
  }

  return (
    <GalleryGrid>
      <Title>
        EADE <br /> HEMINGWAY
      </Title>
      <Tabs setTab={setTab} tab={tab} />
      {galleryList.map((d, i) => (
        <Tile key={i} data={d} />
      ))}
    </GalleryGrid>
  )
}
const Title = styled.p`
  font-family: Major Mono;
  color: ${colors.orange};
  font-size: 50px;
  width: 100%;
  margin: 0;
  padding: 50px;

  grid-column-start: 1;
  grid-column-end: 4;
  align-self: start;

  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  @media (max-width: 450px) {
    grid-column-start: 1;
    grid-column-end: 2;
    font-size: 30px;
    padding-left: 0px;
    padding-right: 0px;
  }
`

const GalleryGrid = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-row: auto;
  margin: auto;
  padding-bottom: 100px;
  column-gap: 30px;
  row-gap: 30px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    justify-items: flex-start;
  }
`
