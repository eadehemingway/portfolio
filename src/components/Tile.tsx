import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { colors } from "../colors"
import { Overlay } from "./Overlay"

export const Tile = ({ data }) => {
  return (
    <Wrapper>
      <Overlay data={data} />
      <Img src={data.img} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${colors.orange};
`
const Img = styled.img`
  width: 300px;
  height: 170px;
  margin: 20px;
`
