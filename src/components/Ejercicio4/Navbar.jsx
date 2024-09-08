import React from "react"
import { ItemListC } from "./ItemListC"
import { Link } from "react-router-dom"


export const Navbar = () => {


    return (
        <nav className="navbar"> 
            <Link to="" className="logo"><h1>YeyePay</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="">Inicio</Link></li>
                <li><Link className="menu-link" to="">Acerca de nosotros</Link></li>
                <li><Link className="menu-link" to="">Ayuda y soporte</Link></li>
                <li><Link className="menu-link" to="">contacto</Link></li>
                <li><Link className="menu-link" to="/productos">Productos</Link></li>
            </ul>
        </nav>
    )

}