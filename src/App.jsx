import { useState } from 'react'
import './App.css'
import QuoteWrapper from './components/QuoteWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full min-h-screen bg-gradient-to-tr from-[#152046] to-[#113e67] flex justify-center md:items-center'>
        <QuoteWrapper />
      </div>
    </>
  )
}

export default App
