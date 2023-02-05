import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";

const LoginScreen = () => {
  const { login, user, loading, googleLogin } = useLoginContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values);
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit} className="my-5 container">
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Correo electronico del usuario</Form.Label>
            <Form.Control
              type="email"
              placeholder="Escribe tu email"
              className="form-control my-2"
              value={values.email}
              onChange={handleInputChange}
              name="email"
            />
            <Form.Text className="text-muted">
              Escribe el email con el que te registraste
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Clave</Form.Label>
            <Form.Control
              type="password"
              placeholder="Escribe tu clave para ingresar"
              className="form-control my-2"
              value={values.password}
              onChange={handleInputChange}
              name="password"
            />
          </Form.Group>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Cargando..." : "Iniciar sesion"}
          </button>
          {user.error && (
            <Alert variant="danger" className="my-2">
              {user.error}
            </Alert>
          )}
        </Form>
          <hr/>
          <Container className="d-flex gap-5">
          <button className="btn btn-primary" type="submit" disabled={loading} onClick={googleLogin}>
            {loading ? "Cargando..." : "Iniciar sesion con tu cuenta de google"}
          </button>
          <button className="btn btn-primary p-2" as={Link} to="/register">
          Registrate con tu correo electronico
          </button>
          </Container>
      </Container>
    </div>
  );
};

export default LoginScreen;
