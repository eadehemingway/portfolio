import React, { useState, useEffect } from "react"
import styled from "styled-components"
import levels from "./../images/levels.png"
import covid from "./../images/covid.png"
import women from "./../images/women.png"
import nationalism from "./../images/nationalism.png"
import diversity from "./../images/diversity.png"
import radar from "./../images/radar.png"
import cat from "./../images/cat.png"
import basics from "./../images/basics.png"
import { colors } from "../colors"

const Gallery = () => {
  return (
    <Container>
      <Img src={levels} />
      <Img src={covid} />
      <Img src={women} />
      <Img src={nationalism} />
      <Img src={diversity} />
      <Img src={radar} />
      <Img src={cat} />
      <Img src={basics} />
      <Img />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-around;
`
const Img = styled.img`
  width: 250px;
  padding: 20px;
  border: 1px solid ${colors.orange};
  margin: 30px;
`

export default Gallery
