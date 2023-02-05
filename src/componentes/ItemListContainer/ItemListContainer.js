import { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList.js/ItemList";
import "./ItemListContainer.scss";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId, busqueda } = useParams();

  useEffect(() => {
    setLoading(true);

    //1. - referencia
    const productosRef = collection(db, "productos");
    const q = categoryId 
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef

    // 2. - peticion asincronica
    if(busqueda) {
      getDocs(query(collection(db, "productos"), where("name", "", busqueda)))
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
    } else {
    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
    }
  }, [categoryId, busqueda]);

  return (
    <div>
      {loading ? (
        <Alert variant="secondary" className="my-5 container">
          <Alert.Heading>Cargando...</Alert.Heading>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Alert>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;

// promiseForAll()
// .then((res) => {
//   if (busqueda) {
//       setProductos(res.filter((prod) => prod.name.toLowerCase().includes(busqueda.toLowerCase())));
//   } else if (categoryId) {
//     setProductos(res.filter((prod) => prod.category === categoryId));
//   } else {
//     setProductos(res);
//   }
// })
// .catch((err) => {
//   console.log(err)
// })
// .finally(() => {
//   setLoading(false)
// })
