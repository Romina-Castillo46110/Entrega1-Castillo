import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Footer } from "./components/Footer";
import { Checkout } from "./components/Checkout";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;