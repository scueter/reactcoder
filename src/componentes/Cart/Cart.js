import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"


const Cart = () => {

    const {cart, emptyCart, totalCart, removerItem} = useContext(CartContext)



   return (
       <div className="container my-5">


       <hr/>
        {
            cart.length === 0
            ? <>
            <h2>Tu carrito esta vacio</h2>
            <hr/>
            <Button className="btn btn-success" as={Link} to="/categorias/videojuegos" >Regresar a comprar </Button>
            </>
                
            :   <>
       <h2>Tu compra</h2>
       <hr/>
                  {
        cart.map(item => (
            <div key={item.id}>
            <h4>{item.name}</h4>
            <p>Cantidad: {item.cantidad}</p>
            <p>Valor unitario: {item.price}</p>
            <p>Valor total: ${item.price * item.cantidad}</p>
            <button className="btn btn-outline-danger" onClick={() => removerItem(item.id)}><FaTrashAlt/></button>
            <hr/>

            </div>
        ))
       }
       <h4>Total: ${totalCart()}</h4>
       <Container className="d-flex gap-5">

       <Link className="btn btn-success" to="/checkout"> Terminar mi compra</Link>
       <button className="btn btn-danger" onClick={emptyCart}> Vaciar carrito</button>
       </Container>
</>
        }  
       </div>
   )
}

export default Cart