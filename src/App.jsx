import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DrinkPage from "./pages/DrinkPage";
import PackPage from "./pages/PackPage";
import EventPage from "./pages/EventPage";
import ReviewPage from "./pages/ReviewPage";

// 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop/drink" element={<DrinkPage />} />
        <Route path="/shop/pack" element={<PackPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/event" element={<ReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
