import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NavBarWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  > li {
    flex: 1;
  }
`

const NavBar = () => (
  <NavBarWrapper>
     <li><Link to="/about/">About</Link></li>
     <li><Link to="/work/">Work</Link></li>
     <li><Link to="/news/">News</Link></li>
     <li><Link to="/contact/">Contact</Link></li>
  </NavBarWrapper>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>MINOFMEER</h1>
    <h2>is online</h2>
    <NavBar />
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
