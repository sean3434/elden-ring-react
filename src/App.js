import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav.js"
import Footer from "./components/Footer.js"
import Home from "./pages/home.js"
import Magic from "./pages/magic.js";
import Gear from "./pages/gear.js";
import ItemsList from "./pages/items.js";
import TalismansList from "./pages/talismans.js";
import World from "./pages/world.js";
import AshesOfWarList from "./pages/magic/AshesOfWar.js";
import IncantationsList from "./pages/magic/Incantations.js";
import SorceriesList from "./pages/magic/Sorceries.js";
import SpiritsList from "./pages/magic/Spirits.js";
import AmmosList from "./pages/gear/Ammos.js";
import ArmorsList from "./pages/gear/Armors.js";
import ShieldsList from "./pages/gear/Shields.js";
import WeaponsList from "./pages/gear/Weapons.js";
import BossesList from "./pages/world/Bosses.js";
import CreaturesList from "./pages/world/Creatures.js";
import LocationsList from "./pages/world/Locations.js";
import NPCsList from "./pages/world/NPCs.js";


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
