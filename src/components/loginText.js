import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import { withStyles } from "@material-ui/core/styles"
import CardContent from "@material-ui/core/CardContent"

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}

function SimpleCard(props) {
  return (
    <div className="login-text-container">
      <CardContent>
        <h2>
          Welcome Back
        </h2>
        <p>
          Continue your journey to success
        </p>
        <div className="register-account" >
          <h4>Don't have an account?</h4>
          <Link to="/register" >
            <p className="register-button" > Register </p>
          </Link>
        </div>
      </CardContent>
    </div>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard)
