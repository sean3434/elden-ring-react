import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav.js"
import Footer from "./components/Footer.js"
import Home from "./pages/Home.js"
import Magic from "./pages/Magic.js";
import Gear from "./pages/Gear.js";
import ItemsList from "./pages/Items.js";
import TalismansList from "./pages/Talismans.js";
import World from "./pages/World.js";
import AshesOfWarList from "./pages/Magic/AshesOfWar.js";
import IncantationsList from "./pages/Magic/Incantations.js";
import SorceriesList from "./pages/Magic/Sorceries.js";
import SpiritsList from "./pages/Magic/Spirits.js";
import AmmosList from "./pages/Gear/Ammos.js";
import ArmorsList from "./pages/Gear/Armors.js";
import ShieldsList from "./pages/Gear/Shields.js";
import WeaponsList from "./pages/Gear/Weapons.js";
import BossesList from "./pages/World/Bosses.js";
import CreaturesList from "./pages/World/Creatures.js";
import LocationsList from "./pages/World/Locations.js";
import NPCsList from "./pages/World/NPCs.js";


function App() {
    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Magic" element={<Magic />} />
                <Route path="Magic/AshesOfWar" element={<AshesOfWarList />}></Route>
                <Route path="Magic/Incantations" element={<IncantationsList />}></Route>
                <Route path="Magic/Sorceries" element={<SorceriesList />}></Route>
                <Route path="Magic/Spirits" element={<SpiritsList />}></Route>
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
        <Footer />
        </>
    )
}

export default App;
