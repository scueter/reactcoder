import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import Item from "../Item/Item"


const ItemList = ( {productos} ) => {


    const { categoryId, busqueda } = useParams()   

    console.log(productos.length);

    return (
        <div className="container my-5">

            { productos.length === 0 
            ? <h2>No se encontraron resultados para tu busqueda</h2>
            :<h2> Nuestros productos 
                { categoryId && <span> de la categoria {categoryId} </span>} 
                { busqueda && <span> similares a tu busqueda '{busqueda}'</span>}
            </h2>
            }


            <hr/>
 
            <section className="row my-4">
                 {productos.length === 0 
                 ? <Button variant="primary" as={Link} to="/">Volver al inicio</Button> 
                 : productos.map((prod)  => <Item key={prod.id} prod={prod}/>)
                 }

            </section>
        </div>
    )
 }
 
 export default ItemList