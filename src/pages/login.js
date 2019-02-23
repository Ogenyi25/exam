import React from "react"
import Layout from "../containers/layout"
import { Link } from "gatsby"
import SEO from "../containers/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Login" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
