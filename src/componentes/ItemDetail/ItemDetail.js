import { useState } from "react";
import { Alert, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, image, category, description, price, stock}) => {


  const { agregarAlCarrito, isInCart } = useCartContext()

  const [cantidad, setCantidad] = useState(1)

  const navigate = useNavigate()

  const volver = () => {
    navigate("/")
    //navigate(-1) vuelve hacia atras un paso
  }

  const handleAgregar = () => {
    const item = {
        id,
        name,
        category,
        image,
        description,
        price,
        stock,
        cantidad
    }

    agregarAlCarrito(item)
;
}


if (id === undefined) {
  return <Navigate to="/error"/>
}

  

  return (
    <div>
      <Card className="text-center" key={id}>
        <Card.Header>{category}</Card.Header>
        <Card.Img variant="top" src={image} />
        <Card.Body>
        { stock <=10 && <Alert variant="danger">Ultimas unidades disponibles</Alert>}
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <b>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(price)}
            </b>
          </Card.Text>
          
              {
                !isInCart(id) 
                ? <ItemCount
                    max={stock}
                    setCantidad={setCantidad}
                    cantidad={cantidad}
                    onAdd={handleAgregar}
                />
                : <Button variant="primary" as={Link} to="/cart">Ir a Pagar</Button>
              }



          <Button variant="primary" className="mx-5" onClick={volver}>Volver</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
