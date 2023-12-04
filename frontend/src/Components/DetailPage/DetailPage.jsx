import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./DetailPage.css"
import { GetProductById } from '../../Helper/ProductsHelper/ProductsHelper'

const DetailPage = () => {
    const {pid} = useParams()
    console.log(pid)
    const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await GetProductById(pid);
      setProduct(result);
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

return (
  loading ? (
      <div>
        Cargando...
      </div>
    ) : (
        <div className='detailPage contenedorCard fondoContact'>
        <h1 className='fondoContact'>{product.nombre}</h1>
        <h2 className='fondoContact'>${product.precio}</h2>
        <p className='fondoContact marginDescripcion'>Descripcion: {product.descripcion}</p>
        
    </div>
    )
)
}

export default DetailPage
