import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import './ItemListContainer.scss'

export const ItemListContainer = ( {cat, itemName, description }) => {
  return (
    <>
    
      {["lg"].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={breakpoint} className="my-5 d-flex center list">
          <ListGroup.Item>
            <Card className="text-center">
              <Card.Header>{cat}</Card.Header>
              <Card.Body>
                <Card.Title>{itemName}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
};
