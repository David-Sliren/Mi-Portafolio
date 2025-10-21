import { useState } from 'react'
import Portafolio from './pages/Portafolio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Portafolio/>
    </>
  )
}

export default App
