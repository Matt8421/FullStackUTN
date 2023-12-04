import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.css"

const ProductCard = ({producto}) => {

  return (

        <div className='contenedorCard fondoCard'>
        <img src={"http://localhost:3040/images/" + producto.thumbnail} alt="imagenes" className='tamañoImagen' />
        <h2 className='fondoCard'>{producto.nombre}</h2>
        <h3 className='fondoCard'>Precio: ${producto.precio}</h3>
        <Link to={"/detail/" + producto._id} className='fondoCard'> Ver Detalle</Link>
        <div className='fondoCard'><button className='comprarButton' onClick={() => addProductCart(producto._id)}>Comprar</button></div>
    </div>
  
  );
};

export default ProductCard