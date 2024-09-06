import React from "react"


export const Navbar = () => {


    return (
        <nav className="navbar"> 
            <a href="" className="logo"><h1>YeyePay</h1></a>
            <ul className="menu">
                <li><a className="menu-link" href="">Inicio</a></li>
                <li><a className="menu-link" href="">Acerca de nosotros</a></li>
                <li><a className="menu-link" href="">Ayuda y soporte</a></li>
                <li><a className="menu-link" href="">contacto</a></li>
                <li><a className="menu-link" href="">Productos</a></li>
            </ul>
        </nav>
    )

}