import React, { Component } from "react"
import { Input, Button } from "semantic-ui-react"

import config from "../config"

class RegisterComponent extends Component {
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
    return (
      <div className="login">
      <div>
        <form>
          <div>Join us at {config.siteTitle}.com</div>
          <div>
            <Input
              icon="users"
              iconPosition="left"
              placeholder="Full Name"
              required
              className="auth-input"
            />
          </div>
          <div>
            <Input
              icon="user"
              iconPosition="left"
              placeholder="Username"
              required
              className="auth-input"
            />
          </div>
          <div>
            <Input
              icon="mail"
              iconPosition="left"
              placeholder="Email"
              required
              className="auth-input"
            />
          </div>
          <div>
            <Input
              icon="key"
              iconPosition="left"
              placeholder="Username"
              required
              type="password"
              className="auth-input"
            />
          </div>
          <div>
            <Button
              // basic
              color="yellow"
              content="Join Us"
              icon="signup"
            />
          </div>
        </form>
        <footer className="auth-footer">
          © {new Date().getFullYear()}, Built with ❤️ by{" "}
          <a href="https://github.com/DevCAbuja">Facebook DevC Abuja</a>
        </footer>
      </div>
      </div>
    )
  }
}

export default RegisterComponent
