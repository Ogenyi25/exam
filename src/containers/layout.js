import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <div className="main-content">
      {children}
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
