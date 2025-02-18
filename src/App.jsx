import { useState } from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='App'>
          <Header/>
          <ItemListContainer greeting="¡Bienvenido a nuestra tienda!"/>
          <Main/>
          <Footer/>
      </div>
  )
}

export default App
