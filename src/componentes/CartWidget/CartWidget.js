import { Figure } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useCartContext } from "../../context/CartContext"

export const CartWidget = () => {

  const  { totalCantidad } = useCartContext()
  
    return (

      <LinkContainer to="/cart" style={{ cursor: 'pointer' }}>
    <Figure className="position-sticky h-100">
        <Figure.Image
          width={50}
          height={50}
          alt="Carrito de compras"
          src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
        />
        <span>{totalCantidad()}</span> 
    </Figure>  
    </LinkContainer>
    )

}

