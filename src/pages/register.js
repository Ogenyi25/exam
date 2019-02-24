import React from "react"
import Register from "../components/register"
import RegisterText from "../components/registerText"
import "../styles/login.css"
import "../styles/register.css"
import "../styles/animations.css"

import Layout from "../containers/layout"
import SEO from "../containers/seo"

const IndexPage = () => (
  <Layout>
    <div className="login-image-container">
    <div className="layer">
      <SEO title="Register" keywords={[`gatsby`, `application`, `react`]} />
      <div className="login-container bounceIn">
        <Register />
        <RegisterText />
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage