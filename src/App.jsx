import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";

import SelectFavorites from "./views/SelectFavorites";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<SelectFavorites />} />
        <Route path="*" element={<h1>NotFound 404</h1>} />
      </Routes>
    </div>
  );
}
