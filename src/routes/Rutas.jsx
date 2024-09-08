import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Ejercicio4/Navbar";
import { ItemListC } from "../components/Ejercicio4/ItemListC";


function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}/>
                <Route path="/productos" element={<ItemListC />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas;