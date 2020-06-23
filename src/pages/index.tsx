import React, { useState, useEffect } from "react"
import styled from "styled-components"
import "../index.css"
import Gallery from "../components/Gallery"
import { colors } from "../colors"

const IndexPage = () => {
  return (
    <Container>
      <Title>
        EADE <br /> HEMINGWAY
      </Title>

      <Gallery />
    </Container>
  )
}

const Title = styled.p`
  font-family: Major Mono;
  color: ${colors.orange};
  font-size: 50px;
  margin: 0;
  padding: 50px;
`

const Container = styled.div`
  max-width: 100%;
  position: relative;
  background: #e2e2e1;
  height: 100%;
`

export default IndexPage
