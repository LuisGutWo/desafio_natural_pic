import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PokemonPage from "./views/PokemonPage";
import Home from "./views/Pokemones";
import MainHero from "./views/MainHero";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<MainHero />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
        <Route path="*" element={<h1>NotFound 404</h1>} />
      </Routes>
    </div>
  );
}
