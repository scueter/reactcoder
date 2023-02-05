import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const [item, setItem] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        // ref 
        const docRef = doc(db, "productos", itemId)
        // peticion aync
        getDoc(docRef)
            .then(doc => {
                setItem({...doc.data(), id: doc.id})
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

// promiseByID(Number(itemId))
// .then((data) => {
//     setItem(data)
// })
// .catch((err) =>{
//     setError(err.error)
// })