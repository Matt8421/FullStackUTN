
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3040/api/products");
      if (!response.ok) {
        throw new Error("Error al obtener los productos");
      }
      const result = await response.json();
      return result.products;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const GetProductById = async (pid) => {
    let UrlGetProductById = `http://localhost:3040/api/products/${pid}`;
    console.log(UrlGetProductById)
    try {
      const response = await fetch(UrlGetProductById);
      
      if (!response.ok) {
        throw new Error("Error al obtener los productos");
      }
      const result = await response.json();
      console.log(result)
      return result.product;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

export  {fetchProducts,GetProductById}
