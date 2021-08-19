import * as React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"
import { BrowserRouter as Router } from "react-router-dom";
import Email from "../components/Email"


const IndexPage = () => (
  <Router>
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Cards heading="Małe co nieco o nas"/>
    <Testimonials />
    <Email />
  </Layout>
  </Router>
)

export default IndexPage
