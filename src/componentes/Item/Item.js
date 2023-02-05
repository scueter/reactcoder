import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
