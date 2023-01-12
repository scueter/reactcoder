import 'bootstrap/dist/css/bootstrap.min.css';
import { CartWidget } from './componentes/CartWidget/CartWidget';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { Barnav } from "./componentes/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const nav = {
    mode: "light",
    variant: "",
    brand: "Shopping Center",
    cart: <CartWidget/>,
    cartCount: 1
  }


  return (
    
    
    
    <BrowserRouter>

      <Barnav {...nav} />

      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categorias/:categoryId' element={<ItemListContainer/>}/>
        <Route path="/search/:busqueda" element={<ItemListContainer/>}/>
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
        <Route path='/detail' element={<ItemDetailContainer itemId={1}/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
