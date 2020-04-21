import React from 'react'
import { Todo } from './components/'

export const App = () => {

  return (
    <div>
      <div className="guide">
        <h1>React hooks practice</h1>
        <h4>✅ useState</h4>
        <h4>useEffect</h4>
        <h4>useContext</h4>
        <hr/>
      </div>

      <Todo/>
    </div>
  )
}
