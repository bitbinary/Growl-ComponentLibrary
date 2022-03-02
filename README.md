# growl-jd

> growl

[![NPM](https://img.shields.io/npm/v/growl-jd.svg)](https://www.npmjs.com/package/growl-jd) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save growl-jd 
// Not yet uploaded to npm
```

## Usage

```jsx
import React, { Component } from 'react'

import { GrowlComponent, useGrowl } from 'growl-jd'
import 'growl-jd/dist/index.css'

class Example extends Component {
  render() {
    const [active, setActive] = useGrowl()
    return (
      <div>
      // setActive functions accepts the state and the timeout value for the growl.
        <button onClick={() => void setActive(true, 1000)}>
          Clik here to activate the growl
        </button>
        <GrowlComponent
          onDismissed={() => setActive(false)}
          active={active}
          message='Hello World!'
        />
      </div>
    )
  }
}
```

## License

MIT © [bitbinary](https://github.com/bitbinary)
