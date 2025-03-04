import React from "react";
import { Navbar } from "./Navbar";
import '../style/Header.css'

export const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <h1>MendoTecno</h1> 
      </header>
    )
}
