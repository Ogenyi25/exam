import React from "react"
import { Link } from 'gatsby'


function LoginText(props) {
  return (
    <div className="login-text-container">
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
    </div>
  )
}

export default LoginText
