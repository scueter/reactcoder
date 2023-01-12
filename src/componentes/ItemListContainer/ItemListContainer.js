import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList.js/ItemList";
import { promiseForAll } from "../Promesa/Promesa";
import "./ItemListContainer.scss";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId, busqueda } = useParams();

  useEffect(() => {
    promiseForAll()
      .then((res) => {
        if (busqueda) {
            setProductos(res.filter((prod) => prod.name.includes(busqueda)));
        } else if (categoryId) {
          setProductos(res.filter((prod) => prod.category === categoryId));
        } else {
          setProductos(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId, busqueda]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
