import React from 'react'
import "./NavBar.css"
import SearchButton from '../SearchButton/SearchButton'
import { BrowserRouter, Route, Routes,Link,NavLink } from 'react-router-dom'


const NavBar = () => {
return (
    <>
        <div className="navBar marginTop">
            <div className='navBarLeft'>
                <i className="bi bi-apple"></i>
                <span className='appleStore'>Apple Store</span>
            </div>
            <div>
                <SearchButton placeholder= "Search Goods ..."/>
            </div>
            <div >
                <nav className='navBar navBarWidth'>
                    <div>
                        <NavLink className="textDecorationNone colorPrincipal" to ="/contact">Contact</NavLink>
                    </div>
                    <div  className='navBarMarginRight'>
                        <NavLink to ="/cart"><i className="bi bi-cart colorPrincipal"></i></NavLink>
                    </div>
                    <div className='navBarHome'>
                        <NavLink to ="/"><i className="bi bi-house-door-fill colorPrincipal"></i></NavLink>
                    </div>
                    
                </nav>
            </div>
        </div>
    </>
)
}
export default NavBar




