import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav.js"
import Footer from "./components/footer"
import Home from "./pages/home"
import Magic from "./pages/magic";
import Gear from "./pages/gear";
import ItemsList from "./pages/items";
import TalismansList from "./pages/talismans";
import World from "./pages/world";
import AshesOfWarList from "./pages/magic/AshesOfWar";
import IncantationsList from "./pages/magic/Incantations";
import SorceriesList from "./pages/magic/Sorceries";
import SpiritsList from "./pages/magic/Spirits";
import AmmosList from "./pages/gear/Ammos";
import ArmorsList from "./pages/gear/Armors";
import ShieldsList from "./pages/gear/Shields";
import WeaponsList from "./pages/gear/Weapons";
import BossesList from "./pages/world/Bosses";
import CreaturesList from "./pages/world/Creatures";
import LocationsList from "./pages/world/Locations";
import NPCsList from "./pages/world/NPCs";


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
