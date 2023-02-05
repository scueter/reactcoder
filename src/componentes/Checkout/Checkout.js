import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { Navigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, doc, updateDoc, getDoc} from "firebase/firestore";
import { Link } from "react-router-dom";


const Checkout = () => {

    const { cart, totalCart, emptyCart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: ""
      });

      const handleInputChange = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (values.nombre.length < 2) {
            alert("Nombre Invalido")
            return
        } else if(values.direccion.length < 2) {
            alert("Direccion invalida")
            return
        } else if(values.email.length < 6) {
            alert("Email Invalido")
            return
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart()
        }

        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")

        cart.forEach(prod => {
          const docRef = doc(productosRef, prod.id)
          getDoc(docRef)
            .then((doc) => {
              if (doc.data().stock - prod.cantidad >= 0) {
                updateDoc(docRef, { stock: doc.data().stock - prod.cantidad })
              } else {
                alert("No hay stock disponible")
              }

            })
        })

        addDoc(ordersRef, orden)
          .then((doc) => {
            setOrderId(doc.id)
            emptyCart()
          })
          .catch((err) => console.log(err))

      };

      if (orderId) {
        return (
          <div className="container my-5">
          <h2>Tu compra ha sido exitosa</h2>
          <hr/>
          <p>Tu codigo de orden es: {orderId}</p>
          <Button variant="primary" as={Link} to="/">Volver al inicio</Button>
          </div>
        )
      }

      if (cart.length === 0) {
        return <Navigate to="/"/>
      }

   return (
       <div className="container my-5">
           <h2>Terminar mi compra</h2>
           <hr/>

           <Form onSubmit={handleSubmit} className="my-5 container">
          <Form.Group className="mb-3 " controlId="formBasicName">
            <Form.Label>Nombre de quien recibira el pedido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe nombres y apellidos"
              className="form-control my-2"
              value={values.nombre}
              onChange={handleInputChange}
              name="nombre"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Direccion de entrega</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe tu direccion donde recibiras el producto"
              className="form-control my-2"
              value={values.direccion}
              onChange={handleInputChange}
              name="direccion"
            />
            </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Escribe tu email"
              className="form-control my-2"
              value={values.email}
              onChange={handleInputChange}
              name="email"
            />
          </Form.Group>
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </Form>

       </div>
   )
}

export default Checkout