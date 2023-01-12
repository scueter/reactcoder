import { useParams } from "react-router-dom"
import Item from "../Item/Item"


const ItemList = ( {productos} ) => {


    const { categoryId, busqueda } = useParams()   



    return (
        <div className="container my-5">


            <h2> Nuestros productos 
                { categoryId && <span> de la categoria {categoryId} </span>} 
                { busqueda && <span> similares a tu busqueda '{busqueda}'</span>}
            </h2>
            <hr/>
 
            <section className="row my-4">
                 {productos.map((prod)  => <Item key={prod.id} prod={prod}/>)}
            </section>
        </div>
    )
 }
 
 export default ItemList