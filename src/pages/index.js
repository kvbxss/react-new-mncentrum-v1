import React, {useState} from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"
import Email from "../components/Email"
import Sidebar from "../components/sidebar"


const IndexPage = () => {
  const[isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  };
return(
  <>
  <Layout>
    <Seo title="Home" />
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Hero />
    <Cards heading="Małe co nieco o nas"/>
    <Testimonials />
    <Email />
  </Layout>
  </>
)
}

export default IndexPage
