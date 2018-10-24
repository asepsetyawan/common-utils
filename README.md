# common-utils

> Help build your app faster

[![NPM](https://img.shields.io/npm/v/common-utils.svg)](https://www.npmjs.com/package/common-utils) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Greenkeeper badge](https://badges.greenkeeper.io/asepsetyawan/common-utils.svg)](https://greenkeeper.io/)

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

## License

MIT © [asepsetyawan](https://github.com/asepsetyawan)
