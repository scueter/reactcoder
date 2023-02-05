import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Barnav } from "../Navbar/Navbar";
import Cart from "../Cart/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import Checkout from "../Checkout/Checkout";
import Error from "../Error/Error";

const PrivateRoutes = () => {
    const nav = {
        mode: "light",
        variant: "",
        brand: "Shopping Center",
        cart: <CartWidget />,
      };
   return (
<>
        <Barnav {...nav} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorias/:categoryId" element={<ItemListContainer />} />
          <Route path="/search/:busqueda" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/detail" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to={"/error"} />} />
        </Routes>
      </>
   )
}

export default PrivateRoutes