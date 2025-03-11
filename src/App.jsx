import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Footer } from "./components/Footer";
import "./index.css";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>

  )
}

export default App;
