import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import './ItemListContainer.scss'

export const ItemListContainer = ( {cat, itemName, description, stock }) => {
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
                <ItemCount stock={stock}/>
                <Button variant="primary">Añadir al carrito</Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
};
