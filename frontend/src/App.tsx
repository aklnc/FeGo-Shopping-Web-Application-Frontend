import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navigaton from "./components/Navigation";
import Copyright from "./components/Copytight";

// Pages
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import SellerPage from "./pages/SellerPage";

// Importing master.scss
import "./styles/gallery.scss";

function App() {
  return (
    <Router>
      <Navigaton />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/sellers" element={<SellerPage />} />
      </Routes>
      <Copyright />
    </Router>
  );
}

export default App;
