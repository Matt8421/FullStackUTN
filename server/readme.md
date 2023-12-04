Este proyecto es una simulacion de un e-commerce simple para la venta de productos de Apple desarrollado con el stack MERN. Permite realizar operaciones CRUD (Create, Read, Update, Delete) para gestionar productos.

## Tecnologías Utilizadas

- **MongoDB:** Base de datos NoSQL para almacenar información sobre los productos.
- **Express.js:** Framework de backend para facilitar la creación de la API.
- **React.js:** Biblioteca de frontend para construir interfaces de usuario interactivas.
- **Node.js:** Entorno de ejecución para ejecutar el servidor del lado del servidor.


Para las funcionalidades de CRUD utilizamos a INSOMIA para realizar solicitudes HTTP a las APIS del server BackEnd, como GET, POST, PUT y DELETE con la URL base http://localhost:3040/


ENDPOINTS DISPONIBLES

GET : /api/products => devuelve todos los productos
POST : /api/products (body: products) => crea un nuevo producto