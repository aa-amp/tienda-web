import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Nosotros from "./pages/Nosotros";
import ProductoDetail from "./pages/ProductDetail";
import Products from "./pages/Products";   // <-- importa la nueva pantalla
import "./styles/Styles.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ProductoDetail />} />
          <Route path="/productos" element={<Products />} /> {/* ahora apunta a Products.jsx */}
          <Route path="/contacto" element={<Contact />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;