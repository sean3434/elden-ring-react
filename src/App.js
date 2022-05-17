import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav"
import Home from "./pages/Home"
import Ashes from "./pages/Ashes";
import Gear from "./pages/Gear";
import ItemsList from "./pages/Items";
import TalismansList from "./pages/Talismans";
import World from "./pages/World";
import AshesOfWarList from "./pages/Ashes/AshesOfWar";
import IncantationsList from "./pages/Ashes/Incantations";
import SorceriesList from "./pages/Ashes/Sorceries";
import SpiritsList from "./pages/Ashes/Spirits";
import AmmosList from "./pages/Gear/Ammos";
import ArmorsList from "./pages/Gear/Armors";
import ShieldsList from "./pages/Gear/Shields";
import WeaponsList from "./pages/Gear/Weapons";
import BossesList from "./pages/World/Bosses";
import CreaturesList from "./pages/World/Creatures";
import LocationsList from "./pages/World/Locations";
import NPCsList from "./pages/World/NPCs";


function App() {
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Ashes" element={<Ashes />} />
        <Route path="Ashes/AshesOfWar" element={<AshesOfWarList />}></Route>
        <Route path="Ashes/Incantations" element={<IncantationsList />}></Route>
        <Route path="Ashes/Sorceries" element={<SorceriesList />}></Route>
        <Route path="Ashes/Spirits" element={<SpiritsList />}></Route>
      <Route path="/Gear" element={<Gear />} />
        <Route path="Gear/Ammos" element={<AmmosList />}></Route>
        <Route path="Gear/Armors" element={<ArmorsList />}></Route>
        <Route path="Gear/Shields" element={<ShieldsList />}></Route>
        <Route path="Gear/Weapons" element={<WeaponsList />}></Route>
      <Route path="/Items" element={<ItemsList />} />
      <Route path="/Talismans" element={<TalismansList />} />
      <Route path="/World" element={<World />} />
        <Route path="World/Bosses" element={<BossesList />}></Route>
        <Route path="World/Creatures" element={<CreaturesList />}></Route>
        <Route path="World/Locations" element={<LocationsList />}></Route>
        <Route path="World/NPCs" element={<NPCsList />}></Route>
    </Routes>
    </>
  )
}

export default App;
