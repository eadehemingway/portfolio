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
  width: 250px;
  height: 150px;
  padding: 20px;
  border: 1px solid ${colors.orange};
  @media (max-width: 400px) {
    width: 200px;
    height: 120px;
  }
`
const Img = styled.img`
  width: 250px;
  height: 150px;
  @media (max-width: 400px) {
    width: 200px;
    height: 120px;
  }
`
