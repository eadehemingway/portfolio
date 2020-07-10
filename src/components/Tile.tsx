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
  height: 186px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 127, 80, 0.3);

  @media (max-width: 768px) {
    width: 250px;
    height: 150px;
    margin: 0px;
  }
  @media (max-width: 450px) {
    width: 100%;
    margin: 0px;
    height: auto;
  }
`
