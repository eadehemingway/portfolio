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
`
const Img = styled.img`
  width: 300px;
  height: 170px;
  padding: 20px;
  border: 1px solid ${colors.orange};

  @media (max-width: 768px) {
    width: 300px;
    margin: 0px;
  }
  @media (max-width: 400px) {
    width: 200px;
    margin: 0px;
    height: 120px;
  }
`
