# common-utils

> Help build your app faster

[![NPM](https://img.shields.io/npm/v/@asepsetyawan/js-common-utils.svg)](https://www.npmjs.com/package/@asepsetyawan/js-common-utils) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/asepsetyawan/common-utils.svg)](https://greenkeeper.io/)

## Install

```bash
npm install --save common-utils
```

## Usage

```jsx
import React, { Component } from 'react'

import { isEmail } from 'common-utils'

class Example extends Component {
  render () {
    return (
      {isEmail("asepsetyawan9@gmail.com") ? "Valid Email" : "Invalid Email"}
    )
  }
}
```

## Utils

| `Utils`          | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| `isEmail`        | Validate valid email, isEmail()                               |
| `isNumber`       | Validate number isNumber()                                    |
| `formatCurrency` | Format number as currency formatCurrency(2000) - result 2.000 |
| `isObject`       | Return boolean {'a': 'string'}                                |
| `sum`            | return total number in array sum([10, 20]) - result 30        |

## License

MIT © [asepsetyawan](https://github.com/asepsetyawan)
