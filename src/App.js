import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./componentes/router/AppRouter";
import { CartProvider } from "./context/CartContext";
import { LoginProvider } from "./context/LoginContext";

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
