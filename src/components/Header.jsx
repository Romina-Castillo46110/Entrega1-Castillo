import React from "react";
import Navbar from "./Navbar";
import '../style/Header.css'

function Header() {
    return (
        <header className="header">
            <Navbar />
            <h1>MendoTecno</h1> 
      </header>
    )
}

export default Header;