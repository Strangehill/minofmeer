import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import bullet from "../images/list-item-square.svg"
import monogram from "../images/monogram.svg"

const NavBarWrapper = styled.ul`
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 800;
  margin-left: 0;
  margin-bottom: 0;
  justify-content: space-between;
  list-style-image: url(${bullet});
`

const NavBarLink = styled(Link)`
  color: hsla(0, 0%, 0%, 0.8);
  text-decoration: none;
`

const NavBar = () => (
  <NavBarWrapper>
     <li><NavBarLink to="/about/">    About   </NavBarLink></li>
     <li><NavBarLink to="/work/">     Work    </NavBarLink></li>
     <li><NavBarLink to="/news/">     News    </NavBarLink></li>
     <li><NavBarLink to="/contact/">  Contact </NavBarLink></li>
  </NavBarWrapper>
)

const H1 = styled.h1`
  background-color: #336699;
  display: flex;
  font-size: 4.5rem;
  justify-content: space-evenly;
  /* letter-spacing: 0.3em; */ // negative value might be the goal, but doesn't apply evenly across the span elements
  /* font-stretch: semi-condensed; */ // doesn't work with -apple-system as defined in layout.css, but perhaps with a different font-face to be used...
  margin-bottom: 0;
  padding: 0.1em 0.2em;
  > span:nth-child(-n+3) {
    font-weight: 100;
  }
  > span:nth-child(n+4) {
    font-weight: 900;
  }
`

const H2 = styled.h2`
  display: flex;
  justify-content: flex-end;
  font-weight: 800;
`

const Catalogue = styled(Link)`
  float: right;
  color: black;
  font-weight: 900;
  font-size: 0.8em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  letter-spacing: -0.07em;
  text-decoration: none;
  border-bottom: 2px solid #336699;
`

const InfoBox = styled.div`
  display: flex;
  font-size: 0.6em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  > img {
    height: 3.5em;
    margin-right: 1.5em;
  }
  > div > div:nth-child(n+2) { 
    font-weight: 800;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1>
      <span>M</span>
      <span>I</span>
      <span>N</span>
      <span>O</span>
      <span>F</span>
      <span>M</span>
      <span>E</span>
      <span>E</span>
      <span>R</span>
    </H1>
    <H2>is online</H2>
    <NavBar />
    <p>Now go build something great.</p>
    <Catalogue to="#">Download Catalogue</Catalogue>
    <InfoBox>
      <img src={monogram} alt="" />
      <div>
        <div>
          <span>MIN</span>
          <span>OFMEER</span>
          <span> design studio</span>
        </div>
        <div>Art Street. Taichung. Taiwan.</div>
        <div>+886 927 052 247</div>
        <div>24°11'16.2"N 120°35'20.3"E. Typhoon season</div>
      </div>
    </InfoBox>
    <img src={bullet} alt="" style={{width: '5em', float: 'right'}} />
    <img src={bullet} alt="" style={{width: 'auto'}} />
  </Layout>
)

export default IndexPage
