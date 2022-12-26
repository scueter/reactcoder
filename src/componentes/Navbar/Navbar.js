import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const Barnav = ({mode, variant, brand, cat1, cat2, cat3, cart, cartCount}) => {
    
    return (
        <>
        {['md'].map((expand) => (
          <Navbar key={expand} bg={mode} expand={expand} variant={variant} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#">{brand}</Navbar.Brand>
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
                    <Nav.Link href="#action1">Inicio</Nav.Link>
                    <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">{cat1}</NavDropdown.Item>
              <NavDropdown.Item href="#action4">{cat2}</NavDropdown.Item>
              <NavDropdown.Item href="#action5">{cat3}</NavDropdown.Item>
            </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Busca un articulo"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Buscar</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <Navbar.Brand className="p-2" href="#">{cart}{cartCount}</Navbar.Brand>      
            </Container>
          </Navbar>
        ))}
      </>
    );
}