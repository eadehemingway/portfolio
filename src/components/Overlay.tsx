import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { colors } from "../colors"

export const Overlay = ({ data }) => {
  const { title, link, githubLink } = data
  return (
    <Container>
      <Title>{title}</Title>
      <LinkWrapper>
        {link && (
          <OverlayLink href={link} target="_blank">
            visit website
          </OverlayLink>
        )}
        {githubLink && (
          <OverlayLink href={githubLink} target="_blank">
            visit github repo
          </OverlayLink>
        )}
      </LinkWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: hidden;
  * {
    display: none;
  }
  &:hover {
    display: block;
    background: white;
    opacity: 0.9;
    * {
      display: block;
    }
  }
`

const OverlayLink = styled.a`
  font-family: Major Mono;
  color: black;
  text-decoration: none;
  width: fit-content;
  margin-left: 20px;
  padding-bottom: 5px;
  margin-bottom: 5px;
  font-size: 11px;

  &:hover {
    border-bottom: 1px solid grey;
  }
`
const Title = styled.p`
  font-family: Major Mono;
  color: brown;
  text-decoration: none;
  width: fit-content;
  margin: 20px;
  padding-bottom: 10px;
  font-size: 18px;
  cursor: default;
`

const LinkWrapper = styled.div`
  position: absolute;
  bottom: 10px;
`
