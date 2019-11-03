import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import LandingPageImage from "../components/landing-page-image"
import SEO from "../components/seo"
import BackgroundSection from '../components/background-section'
// TODO:
// - Add plugin responsible for styling
// - Add hover to header
// - Add section STORY
// - Add section PROCESS
// - Add section TECHNOLOGIES
// - Add section PROJECTS
// - Add section CONTACT
// - Add footer
// - Make PWA
// - Make mobile version
// - Audit with lighthouse
// - Optimize SEO
const IndexPage = () => (
  <Layout>
    <BackgroundSection>
      <div
        style={{
          height: `100%`,
          lineHeigh: `100vh`,
          textAlign: `center`,
        }}
      >
      </div>
    </BackgroundSection>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <LandingPageImage />
    </div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
