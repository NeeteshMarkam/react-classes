import React, { useState } from 'react'
import UserInput from './components/UserInput'

const App = () => {
  const [Users, setUsers] = useState([])
  return (
    <div>
      <UserInput></UserInput>
    </div>
  )
}

export default App