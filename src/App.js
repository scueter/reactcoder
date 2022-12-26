import 'bootstrap/dist/css/bootstrap.min.css';
import { CartWidget } from './componentes/CartWidget/CartWidget';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { Barnav } from "./componentes/Navbar/Navbar";


function App() {

  const nav = {
    mode: "light",
    variant: "",
    brand: "Shopping Center",
    cat1: "Electrodomesticos",
    cat2: "Videojuegos",
    cat3: "Celulares",
    cart: <CartWidget/>,
    cartCount: 1
  }

  return (
    <div>
      <Barnav {...nav} />

      <ItemListContainer cat="Celulares" itemName="iPhone 14" description="Ultimo en guaracha"/>
    </div>
  );
}

export default App;
