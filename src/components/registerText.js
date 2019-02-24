import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import { withStyles } from "@material-ui/core/styles"
import CardContent from "@material-ui/core/CardContent"

const styles = {
  card: {
    minWidth: 275,
  },
}

function SimpleCard(props) {

  return (
    <div className="register-text-container">
      <CardContent>
        <h2>
          Welcome
        </h2>
        <p>
          This is to a start of an awesome journey to greatness... Great things starts little
        </p>
        <div className="register-account" >
          <h4>Already have an account?</h4>
          <Link to="/login" >
            <p className="register-button" > Login </p>
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
