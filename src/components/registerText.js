import React from "react"
import { Link } from 'gatsby'


function RegisterText(props) {
  return (
    <div className="register-text-container">
      <div>
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
      </div>
    </div>
  )
}

export default RegisterText

