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
import vitals from "./../images/vitals.png"
import kiplot from "./../images/kiplot.png"
import ecom from "./../images/ecom.png"
import hims from "./../images/hims.png"
import { Tile } from "./Tile"
import Tabs from "./Tabs"
import { colors } from "../colors"

enum Tab {
  dataViz = "data-viz",
  other = "other",
}

export default function Gallery() {
  const [tab, setTab] = useState(Tab.dataViz)
  const dataViz = [
    {
      title: "GDP PPP per capita per country",
      img: levels,
      link: "https://ecstatic-visvesvaraya-25250c.netlify.app/",
      githubLink: "https://github.com/eadehemingway/levels",
    },
    {
      title: "Covid one year mortality calculator",
      img: covid,
      link: "https://covid-uins266koq-ew.a.run.app/",
      githubLink: "https://github.com/izaakrogan/covid",
    },
    {
      title: "Female heads of goverment worldwide",
      img: women,
      link: "",
      githubLink: "",
    },
    {
      title: "Rise of national populism in Europe",
      img: nationalism,
      link: "",
      githubLink: "",
    },
    {
      title: "Diversity monitor",
      img: diversity,
      link: "https://diversity-tracker-app.herokuapp.com/",
      githubLink: "https://github.com/eadehemingway/diversity-tracker",
    },
    {
      title: "Enter, exit, update codealong",
      img: radar,
      link: "",
      githubLink: "https://github.com/eadehemingway/d3-enter-exit-codealong",
    },
    {
      title: "Enter, exit, update workshop",
      img: cat,
      link: "",
      githubLink: "https://github.com/eadehemingway/d3-enter-exit-workshop",
    },
    {
      title: "Basic D3 graphs",
      img: basics,
      link: "",
      githubLink: "https://github.com/eadehemingway/d3-simple-charts",
    },
  ]
  const ecomList = [
    {
      title: "Vitals blog site",
      img: vitals,
      link: "https://yourdaye.com/",
      githubLink: "",
    },
    {
      title: "Daye ecommerce site",
      img: ecom,
      link: "https://ecommerce.yourdaye.com/",
      githubLink: "",
    },
    {
      title: "Kiplot",
      img: kiplot,
      link: "https://kiplot.com/",
      githubLink: "",
    },
    {
      title: "Hims ecommerce site",
      img: hims,
      link: "https://www.forhims.co.uk/",
      githubLink: "",
    },
  ]
  const galleryList = tab === Tab.dataViz ? dataViz : ecomList

  return (
    <Container>
      <GalleryContainer>
        <Tabs setTab={setTab} tab={tab} />
        <DummyDiv />
        <DummyDiv />
        {galleryList.map((d, i) => (
          <Tile key={i} data={d} />
        ))}
      </GalleryContainer>
    </Container>
  )
}

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-row: auto;
  margin: auto;
  column-gap: 30px;
  row-gap: 30px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`
const Container = styled.div`
  width: 80%;
  margin: auto;
`
const DummyDiv = styled.div`
  width: 340px;
`
