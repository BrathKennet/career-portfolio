import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/icons/portfolio.png'
import Menu from '../../public/icons/menu.png'
import Close from '../../public/icons/close.png'
import NavLink from '../components/navlink'
import styles from '../styles/Layouts.module.css'


const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className="z-50 bg-gradient-to-b from-[#310018] to-[#20001D] border-b border-[#B6207A] fixed w-full">
      <div
        className={`flex items-center font-medium justify-around text-white text-base ${styles.nav_items}`}
      >
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link href={"/"} className="flex items-center">
            <Image src={Logo} alt="Logo" className="h-9 w-9" width={"auto"} priority/>
            <p className="mx-4 uppercase">Portafolio</p>
          </Link>
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <Image src={Close} alt="menu" className="h-9 w-9" />
            ) : (
              <Image src={Menu} alt="menu" className="h-9 w-9" />
            )}
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8 h-full">
          <li>
            <Link href={"/"} className="py-5 px-3 inline-block">
              Inicio
            </Link>
          </li>
          <NavLink />
          <li>
            <Link href={"/about"} className="py-5 px-3 inline-block">
              Información Personal
            </Link>
          </li>
        </ul>

        {/* Mobile nav */}
        <ul
          className={`md:hidden z-40 bg-gradient-to-b from-[#310018] to-[#20001D] border-t border-[#B6207A] absolute overflow-y-auto md:h-full h-screen w-full top-0 py-10 pb-24 mt-[4.5rem] pl-4 duration-500 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <li className="md:border-0 border-b border-[#B6207A]">
            <Link
              href={"/"}
              className="py-5 px-3 inline-block"
              onClick={() => setOpen(!open)}
            >
              Inicio
            </Link>
          </li>
          <NavLink />
          <li className="md:border-0 border-b border-[#B6207A]">
            <Link href={"/about"} className="py-5 px-3 inline-block">
              Información Personal
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar