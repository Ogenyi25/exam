import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <div className="main-content">
      {children}
    </div>
    <footer className="footer">
      © {new Date().getFullYear()}, Built with ❤️ by{" "}
       <a href="https://github.com/DevCAbuja">Facebook DevC Abuja</a>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
