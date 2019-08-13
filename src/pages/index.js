import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import bullet from "../images/list-item-square.svg"
import monogram from "../images/monogram.svg"

const NavBarWrapper = styled.ul`
  display: flex;
  margin-left: 0;
  margin-bottom: 0;
  justify-content: space-between;
  list-style-image: url(${bullet});
`

const NavBarLink = styled(Link)`
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
  justify-content: space-evenly;
  letter-spacing: 0.3em;
  margin-bottom: 0;
  padding: 0.2em;
  > span:first-child {
    font-weight: 100;
  }
  > span:nth-child(2) {
    font-weight: 900;
  }
`

const H2 = styled.h2`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
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
    <div>
      <img src={monogram} alt="" />
    </div>
    <img src={bullet} alt="" style={{width: '5em', float: 'right'}} />
    <img src={bullet} alt="" style={{width: 'auto'}} />
  </Layout>
)

export default IndexPage
