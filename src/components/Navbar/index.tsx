import React from "react";
import Image from "next/image";
import logo from "../../../src/assets/images/logo.png";
import "./style.css";

export function Header() {
  return (
    <header>
      <nav id="navbar">
        <div className="nav-brand">
          <Image className="nav-img" src={logo} alt="logo" />
          <h1>PRO Lidera Skills</h1>
        </div>

        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Quem somos</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
