import React from "react";
import Image from "next/image";
import logo from "../../../src/assets/images/logo.png";

export function Header() {
  return (
    <header className="w-full fixed bg-[var(--background-color)] shadow-md z-20">
      <nav className="flex items-center justify-between h-16 max-w-[1240px] mx-auto px-4">
        <div className="flex items-center text-[#4d4d4d]">
          <Image className="w-[15vh] h-[15vh]" src={logo} alt="logo" />
          <h1 className="text-[var(--primary-color)] text-lg font-bold">PRO Lidera Skills</h1>
        </div>

        <ul className="flex items-center list-none gap-4">
          <li>
            <a href="/" className="text-[var(--text-color)] hover:text-primary text-base transition-colors duration-200 ease-in-out">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="text-[var(--text-color)] hover:text-primary text-base transition-colors duration-200 ease-in-out">
              Quem somos
            </a>
          </li>
          <li>
            <a href="/" className="text-[var(--text-color)] hover:text-primary text-base transition-colors duration-200 ease-in-out">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
