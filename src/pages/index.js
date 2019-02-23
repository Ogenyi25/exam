import React from "react"
import Login from "../components/login"
import LoginText from "../components/loginText"
import "../styles/login.css"
import "../styles/animations.css"

import Layout from "../containers/layout"
import SEO from "../containers/seo"

const IndexPage = () => (
  <Layout>
    <div className="login-image-container">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="login-container">
        <LoginText />
        <Login />
      </div>
    </div>
  </Layout>
)

export default IndexPage
