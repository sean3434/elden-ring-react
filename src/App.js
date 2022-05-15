import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Ashes from "./pages/Ashes";
import Gear from "./pages/Gear";
import Home from "./pages/Home"
import Items from "./pages/Items";
import Talismans from "./pages/Talismans";
import World from "./pages/World";

function App() {
  return(
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Ashes" element={<Ashes />} />
      <Route path="/Gear" element={<Gear />} />
      <Route path="/Items" element={<Items />} />
      <Route path="/Talismans" element={<Talismans />} />
      <Route path="/World" element={<World />} />
    </Routes>
    </>
  )
}

export default App;
