
import React from "react"
import Layout from "../containers/layout"
import { Link } from "gatsby"
import SEO from "../containers/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/login">Login</Link>
  </Layout>
)

export default SecondPage
