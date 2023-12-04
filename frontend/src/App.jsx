import React from 'react'
import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import {DetailPage,HomePage,Cartpage,Contact} from './Components'
import {Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'




const App = () => {
    
    return (
      <>
          <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/detail/:pid' element={<DetailPage/>}/>
            <Route path='/cart' element={<Cartpage/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
        <Footer/> 
      </>
    )
}

export default App



