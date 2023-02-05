import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";



const Error = () => {
  return (
    <div className="container my-5">
      <h2>La pagina que estas tratando de consultar no existe</h2>
      <hr />

      <Button variant="primary" as={Link} to="/">Volver al inicio</Button>
    </div>
  );
};

export default Error;
