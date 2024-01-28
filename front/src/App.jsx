import './App.css'
import {Routes,Route} from "react-router-dom"

import Login from './views/Login'
import Home from './views/Home'
import Clientes from './views/Clientes'
import CardClient from './components/CardClient.'


function App() {
  

  return (
    <Routes>
      <Route exact path='/' element={<Login />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/clientes' element={<Clientes />}/>
      <Route path="/clientes/:clientId" element={<CardClient />} />

      </Routes>
  )
}

export default App
