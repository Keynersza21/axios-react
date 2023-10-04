import axios from 'axios'
import React, {useEffect, useState} from 'react'

const ListaProductos = () => {
    const [datos, setDatos] = useState([])
    const [pagina,setPagina] = useState(1)
    useEffect(() => {
      axios.get('https://peticiones.online/api/products?page=' + pagina )
      .then(res => {
     /*      console.log("axios",res.data) */
          setDatos(res.data.results)
    })
      .catch((err => {console.log(err);}))
    }, [pagina])
    
     const lanzarPost = async () =>{
        const body = {
            name: "Producto de prueba",
            price: "66",
            image: "https://peticiones.online/images/products/noexiste.png",
            active: true
        }

        await axios.post('https://peticiones.online/api/products', body)
        .then(res =>{
            setDatos( res.data)
        })
        .catch(err => { console.log(err)  
     })
    }

  return (
    <div>
        <button onClick={lanzarPost}>Peticion POST</button>
      <div style={{flexWrap: "wrap", display: "flex", justifyContent: "center", textAlign: "center"}}>
    {
        datos.map((produc) =>(
            <div key={produc.id} style={{width: "300px", margin: "30px"}}>
                <img src={produc.image} style={{width: "100%", height: "50vh", objectFit: "contain", margin: "20px"}}/>
                <h2>{produc.name}</h2>
                <p>{produc.price}</p>
                 <button onClick={() => setPagina(pagina - 1)}>Anterior</button>
                <button onClick={() => setPagina(pagina + 1)}>Siguiente</button> 
                <p>Pagina {pagina}</p>
            </div>
            ))
        }
    </div>
    </div>
  )
}
export default ListaProductos