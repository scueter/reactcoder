import { useState } from 'react'


const ItemCount = (stock) => {


    const [counter, setCounter] = useState(1)
    const add = () => {
        if (counter < Number(stock)) {
            setCounter( counter + 1 )            
        }
    }

    console.log(stock.toNumber);
    console.log (Number(stock));
    console.log (stock);



    const remove = () => {
        if (counter > 0) {
            setCounter( counter - 1 )
        }
    }


   return (
       
        <div className="container">
            <button variant="dark" onClick={add}>+</button>
            <p className="btn btn-secondary mx-5">{counter}</p>
            <button variant="dark" onClick={remove}>-</button>
        </div>
       
   )
}

export default ItemCount