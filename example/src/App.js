import React, { Component } from "react"

import { isEmail, isNumber, lsTest } from "common-utils"

export default class App extends Component {
  render() {
    return (
      <div>
        <table border="1">
          <th>Value</th>
          <th>Status</th>
          <tr>
            <td>asepsetyawan9@gmail.com</td>
            <td>
              {isEmail("asepsetyawan9@gmail.com")
                ? "Valid Email"
                : "Invalid Email"}
            </td>
          </tr>
          <tr>
            <td>45</td>
            <td>{isNumber(42) ? "Valid Number" : "Invalid Number"}</td>
          </tr>
          <tr>
            <td>LocalStorage Check</td>
            <td>
              {lsTest() ? "Support LocalStorage" : "LocalStorage Not Supported"}
            </td>
          </tr>
        </table>
      </div>
    )
  }
}
