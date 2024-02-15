import { useState } from 'react'
import './App.css'

import Access from './components/Access';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='dashboard'>
        <Access />
      </div>
    </>
  )
}

export default App
