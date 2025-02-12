"use client"

import { useState } from "react"
import { NavLink } from "./NavLink"
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`w-full flex justify-around items-center fixed max620:static h-20 top-0 left-0 z-50 bg-primary-blue max620:bg-transparent`}>
      <NavLink href="inicio">
        <span className="text-[2.1rem] max770:text-[1.5rem] max715:text-[1.2rem] max675:hidden font-extrabold tracking-widest no-underline focus:outline-none">&lt; DL /&gt;</span>
      </NavLink>
      <div className="hidden max620:flex w-full justify-end">
        {showMenu ? (
          <nav className="fixed top-0 right-0 w-full max-w-56 h-screen bg-primary-blue flex flex-col p-4 gap-7 z-[999]">
            <div className="flex items-end">
              <CgClose color="white" size={20} onClick={handleShowMenu} />
            </div>
            <NavLink href="inicio">Início</NavLink>
            <NavLink href="sobre">Sobre mim</NavLink>
            <NavLink href="tecnologias">Tecnologias</NavLink>
            <NavLink href="servicos">Serviços</NavLink>
            <NavLink href="certificados">Certificados</NavLink>
            <NavLink href="contato">Contato</NavLink>
          </nav>
        ) : (
          <div className="pr-2 hidden max620:flex" onClick={handleShowMenu}>
            <BiMenu color="white" size={36} />
          </div>
        )}
      </div>
      <nav className="max620:hidden flex justify-center items-center gap-7 flex-wrap">
        <NavLink href="inicio">Início</NavLink>
        <NavLink href="sobre">Sobre mim</NavLink>
        <NavLink href="tecnologias">Tecnologias</NavLink>
        <NavLink href="servicos">Serviços</NavLink>
        <NavLink href="certificados">Certificados</NavLink>
        <NavLink href="contato">Contato</NavLink>
      </nav>
    </header>
  )
}