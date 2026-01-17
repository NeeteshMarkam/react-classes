import React, { useState } from 'react'
import FromHanding from './components/FromHanding'

const App = () => {

  const [num, setnum] = useState(0)
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setnum(num+1)
      }}>Increase</button>
      <button onClick={()=>{
        setnum(num-1)
      }}>decrease</button>
      
      <FromHanding></FromHanding>
    </div>
  )
}

export default App