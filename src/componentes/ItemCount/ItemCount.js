
const ItemCount = ({max, cantidad, setCantidad, onAdd}) => {



    const add = () => {
        if (cantidad < max) {
            setCantidad( cantidad + 1 )            
        }
    }


    const remove = () => {
        if (cantidad > 1) {
            setCantidad( cantidad - 1 )
        }
    }


   return (
       <div>

        <div className="container">
            <button 
                variant="dark" 
                onClick={remove}
                className='btn btn-primary'  
                disabled={cantidad === 1} 
                >
                -
            </button>
            <p className="btn btn-secondary mx-5">{cantidad}</p>
            <button 
                variant="dark" 
                disabled={cantidad === max} 
                className='btn btn-primary' 
                onClick={add}>
                +
            </button>
        </div>
        <div>
            <button 
                className="btn btn-success my-3" 
                onClick={onAdd}>
                Agregar al carrito
            </button>
        </div>
       
       </div>
   )
}

export default ItemCount