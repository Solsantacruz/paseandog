import './App.css'
import {Routes,Route} from "react-router-dom"

import Login from './views/Login'
import Home from './views/Home'


function App() {
  

  return (
    <Routes>
      <Route exact path='/' element={<Login />}/>
      <Route path='/home' element={<Home />}/>
      </Routes>
  )
}

export default App
