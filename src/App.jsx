import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DrinkPage from "./pages/DrinkPage";
import EventPage from "./pages/EventPage";
import ProductPage from "./pages/ProductPage";
import MaskPacKPage from "./pages/MaskPackPage";


// 
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop/drink" element={<DrinkPage />} />
        <Route path="/shop/maskpack" element={<MaskPacKPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
