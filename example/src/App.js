import React, { Component } from "react"

import { isEmail, isNumber, lsTest, isObject, sum } from "common-utils"

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

          <tr>
            <td>isObject() </td>
            <td>{isObject({ a: "b" }) ? "True" : "False"}</td>
          </tr>

          <tr>
            <td>sum([10, 20]), sum(['10', '20'])</td>
            <td>
              {sum([10, 20])}, {sum(["10", "20"])}
            </td>
          </tr>
        </table>
      </div>
    )
  }
}
