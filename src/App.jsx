import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Drink from "./pages/Drink";
import Pack from "./pages/Pack";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop/drink" element={<Drink />} />
        <Route path="/shop/pack" element={<Pack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
