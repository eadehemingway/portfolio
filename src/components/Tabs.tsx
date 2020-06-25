import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { colors } from "../colors"

enum Tab {
  dataViz = "data-viz",
  other = "other",
}

export default function Tabs({ tab, setTab }) {
  return (
    <TabWrapper>
      <TabItem
        onClick={() => setTab(Tab.dataViz)}
        focused={tab === Tab.dataViz}
      >
        data viz
      </TabItem>
      <TabItem onClick={() => setTab(Tab.other)} focused={tab === Tab.other}>
        other
      </TabItem>
    </TabWrapper>
  )
}

const TabWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
  width: 340px;
`

const TabItem = styled.p`
  font-family: Major Mono;
  color: ${colors.orange};
  margin: 0;
  border-bottom: ${({ focused }) => (focused ? "2px solid brown" : null)};
  cursor: pointer;
  padding-bottom: 20px;
  margin-right: 40px;
`
