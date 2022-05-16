import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Ashes from "./pages/Ashes";
import Gear from "./pages/Gear";
import Home from "./pages/Home"
import ItemsList from "./pages/Items";
import Talismans from "./pages/Talismans";
import World from "./pages/World";
import AshesOfWar from "./pages/Ashes/AshesOfWar";
import Incantations from "./pages/Ashes/Incantations";
import Sorceries from "./pages/Ashes/Sorceries";
import Spirits from "./pages/Ashes/Spirits";
import Ammos from "./pages/Gear/Ammos";
import Armors from "./pages/Gear/Armors";
import Shields from "./pages/Gear/Shields";
import Weapons from "./pages/Gear/Weapons";
import Bosses from "./pages/World/Bosses";
import Creatures from "./pages/World/Creatures";
import Locations from "./pages/World/Locations";
import NPCs from "./pages/World/NPCs";


function App() {
  return(
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Ashes" element={<Ashes />} />
        <Route path="Ashes/AshesOfWar" element={<AshesOfWar />}></Route>
        <Route path="Ashes/Incantations" element={<Incantations />}></Route>
        <Route path="Ashes/Sorceries" element={<Sorceries />}></Route>
        <Route path="Ashes/Spirits" element={<Spirits />}></Route>
      <Route path="/Gear" element={<Gear />} />
        <Route path="Gear/Ammos" element={<Ammos />}></Route>
        <Route path="Gear/Armors" element={<Armors />}></Route>
        <Route path="Gear/Shields" element={<Shields />}></Route>
        <Route path="Gear/Weapons" element={<Weapons />}></Route>
      <Route path="/Items" element={<ItemsList />} />
      <Route path="/Talismans" element={<Talismans />} />
      <Route path="/World" element={<World />} />
        <Route path="World/Bosses" element={<Bosses />}></Route>
        <Route path="World/Creatures" element={<Creatures />}></Route>
        <Route path="World/Locations" element={<Locations />}></Route>
        <Route path="World/NPCs" element={<NPCs />}></Route>
    </Routes>
    </>
  )
}

export default App;
