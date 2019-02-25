import React from "react"
import 'semantic-ui-css/semantic.min.css'

import Login from "../components/login"
import LoginText from "../components/loginText"
import "../styles/login.css"
import "../styles/animations.css"
import Layout from "../containers/layout"
import SEO from "../containers/seo"

const IndexPage = () => (
  <Layout>
    <div className="login-image-container">
    <div className="layer">
      <SEO title="Login" keywords={[`gatsby`, `application`, `react`]} />
      <div className="login-container bounce-in-left">
        <LoginText />
        <Login />
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage