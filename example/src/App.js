import React from 'react'

import { GrowlComponent, useGrowl } from 'growl-jd'
import 'growl-jd/dist/index.css'

const App = () => {
  const [active, setActive] = useGrowl()
  return (
    <div>
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

export default App
