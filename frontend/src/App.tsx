import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import Navigaton from "./components/Navigation";

// Importing master.scss
import "./styles/gallery.scss";

function App() {
  return (
    <Router>
      <Navigaton />
      <div style={{ padding: "16px" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
