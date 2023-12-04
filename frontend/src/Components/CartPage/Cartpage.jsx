import React from 'react'
import { useCustomContext } from '../../Components/ContextProvider/ContextProvider'
import ProductCard from '../../Components/ProductCard/ProductCard'
import "./CartPage.css"

const Cartpage = () => {
    const {cart} =useCustomContext()
    console.log(cart)
    return (
        <div>
            <span className='cartPageFont'>Shopping Cart</span>
            <div className="gridCartPage">
                {cart.map(product =>(
                    <ProductCard  producto={product} key={product.id}/>
                ))}
                
            </div>
        </div>
    )
}

export default Cartpage