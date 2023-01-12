import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";



export const Barnav = ({
  mode,
  variant,
  brand,
  cart,
  cartCount,
}) => {

  const buscar = useNavigate()

  const busqueda = () => {
    const input = document.getElementById("productName").value
    buscar(`/search/${input}`)
    //navigate(-1) vuelve hacia atras un paso
    console.log(input);
  }

  const logo = useNavigate()

  const clickLogo = () => {
    logo("/")
  }

  
  
  return (
   
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg={mode}
          expand={expand}
          variant={variant}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand onClick={clickLogo}>{brand}</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#action1">
                  <Link to="/">Inicio</Link>                  
                  </Nav.Link>
                  <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">
                      <Link to="/categorias/videojuegos">Videojuegos</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      <Link to="/categorias/celulares">Celulares</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      <Link to="/categorias/electrodomesticos">Electrodomesticos</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Busca un articulo"
                    className="me-2"
                    aria-label="Search"
                    id="productName"
                  />
                  <Button variant="outline-success" onClick={busqueda}>
                    Buscar
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Brand className="p-2" href="#">
              {cart}
              {cartCount}
            </Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
