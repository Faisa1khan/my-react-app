import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Learn to design and code React apps</h1>
    <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">watch a vedio using this link</Link>
  </Layout>
)

export default IndexPage
