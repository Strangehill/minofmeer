import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsPage = () => (
  <Layout>
    <SEO title="News Page" />
    <h1>Hi from the News page</h1>
    <p>Welcome to the news page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NewsPage
