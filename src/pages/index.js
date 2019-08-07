import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const NavBar = () => (
  <ul>
    <li><Link to="/about/">About</Link></li>
    <li><Link to="/work/">Work</Link></li>
    <li><Link to="/news/">News</Link></li>
    <li><Link to="/contact/">Contact</Link></li>
  </ul>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>MINOFMEER</h1>
    <h2>is online</h2>
    <NavBar />
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
