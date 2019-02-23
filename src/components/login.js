import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import config from "../config"

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
})

class OutlinedTextFields extends React.Component {
  state = {
    name: "",
    age: "",
    multiline: "Controlled",
    currency: "EUR",
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const { classes } = this.props

    return (
      <div className="login bounceIn">
        <div>Sign in to {config.siteTitle}</div>
        <form>
          <div>
            <TextField
              required
              id="outlined-name"
              label="Username"
              className={classes.textField}
              value={this.state.name}
              fullWidth
              onChange={this.handleChange("name")}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Password"
              fullWidth
              placeholder="password"
              className={classes.textField}
              onChange={this.handleChange("password")}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <Button
              variant="contained"
              className={classes.button}
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(OutlinedTextFields)
