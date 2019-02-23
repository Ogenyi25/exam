import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import { withStyles } from "@material-ui/core/styles"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

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
  const { classes } = props

  return (
    <div className="login-text-container">
      <CardContent>
        <Typography variant="h5" component="h2">
          Welcome
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          This is to a start of an awesome journey to greatness... Great things starts little
        </Typography>
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
