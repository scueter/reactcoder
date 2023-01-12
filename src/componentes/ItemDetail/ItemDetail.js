import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (id) => {

  const navigate = useNavigate()

  const volver = () => {
    navigate("/")
    //navigate(-1) vuelve hacia atras un paso
  }

  return (
    <div>
      <Card className="text-center">
        <Card.Header>{id.category}</Card.Header>
        <Card.Img variant="top" src={id.image} />
        <Card.Body>
          <Card.Title>{id.name}</Card.Title>
          <Card.Text>{id.description}</Card.Text>
          <Card.Text>
            <b>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(id.price)}
            </b>
          </Card.Text>
          <ItemCount stock={id.stock} />
          <Button variant="primary">Añadir al carrito</Button>
          <Button variant="primary" className="mx-5" onClick={volver}>Volver</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
