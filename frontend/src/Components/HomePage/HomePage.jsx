
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "./HomePage.css"
import {fetchProducts} from "../../Helper/ProductsHelper/ProductsHelper"

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchProducts();
        setProducts(result);
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
      <div>
        <div className='gridHomePage'>
          {products.map((producto) => (
            <ProductCard producto={producto} key={producto._id} />
          ))}
        </div>
      </div>
    )
  );
};
export default HomePage