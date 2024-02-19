import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Content from './components/content/Content'
import Menu from './components/header/Menu'
import Hero from './components/content/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Menu />
      <Hero />
      <Content />
    </div>
  )
}

export default App
