import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ prod }) => {
  return (
    <div className="col-4">
      <Card className="text-center">
        <Card.Header>{prod.category}</Card.Header>
        <Card.Img variant="top" src={prod.image} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>{prod.description}</Card.Text>
          <Button variant="info">
          <Link to={`/detail/${prod.id}`}>Ver mas</Link>
          </Button>
          <Card.Text>
            <b>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(prod.price)}
            </b>
          </Card.Text>
          <ItemCount stock={Number(prod.stock)} />
          <Button variant="primary">Añadir al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
