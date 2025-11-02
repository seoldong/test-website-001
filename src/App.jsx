import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import EventPage from "./pages/EventPage";
import ProductPage from "./pages/ProductPage";


// 
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/shop/:category" element={<ShopPage />} /> */}
        {/* <Route path="/shop/drink" element={<ShopDrinkPage />} /> */}
        {/* <Route path="/shop/maskpack" element={<ShopMaskPacKPage />} /> */}
        {/* <Route path="/shop/package" element={<ShopPackagePage />} /> */}
        {/* <Route path="/event" element={<EventPage />} /> */}
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
