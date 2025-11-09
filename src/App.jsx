import "./App.css";
// 
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 
import Layout from "./Layout/Layout";
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
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop/:category" element={<ShopPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          {/*  */}
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
