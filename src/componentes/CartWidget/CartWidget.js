import { Figure } from "react-bootstrap"

export const CartWidget = () => {

    return (

    <Figure className="position-sticky h-100">
        <Figure.Image
          width={50}
          height={50}
          alt="Carrito de compras"
          src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
        />
    </Figure>  
    )

}

