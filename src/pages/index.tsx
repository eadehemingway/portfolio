import React, { useState, useEffect } from "react"
import styled from "styled-components"
import "../index.css"
import Gallery from "../components/Gallery"

const IndexPage = () => {
  return (
    <Container>
      <Gallery />
    </Container>
  )
}

const Container = styled.div`
  max-width: 100%;
  position: relative;
  background: #e2e2e1;
  height: 100%;
  min-height: 100vh;
`

export default IndexPage
