// src/components/Header.jsx
import React from "react";
import "../css/Header.css";
import { FaBars } from "react-icons/fa";
import perfil from "../assets/perfil.png";
import amigosToto from "../assets/amigos_totoro.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="perfil"
          src={perfil}
          alt="perfil"  
        />
        <div className="text-container">
          <h1 className="H1_teste">Gabriel G. Mendonça</h1>
          <h2 className="H2_teste">Dev mobile/web</h2>
        </div>
      </div>

      <div className="logo-amigos">
        <img
          className="amigosToto"
          src={amigosToto}
          alt="amigosToto"
        />
      </div>

      <nav>
        <ul className="nav-menu">
          <li>
            <a href="#home">Menu</a>
          </li>
          <li>
            <FaBars size={30} color="black" className="FaBars" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
