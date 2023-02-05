import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";

const RegisterScreen = () => {
  const { user, loading, register } = useLoginContext();

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
    register(values);
  };

  return (
    <div>
    <Container>

      <Form onSubmit={handleSubmit} className="my-5 container">
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>
            Correo electronico con el que se desea registrar
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Escribe tu email con el que te registraras"
            className="form-control my-2"
            value={values.email}
            onChange={handleInputChange}
            name="email"
          />
          <Form.Text className="text-muted">
            Valida que este correcto antes de continuar
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
          {loading ? "Cargando..." : "Registrarme"}
        </button>
        {user.error && (
          <Alert variant="danger" className="my-2">
            {user.error}
          </Alert>
        )}
      </Form>

      <Link to="/login">Ya estoy registrado</Link>
    </Container>
    </div>
  );
};

export default RegisterScreen;
