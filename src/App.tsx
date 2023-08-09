import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
