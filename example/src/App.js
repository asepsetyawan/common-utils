import React, { Component } from "react"

import { isEmail } from "common-utils"

export default class App extends Component {
  render() {
    return (
      <div>
        {isEmail("asepsetyawan9@gmail.com") ? "Valid Email" : "Invalid Email"}
      </div>
    )
  }
}
