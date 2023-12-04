import React,{createContext, useContext, useState} from 'react'

const Context = createContext ()


const ContextProvider = ({children}) => {
    const products= [
        {
            id : 1 ,
            nombre: "MacBook Air",
            precio: 1429900,
            descripcion: "La más grande en peso ligero. La nueva MacBook Air de 15 pulgadas tiene una gran pantalla Liquid Retina con espacio de sobra para todo lo que te gusta hacer. Y el modelo de 13 pulgadas no tiene nada que envidiarle. Las dos vienen con los superpoderes del chip M2, tienen un rendimiento fuera de serie y ofrecen hasta 18 horas de batería.1 Todo en un diseño ultraportátil que te acompaña en todas tus aventuras.",
            thumbnail: "MacBookAir.jpg"
        },
        {
            id : 2 ,
            nombre: "MacBook Pro",
            precio: 899900,
            descripcion: "Gracias al nuevo chip M2, la MacBook Pro de 13 pulgadas es más poderosa que nunca. Ofrece hasta 20 horas de batería y un sistema de enfriamiento activo que mantiene un rendimiento increíble en el mismo diseño compacto de siempre.Con su espectacular pantalla Retina, cámara FaceTime HD y micrófonos con calidad de estudio, es nuestra laptop pro más portátil.",
            thumbnail: "NoteBookMcPro.jpg"
            
        },
        {
            id : 3 ,
            nombre: "Apple Mini Gaming",
            precio: 577500,
            descripcion: "La Mac mini es pequeña, pero cada vez viene mejor armada para no dejarse intimidar por proyectos gigantes. El chip M2 te permite realizar varias tareas a una velocidad vertiginosa. Y el M2 Pro aborda cargas de trabajo monumentales con una agilidad nunca antes vista, ya que por primera vez se integra un chip de nivel pro a una Mac mini. Además, su amplia variedad de puertos le da la versatilidad para conectarle lo que necesites. Tu computadora tendrá una actuación deslumbrante, sea cual sea el chip que elijas.",
            thumbnail: "AppleMiniGaming.jpg"
        },
        {
            id : 4 ,
            nombre: "Apple screen Studio Display",
            precio: 2815500,
            descripcion: "Una envolvente pantalla Retina 5K de 27 pulgadas con una cámara y un sistema de sonido impactantes.",
            thumbnail: "AppleScreen24.jpg"
        },
        {
            id : 5 ,
            nombre: "Apple Tv 4k",
            precio: 144900,
            descripcion: "El Apple TV 4K te ofrece Apple TV+, Apple Music, Apple Arcade y tus apps de streaming favoritas, con nuestra mejor calidad de imagen y sonido hasta ahora. Además, te brinda el rendimiento extraordinario del chip A15 Bionic, controles intuitivos y una interacción natural con los dispositivos y accesorios de tu casa inteligente. En resumen, es todo lo que te encanta de Apple en la pantalla más grande de tu casa.",
            thumbnail: "AppleTv4K.jpg"
        },
        {
            id : 6 ,
            nombre: "Ipad Pro",
            precio: 949990,
            descripcion: "Un rendimiento extraordinario, pantallas increíblemente avanzadas, conexión inalámbrica ultrarrápida, nuevas y poderosas funcionalidades con iPadOS 16 y un toque de magia para el Apple Pencil. El iPad en su máxima expresión.",
            thumbnail: "IpadPro.jpg"
        },
        {
            id : 7 ,
            nombre: "Ipad Pro 10",
            precio: 382990,
            descripcion: "El nuevo iPad enamora a primera vista. Tiene una pantalla Liquid Retina de 10.9 pulgadas con diseño de borde a borde perfecta para trabajar, darles forma a tus ideas y hacer videollamadas.1 Viene en cuatro colores que van a alegrar tus días. Y si lo combinas con los accesorios diseñados especialmente para el iPad, tus posibilidades son infinitas. Más poderoso, más bonito y más capaz. Más no se puede pedir",
            thumbnail: "IPadPro10.jpg"
        },
        {
            id : 8 ,
            nombre: "Apple AirPod Pro",
            precio: 129997,
            descripcion: "Los AirPods Pro se sometieron a un rediseño radical para alcanzar una calidad de audio todavía mejor. La Cancelación Activa de Ruido mejorada y el modo Ambiente adaptable reducen aún más el ruido exterior. El audio espacial lleva la experiencia del sonido inmersivo a un nivel mucho más personal. El control táctil ahora te permite ajustar el volumen con sólo deslizar. Y gracias a una mejora sustancial en la autonomía, ahora puedes disfrutar 6 horas de batería con una sola carga.",
            thumbnail: "AirPods.jpg"
        },
        {
            id : 9 ,
            nombre: "Apple Watch Ultra",
            precio: 623400,
            descripcion: "Llegó el Apple Watch más fuerte y equipado que existe. Con una caja de titanio dura como una roca, GPS de precisión y doble frecuencia, hasta 36 horas de batería1, conexión celular2 y tres correas optimizadas para quienes comen, viven y respiran aventura.",
            thumbnail: "AppleWatchUltra.jpg"
        },
        {
            id : 10 ,
            nombre: "Apple Watch Series 8",
            precio: 232999,
            descripcion: "Tu compañero ideal es aún más poderoso. Viene con un sensor de temperatura que ofrece información detallada sobre la salud de la mujer.1 Detección de Choques para que recibas asistencia ante una emergencia.2 Fases del Sueño que te ayuda a comprender tus hábitos al dormir. Y más opciones para estar en forma con la mejorada app Entrenamiento. Un futuro más saludable está a la vista.",
            thumbnail: "Apple Watch Series 8.jpg"
        },
        {
            id : 11 ,
            nombre: "Apple Watch SE",
            precio: 159404,
            descripcion: "Tres colores con mucho estilo. Poderosos sensores que te mantienen al día sobre tu salud y estado físico. Innovadoras funcionalidades de seguridad. Muchas formas de conectar con tu mundo. Y un procesador de doble núcleo que hace todo volando. El Apple Watch SE está en su mejor momento y está más a tu alcance que nunca.",
            thumbnail: "Apple Watch SE.jpg"
        },
        {
            id : 12 ,
            nombre: "Apple Watch Nike",
            precio: 429900,
            descripcion: "Nike Run Club en el Apple Watch. Nike Run Club te entrena, te conecta con una comunidad y te permite llevar un registro de tus rutinas. Al igual que tú, esta app mejora constantemente. Y gracias a las actualizaciones que incorporan funcionalidades avanzadas directamente al Apple Watch, la app hará que tu entrenamiento marche como un reloj.",
            thumbnail: "Apple Watch Nike.jpg"
        }
    ]
    
        const getProductById = (id) => {
            return products.find(producto => producto.id == id )
        }
            const [cart,setCart] =useState([])
            const addProductCart = (id) =>{
            setCart([...cart, getProductById(id)])
        }
        return (
            <Context.Provider value={{products, getProductById, cart ,addProductCart}}>
                {children}
            </Context.Provider>
        )
    }
    export  const useCustomContext = () => useContext(Context)
    export default ContextProvider











