import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";



export const Barnav = ({
  mode,
  variant,
  brand,
  cart
}) => {

  const buscar = useNavigate()

  const {user, logout} = useLoginContext()
    
  const busqueda = () => {
    const input = document.getElementById("productName").value
    buscar(`/search/${input}`)
    //navigate(-1) vuelve hacia atras un paso
  }

  //console.log(document.getElementById("switchLight").value === 'on' ? 'dark' : 'light');
  
  return (
   
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg={mode} //{`${document.getElementById("switchLight").value === 'on' ? 'dark' : 'light'}`}
          expand={expand}
          variant={mode} //{`${document.getElementById("switchLight").value === 'on' ? 'dark' : 'light'}`}
          className="mb-3"
        >
          <Container fluid>
          <LinkContainer to="/" style={{ cursor: 'pointer' }}>
            <Navbar.Brand>{brand}</Navbar.Brand>
            </LinkContainer>
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
                  <Nav.Link as={Link} to="/">
                  Inicio                  
                  </Nav.Link>
                  <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to="/categorias/videojuegos">
                      Videojuegos
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/categorias/celulares">
                      Celulares
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/categorias/electrodomesticos">
                      Electrodomesticos
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title={`Bienvenido ${user.email}`}  id="navbarScrollingDropdown">
                  Bienvenido
                    <NavDropdown.Item as={Link} to="/">
                      Ajustes de usuario
                    </NavDropdown.Item>
                    <NavDropdown.Item bg="dark" as={Link} onClick={logout}>
                      Cerrar sesion
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form>
      <Form.Check 
        type="switch"
        id="switchLight"
        className="container"
      />


    </Form>
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
            <Navbar.Brand className="p-2">
              {cart}
            </Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
