import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { promiseByID } from "../Promesa/Promesa";


const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const [item, setItem] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        promiseByID(Number(itemId))
            .then((data) => {
                setItem(data)
            })
            .catch((err) =>{
                setError(err.error)
            })
    }, [itemId])

   return (
       <div className="container my-5">
            {
                error 
                    ? error 
                    : item && <ItemDetail {...item}/>
            }
       </div>
   )
}

export default ItemDetailContainer