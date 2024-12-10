import { useState } from 'react'
import Banner from './components/Banner'
import Chapter from './components/Chapter'
import Sell from './components/Sell'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner />
      <Chapter />
      <Sell />
    </>
  )
}

export default App
