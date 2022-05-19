import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Magic from "./pages/Magic";
import Gear from "./pages/Gear";
import ItemsList from "./pages/Items";
import TalismansList from "./pages/Talismans";
import World from "./pages/World";
import AshesOfWarList from "./pages/Magic/AshesOfWar";
import IncantationsList from "./pages/Magic/Incantations";
import SorceriesList from "./pages/Magic/Sorceries";
import SpiritsList from "./pages/Magic/Spirits";
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
