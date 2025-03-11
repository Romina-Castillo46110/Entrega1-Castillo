import React from "react";
import { Navbar } from "./Navbar";
import { CartModal } from "./CartModal";
import '../style/Header.css'

export const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <h1>MendoTienda</h1>
            <CartModal/> 
      </header>
    )
}
