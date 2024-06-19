import { FaTimes, FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-slate-400 md:sticky top-0 z-10">
      <h1 className=' sm:mx-auto font-bold text-m text-center text-black'>Mon portefolio</h1>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className="title-font font-medium text-black mb-4 md:mb-0">
          <Link  to="/about" aria-label="About Gardet Vincent" className="sm:text-xl font-bold md:text-l  text-sm sm:mx-auto">
            Gardet Vincent
          </Link>
        </a>
        <button className="md:hidden text-xl text-black" onClick={toggleMenu}>
          {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
        <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto mx-auto`} role="navigation">
          <Link to="/" className="mr-5 font-bold hover:text-white">
            Projet
          </Link>
          <Link to="/connaissance" className=" mr-5 font-bold hover:text-white">
            Connaissances
          </Link>
          <Link to="/avis" className="mr-5 font-bold hover:text-white">
            Avis
          </Link>
          <Link  to="/about" className="mr-5 font-bold hover:text-white">
            Contactez moi
          </Link>
          
        </nav>
        
      </div>
    </header>
  );
}