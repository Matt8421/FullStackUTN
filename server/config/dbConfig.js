/* Connexion con MONGODB */
const mongoose = require('mongoose')

const CONNECTION_STRING = process.env.CONNECTION_STRING
console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING + 'proyectoFinalFullStack', {
    useNewUrlParser: true,
})
.then(() =>{
    console.log('conexion exitosa')
})
.catch((err) => {
    console.error(err)
})

module.exports = mongoose
