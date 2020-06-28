import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { colors } from "../colors"
import { Tab } from "./Gallery"

export default function Tabs({ tab, setTab }) {
  const [isDesktop, setIsDesktop] = useState(true)
  useEffect(() => {
    const isDesktop = window.innerWidth > 500
    setIsDesktop(isDesktop)
  }, [])
  const commercial = isDesktop ? "commercial" : `commer- cial`
  return (
    <TabWrapper>
      <TabItem
        onClick={() => setTab(Tab.dataViz)}
        focused={tab === Tab.dataViz}
      >
        data viz
      </TabItem>
      <TabItem
        onClick={() => setTab(Tab.commercial)}
        focused={tab === Tab.commercial}
      >
        {commercial}
      </TabItem>
      <TabItem
        onClick={() => setTab(Tab.playful)}
        focused={tab === Tab.playful}
      >
        playful
      </TabItem>
    </TabWrapper>
  )
}

const TabWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 4;
  align-self: start;

  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  @media (max-width: 400px) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`

const TabItem = styled.p`
  font-family: Major Mono;
  color: ${colors.orange};
  margin: 0;
  border-bottom: ${({ focused }) => (focused ? "2px solid brown" : null)};
  cursor: pointer;
  padding-bottom: 20px;
  margin-right: 40px;
  @media (max-width: 400px) {
    margin-right: 20px;
    line-height: 20px;
    font-size: 14px;
    padding-bottom: 10px;
  }
`
